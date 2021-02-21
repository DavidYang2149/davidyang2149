---
title: Javascript30. 12 - Key Sequence Detection
date: 2020-01-25 21:01:31
category: javascript
thumbnail: './images/javascript30.png'
draft: false
---

![](./images/javascript30.png)

# Javascript30

> `정리` : [**Javascript30**](https://javascript30.com)을 공부한 내용 기록

# 12 - Key Sequence Detection

## 목표

### 요구사항

1. 특정한 문구를 입력하면 무언가를 한다.

### 필요기술

1. Javascript.

## 배운 것

### Javascript

배열로 문자열을 저장하여 해당 값을 입력하면 무언가를 할 수 있다.

```js
const pressed = [];
const secretCode = 'somecode';

window.addEventListener('keyup', (e) => {
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);

  if (pressed.join('').includes(secretCode)) {
    console.log('Correct!');
    // Do something
  }
```

👋
