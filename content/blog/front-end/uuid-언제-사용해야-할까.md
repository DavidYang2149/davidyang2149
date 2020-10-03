---
title: UUID 언제 사용해야 할까
date: 2020-09-30 19:09:86
category: front-end
thumbnail: './images/200930-when-i-use-UUID.png'
draft: false
---

![](./images/200930-when-i-use-UUID.png)

> 🏆 UUID 언제 사용해야 할까?

## UUID, 언제 사용해야 할까 ❓

### 1. 발단 📋

코드숨에서 To-do App 과제를 진행하던 중 ordered list에 [key값](https://reactjs.org/docs/lists-and-keys.html#keys)을 입력해야하는 상황이 생겼다.
key값을 설정하기 위해 어떤 값을 만들어야할지 고민이 되어 슬랙방에 도움을 요청했다.

![](./images/200930-todo-key-question.png)

많은 분들께서 좋은 방법을 알려주셨는데 그 중 하나가 UUID를 사용하는 방법이었다.
UUID는 한번도 사용해본 적이 없어 관심이 생겨 적용해보았다.

### 2. UUID를 사용해보자 📚

npm에서 [UUID 라이브러리](https://www.npmjs.com/package/uuid)가 존재하여 사용했다.
방법은 간단하다.

```sh{}
$ npm install uuid
```

uuid 라이브러리 설치 후 필요한 곳에 uuid를 import하면 된다.

```js{}
import { v4 as uuidv4 } from 'uuid';

uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
```

이렇게 적용하니 고유값이 생성되어 문제없이 key값에 잘 적용되었다.
그런데 슬랙에서 UUID까지 사용할 필요가 있는지에 대한 의문을 제기해주셨다.

![](./images/200930-todo-key-answer.png)

그러고보니... UUID가 정확이 무엇이고 왜 써야할지, 또 언제 사용해야하는지 이유를 생각해보지 않았다.

### 3. UUID가 뭐죠 ❓

[위키백과에서 찾아본 UUID](https://ko.wikipedia.org/wiki/%EB%B2%94%EC%9A%A9_%EA%B3%A0%EC%9C%A0_%EC%8B%9D%EB%B3%84%EC%9E%90)는 **범용 고유 식별자**로서 네트워크 상에서 서로 모르는 개체들을 식별하고 구별하기 위해 만들어진 방법이다.

만들어지는 규칙은 **36개 문자**(32개 문자, 4개의 하이픈)로 된 8-4-4-4-12라는 5개의 그룹을 하이픈으로 구분한다고 명시되어 있다. 이렇게 말이다.

> 9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d

그래서 생성할 수 있는 값은 340,282,366,920,938,463,463,374,607,431,768,211,456개가 된다고 한다.

![](../images/wow-surprise.jpg)

UUID 표준에 따라 이름을 부여하면 고유성을 완벽하게 보장할 수는 없지만 실제 사용상에서 중복될 가능성이 거의 없다고 인정된다고 한다.

그리고 UUID는 버전에 따라 생성되는 규칙이 다르다고 한다.

- 버전 1 (MAC 주소)
- 버전 2 (DCE 보안)
- 버전 3 (MD5 해시)
- 버전 4 (랜덤)
- 버전 5 (SHA-1 해시)

uuid 라이브러리에서도 각 버전에 맞추어 키를 생성할 수 있다.

그럼 이렇게 좋은 uuid를 언제 써야할까?

### 4. UUID, 언제 사용해야 할까 ❓

👋
