---
title: Javascript30. 25 - Event Capture, Propagation, Bubbling and Once
date: 2021-02-10 16:02:88
category: javascript
thumbnail: './images/javascript30.png'
draft: false
---

![](./images/javascript30.png)

# Javascript30

> `정리` : [**Javascript30**](https://javascript30.com)을 공부한 내용 기록

# 25 - Event Capture, Propagation, Bubbling and Once

## 목표

### 요구사항

1. 이벤트 Capture, Propagation, Bubbling과 Once(1회 실행)을 구현한다.

### 필요기술

1. Javascript.

## 배운 것

### Javascript

#### Capture, Propagation, Bubbling, Once

이벤트의 기초인 캡처링과 버블링, 중단, 1회 실행 등을 알아보자.

#### Capture(이벤트 캡처링)

이벤트가 하위 요소로 전파되는 단계를 캡처링이라고 한다.

실제 코드에서는 자주 사용하진 않는다.

이벤트 캡처링을 등록하는 방법은 `addEventListener`를 실행하면서 `capture: true`를 추가하면 된다.

```js{4}
// ...
divs.forEach((div) =>
  div.addEventListener('click', (event) => logText(div)(event), {
    capture: true,
    once: true,
  })
);
// ...
```

#### Bubbling(이벤트 버블링)

이벤트가 가장 깊은 요소에서 시작해서 점점 부모 요소로 올라가는 것을 이벤트 버블링이라고 한다.

이벤트 버블링은 임의로 막지 않는 이상 자동으로 실행된다.

#### Propagation(중단)

이벤트의 버블링을 막기 위해서는 `event.stopPropagation()`를 사용하면 된다.

#### Once(1회 실행)

이벤트를 일회만 실행히시려면 다음과 같이 하면 된다.

```js{7}
// ...
button.addEventListener(
  'click',
  () => {
    console.log('Click!!!');
  },
  { once: true }
);
// ...
```

#### 참조

참조용 전체 코드.

이벤트 캡처링과 버블링에 대한 더 자세한 설명은 [javascript.info](https://ko.javascript.info/bubbling-and-capturing)를 참조하자.

```js
const button = document.querySelector('button');
const divs = document.querySelectorAll('div');

const logText = (target) => (event) => {
  console.log(target.classList.value);
  // event.stopPropagation(); // stop bubbling!
  // console.log(target);
};

divs.forEach((div) =>
  div.addEventListener('click', (event) => logText(div)(event), {
    capture: false,
    once: true,
  })
);

button.addEventListener(
  'click',
  () => {
    console.log('Click!!!');
  },
  {
    once: true,
  }
);
```

👋
