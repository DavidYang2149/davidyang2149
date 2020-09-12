---
title: 프론트엔드-개발환경 - Babel
date: 2020-09-12 09:09:31
category: front-end
thumbnail: './images/200912-babel-icon.png'
draft: false
---

![](./images/200912-babel-icon.png)

프론트엔드 개발환경 - Babel

> `정보` : [**김정환**](https://jeonghwan-kim.github.io/series/2019/12/22/frontend-dev-env-babel.html)님의 [프론트엔드 개발환경의 이해와 실습](https://www.inflearn.com/course/%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-%EA%B0%9C%EB%B0%9C%ED%99%98%EA%B2%BD)을 공부하고 정리한 내용.

# 1. 배경 🚀

## 1.1. 크로스 브라우징

ECMAScript(이하 ES)의 버전이 올라갈 때마다 새로운 문법이 추가되는데 각 브라우저의 스펙이 따라 지원이 되는 부분이 다르다.

바벨은 이런 크로스브라우징의 문제점을 해결할 수 있도록 도와준다.

ES6(2015) 이상으로 작성한 코드를 모든 브라우저에서 동작하도록 호환성을 지켜준다.

타입스크립트, JSX처럼 다른 언어로 분류되는 것도 포함한다.

## 1.2. 트랜스파일과 빌드

이렇게 언어로 작성된 소스 코드를 비슷한 수준의 추상화를 가진 다른 언어로 변환하는 것을 **트랜스파일**이라고 표현한다.

변환 전후의 추상화 수준이 다른 빌드와는 달리 트랜스파일은 추상화 수준을 유지한 상태로 코드를 변환한다.

_타입스크립트 → 자바스크립트_, *JSX → 자바스크립트*처럼 트랜스파일 후에도 여전히 코드를 읽을 수 있다.

# 2. 바벨의 기본동작 🗼

바벨의 주된 사용 용도는 _ES6(2015)_ 이상의 코드를 적당한 하위 버전으로 바꾸는 것이다.

이는 인터넷 익스플로러(IE)가 *ES5*까지만 지원하는 부분이 크다.

그럼 바벨을 이용해 아래 코드를 인터넷 익스플로러가 이해할 수 있는 코드로 바꿔 보자.

```js{}
// ./src/app.js
const alert = (msg) => window.alert(msg);
```

먼저 바벨 최신 버전을 설치한다. 터미널 도구를 사용하기 위해 커맨드라인 도구도 함께 설치하자.

```sh{}
$ npm install -D @babel/core @babel/cli
```

설치를 완료 후 **node_modules/.bin 폴더**에 추가된 바벨 명령어를 사용할 수 있다.

```sh{}
$ npx babel app.js
const alert = msg => window.alert(msg);
```

바벨은 세 단계로 빌드를 진행한다.

1. 파싱(Parsing)
2. 변환(Transforming)
3. 출력 (Printing)

코드를 읽고 추상 구문 트리(AST)로 변환하는 단계를 **파싱**이라고 한다.

이것은 빌드 작업을 처리하기에 적합한 자료구조인데 컴파일러 이론에 사용되는 개념이다.

추상 구문 트리를 변경하는 것이 **변환**단계이다.

실제로 코드를 변경하는 작업을 한다.

변경된 결과물을 **출력**하는 것을 마지막으로 바벨은 작업을 완료한다.

그런데 결과를 보면 빌드 이전과 변한 게 하나도 없다.

# 3. 플러그인 🏗️

기본적으로 바벨은 코드를 받아서 코드를 반환한다.

바벨 함수를 정의한다면 이런 모습이 될 것이다.

```js{}
const babel = (code) => code;
```

바벨은 파싱과 출력만 담당하고 변환 작업은 다른 녀석이 처리하는데 이것을 **플러그인**이라고 부른다.

## 3.1. 커스텀 플러그인

플러그인을 직접 만들면서 동작이 원리를 살펴보자.

`myplugin.js` 파일을 아래처럼 만들어 보자.

```js{}
// ./myplugin.js
module.exports = function myplugin() {
  return {
    visitor: {
      Identifier(path) {
        const name = path.node.name;

        // 바벨이 만든 AST 노드를 출력한다.
        console.log('Identifier() name:', name);

        // 변환작업: 코드 문자열을 역순으로 변환한다.
        path.node.name = name.split('').reverse().join('');
      },
    },
  };
};
```

플러그인 형식은 `visitor 객체`를 가진 함수를 반환해야 한다.

이 객체는 바벨이 파싱하여 만든 추상 구문 트리(AST)에 접근할 수 있는 메소드를 제공한다.

그중 `Identifier() 메소드`의 동작 원리를 살펴보는 코드다.

플러그인 사용법을 알아보자.

```sh{}
$ npx babel --help

--plugins [list] A comma-separated list of plugin names.
```

`--plugins` 옵션에 플러그인을 추가하면 된다.

```sh{}
$ npx babel app.js --plugins ./myplugin.js

Identifier() name: alert
Identifier() name: msg
Identifier() name: window
Identifier() name: alert
Identifier() name: msg

const trela = gsm => wodniw.trela(gsm);
```

`Identifier() 메소드`로 들어온 인자 path에 접근하면 코드 조각에 접근할 수 있는 것 같다.

`path.node.name`의 값을 변경하는데 문자를 뒤집는 코드다.

결과의 마지막 줄에서 보는 것처럼 이 코드의 문자열 순서가 역전되었다.

ES6(2015)로 작성한 코드를 인터넷 익스플로러에서 돌릴 수 있도록 해보자.

먼저 `const`를 `var`로 변경하는 플러그인을 만들어 보자.

```js
// ./myplugin.js
module.exports = function myplugin() {
  return {
    visitor: {
      // https://github.com/babel/babel/blob/master/packages/babel-plugin-transform-block-scoping/src/index.js#L26
      VariableDeclaration(path) {
        console.log('VariableDeclaration() kind:', path.node.kind); // const

        if (path.node.kind === 'const') {
          path.node.kind = 'var';
        }
      },
    },
  };
};
```

이번에는 `vistor 객체`에 `VariableDeclaration() 메소드`를 정의했다.

*path*에 접근해 보면 키워드가 잡히는 걸 알 수 있다.

`path.node.kind`가 `const`일 경우 `var`로 변환하는 코드다.

이 플러그인으로 다시 빌드해보자.

```sh{}
$ npx babel app.js --plugins ./myplugin.js

VariableDeclaration() kind: const
var alert = msg => window.alert(msg);
```

마지막 줄에 보면 `const`가 `var`로 변경되었다.

## 3.2. 플러그인 사용하기

이러한 결과를 만드는 것이 **block-scoping 플러그인**이다.

`const`, `let`처럼 블록 스코핑을 따르는 예약어를 `var`로 변경한다.

NPM 패키지로 제공하는 플러그인을 설치하고,

```sh{}
$ npm install -D @babel/plugin-transform-block-scoping
```

설치한 플러그인을 사용해보면,

```sh{}
npx babel app.js --plugins @babel/plugin-transform-block-scoping

var alert = msg => window.alert(msg);
```

커스텀 플러그인과 같은 결과를 나타낸다.

인터넷 익스플로러는 화살표 함수도 지원하지 않는데 **arrow-functions 플러그인**을 이용해서 일반 함수로 변경할 수 있다.

```sh{}
$ npm install -D @babel/plugin-transform-arrow-functions

$ npx babel app.js \
 --plugins @babel/plugin-transform-block-scoping \
 --plugins @babel/plugin-transform-arrow-functions

var alert = function (msg) {
return window.alert(msg);
};
```

ES5에서부터 지원하는 엄격 모드를 사용하는 것이 안전하기 때문에 "use strict" 구문을 추가해보자.

**strict-mode 플러그인**을 사용하자.

```sh{}
$ npm install -D @babel/plugin-transform-strict-mode
```

그전에 커맨드라인 명령어가 점점 길어지기 때문에 설정 파일로 분리하는 것이 낫겠다.

웹팩 `webpack.config.js`를 기본 설정파일로 사용하듯 바벨도 `babel.config.js`를 사용한다.

프로젝트 루트에 `babel.config.js` 파일을 아래와 같이 작성하자.

```js{}
// ./babel.config.js
module.exports = {
  plugins: [
    '@babel/plugin-transform-block-scoping',
    '@babel/plugin-transform-arrow-functions',
    '@babel/plugin-transform-strict-mode',
  ],
};
```

커맨드라인에서 사용한 block-scoping, arrow-functions 플러그인을 설정 파일로 옮겼는데 plugins 배열에 추가하는 방식이다.

strict-mode 플러그인을 마지막 줄에 추가했다.

다시 빌드해보자.

```sh{}
$ npx babel app.js

"use strict";

var alert = function (msg) {
return window.alert(msg);
};
```

상단에 "use strict" 구문이 추가되어 엄격모드가 활성화되었다.

이제야 비로소 인터넷 익스플로러에서 안전하게 동작하는 코드로 트랜스파일하였다.

이처럼 변환을 위한 플러그인 목록은 공식 문서의 [Plugins](https://babeljs.io/docs/en/plugins) 페이지에서 확인할 수 있다.

# 4. 프리셋 🏫

목적에 맞게 여러 가지 플러그인을 세트로 모아놓은 것을 "프리셋"이라고 한다.

## 4.1. 커스텀 프리셋

사용한 세 개 플러그인을 하나의 프리셋으로 만들어 보자.

mypreset.js 파일을 다음과 같이 작성하자.

```js{}
// mypreset.js
module.exports = function mypreset() {
  return {
    plugins: [
      '@babel/plugin-transform-arrow-functions',
      '@babel/plugin-transform-block-scoping',
      '@babel/plugin-transform-strict-mode',
    ],
  };
};
```

plugins 배열에 사용한 세 개 플러그인을 담았다.

프리셋을 사용하기 위해 바벨 설정을 약간 수정한다.

```js{}
// babel.config.js
module.exports = {
  presets: ['./mypreset.js'],
};
```

플러그인 세팅 코드를 제거하고 presets에 방금 만든 mypreset.js를 추가했다.

실행해보면 동일한 결과를 출력할 것이다.

## 4.2. 프리셋 사용하기

이처럼 바벨은 목적에 따라 몇 가지 프리셋을 제공한다.

- preset-env
- preset-flow
- preset-react
- preset-typescript

preset-env는 ES6를 변환할 때 사용한다.

바벨 7 이전 버전에는 연도별로 각 프리셋을 제공했지만(babel-reset-es2015, babel-reset-es2016...) 지금은 env 하나로 합쳐졌다.

*preset-flow, preset-react, preset-typescript*는 flow, 리액트, 타입스크립트를 변환하기 위한 프리셋이다.

인터넷 익스플로러 지원을 위해 env 프리셋을 사용해 보자.

먼저 패키지를 다운로드한다.

```sh{}
$ npm install -D @babel/preset-env
```

설치한 바벨 설정을 조금만 더 바꿔본다.

```js{}
// ./babel.config.js
module.exports = {
  presets: ['@babel/preset-env'],
};
```

그리고 빌드하면,

```sh{}
$ npx babel app.js

"use strict";

var alert = function alert(msg) {
return window.alert(msg);
};
```

mypreset.js와 같은 결과를 출력한다.

# 5. env 프리셋과 설정과 폴리필 🚥

과거에는 연도별 프리셋을 제공했다.

그러나 현재는 env 프리셋으로 무척 단순하고 직관적인 사용법을 제공한다.

## 5.1. 타깃 브라우저

코드가 크롬 최신 버전만 지원한다고 하자.

그렇다면 인터넷 익스플로러를 위한 코드 변환은 불필요하다.

target 옵션에 브라우저 버전명만 지정하면 env 프리셋은 이에 맞는 플러그인들을 찾아 최적의 코드를 출력해 낸다.

```js{}
// ./babel.config.js
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          chrome: '85', // 크롬 85까지 지원하는 코드를 만든다.
        },
      },
    ],
  ],
};
```

npx로 출력해보면,

```sh{}
$ npx babel app.js

"use strict";

const alert = msg => window.alert(msg);
```

크롬은 블록 스코핑과 화살표 함수를 지원하기 때문에 코드를 변환하지 않고 이러한 결과물을 만들었다.

만약 인터넷 익스플로러도 지원해야 한다면 바벨 설정에 브라우저 정보만 하나 더 추가하면 된다.

```js{}
// ./babel.config.js
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          chrome: '85',
          ie: '11', // ie 11까지 지원하는 코드를 만든다.
        },
      },
    ],
  ],
};
```

## 5.2. 폴리필

이번엔 변환과 조금 다른 플리필에 대해 알아보자.

ES6의 Promise 객체를 사용하는 코드다.

```js{}
// ./app.js
new Promise();
```

바벨로 처리하면 어떤 결과가 나올까?

```sh{}
$ npx babel app.js

"use strict";

new Promise();
```

env 프리셋으로 변환을 시도했지만, Promise 그대로 변함이 없다.

*target*에 *ie: 11*을 설정하고 빌드한 것인데 *인터넷 익스플로러는 여전히 프라미스를 해석하지 못하고 🚨에러*를 던진다.

브라우저는 현재 스코프부터 시작해 전역까지 Promise라는 이름을 찾으려고 시도할 것이다.

그러나 스코프 어디에도 Promise란 이름이 없기 때문에 레퍼런스 에러를 발생하고 프로그램이 죽은 것이다.

바벨은 ES6 이후 버전을 ES5 버전으로 변환할 수 있는 것만 빌드한다.

그렇지 못한 것들은 **폴리필**이라고 부르는 코드조각을 추가해서 해결한다.

ES6의 프라미스는 ES5 버전으로 대체할 수 없다.

다만 ES5 버전으로 구현할 수는 있다([참고: core-js promise](https://github.com/zloirock/core-js/blob/master/packages/core-js/modules/es.promise.js)).

env 프리셋은 폴리필을 지정할 수 있는 옵션을 제공한다.

```js{}
// ./babel.config.js
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage', // 폴리필 사용 방식 지정.
        corejs: {
          // 폴리필 버전 지정.
          version: 2,
        },
      },
    ],
  ],
};
```

`useBuiltIns`는 어떤 방식으로 폴리필을 사용할지 설정하는 옵션이다.

`usage`, `entry`, `false` 세 가지 값을 사용하는데 기본값이 `false`이므로 폴리필이 동작하지 않았다.

반면 `usage`나 `entry`를 설정하면 폴리필 패키지 중 core-js를 모듈로 가져온다.

자세한 폴리필 옵션은 바벨 문서의 [useBuiltIns](https://babeljs.io/docs/en/babel-preset-env#usebuiltins)와 [corejs](https://babeljs.io/docs/en/babel-preset-env#corejs) 섹션을 참고하자.

폴리필이 추가된 결과물을 확인해 보자.

```sh{}
$ npx babel src/app.js
"use strict";

require("core-js/modules/es6.promise");
require("core-js/modules/es6.object.to-string");

new Promise();
```

core-js 패키지로부터 프라미스 모듈을 가져오는 import 구문이 상단에 추가되었다.

이제야 비로소 인터넷 익스플로러에서 안전하게 돌아가는 결과물을 만들었다.

# 6. 웹팩으로 통합 🧭

실무 환경에서는 바벨을 직접 사용하지 않고 웹팩으로 통합해서 사용한다.

보통 로더 형태로 제공하는데 **babel-loader**가 있다.

먼저 패키지를 설치하고,

```sh{}
$ npm install -D babel-loader
```

웹팩 설정에 로더를 추가한다.

```js{}
// ./webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader', // 바벨 로더를 추가한다.
      },
    ],
  },
};
```

.js 확장자로 끝나는 파일은 babel-loader가 처리하도록 설정했다.

사용하는 써드파티 라이브라리가 많을수록 바벨 로더가 느리게 동작할 수 있는데 node_modules 폴더를 로더가 처리하지 않도록 예외 처리했다.

폴리필 사용 설정을 했다면 core-js도 설치해야한다.

웹팩은 바벨 로더가 만든 아래 코드를 만나면 core-js를 찾을 것이기 때문이다.

```sh{}
# 웹팩이 찾고자 하는 두 가지 모듈 예시.
require("core-js/modules/es6.promise")
require("core-js/modules/es6.object.to-string")
```

버전 2로 패키지를 추가하자.

```sh{}
$ npm i core-js@2
```

그리고 웹팩으로 빌드하면,

```sh{}
$ npm run build

> webpack

Hash: a30cff5fbf53027423a0
Version: webpack 4.41.2
Time: 718ms
Built at: 2019. 12. 16. 오전 8:52:05
Asset Size Chunks Chunk Names
main.js 59.7 KiB main [emitted] main
Entrypoint main = main.js
[./src/app.js] 166 bytes {main} [built]
```

미리 등록해 놓은 NPM build 스크립트의 webpack 명령어가 동작한다.

`./src/app.js`의 엔트리 포인트가 바벨 로더에 의해 빌드되고 결과물이 `./dist/main.js`로 옮겨졌다.

```sh{}
cat ./dist/main.js | grep 'var alert' -A 5

var alert = function alert(msg) {
return window.alert(msg);
};

new Promise();
```

# 7. 참조 📋

- [김정환님 블로그](https://jeonghwan-kim.github.io/series/2019/12/22/frontend-dev-env-babel.html)
- [인프런 - 프론트엔드 개발환경의 이해와 실습](https://www.inflearn.com/course/%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-%EA%B0%9C%EB%B0%9C%ED%99%98%EA%B2%BD)

👋
