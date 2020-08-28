---
title: Immer_vs_Immutable
date: 2020-08-17 13:08:59
category: javascript
thumbnail: './images/immerVsImmutable.png'
draft: false
---

![](./images/immerVsImmutable.png)

> `정보` : **'immutable'**을 공부한 내용에 대한 기록

# Immutable ❓

양재동코드랩에서 next.js를 공부하던 중 Immutable의 개념에 대해 배웠다.

> Immutable?

그런데 해당 개념을 숙지한 후에 npm에서 라이브러리를 받으려고 했는데 두 가지가 존재했다.

바로 [`Immer`](https://immerjs.github.io/immer/docs/introduction)와 [`Immutable`](https://immutable-js.github.io/immutable-js)이다.

# Immer vs Immutable 😃

[`Immer`](https://immerjs.github.io/immer/docs/introduction)와 [`Immutable`](https://immutable-js.github.io/immutable-js) 두 개의 라이브러리의 차이점이 있을까?

김나람 강사님께 문의를 드려 답변을 받았다([Answer](https://github.com/grotesq/codelab-next-js-3rd/issues/2)).

목적은 같지만 두 라이브러리의 구현 방향에서 차이점을 보인다.

# Immutable

**immutable.js**는 자바스크립트 기본 **객체를 사용하지 않고** Object 대신 **Map**, Array 대신 **List**를 사용한다.

데이터의 변경의 경우 `.set()` 함수 등을 통해 수행하도록 설계 되어 있다.

```js{}
// Immutable.js
const { Map } = require('immutable');
const map1 = Map({ a: 1, b: 2, c: 3 });
const map2 = map1.set('b', 50);
map1.get('b') + ' vs. ' + map2.get('b'); // 2 vs. 50
```

# Immer

반대로 **Immer**는 자바스크립트 기본 **객체를 사용**하고, Proxy 객체를 이용하는 함수를 통해 업데이트하도록 되어 있다.

```js{}
// Immer
const produce = require('immer');
const map1 = { a: 1, b: 2, c: 3 };
const map2 = produce(map1, draft => {
  draft.b = 50;
});
map1.b + ' vs. ' + map2.b; // 2 vs. 50
```

👋
