---
title: Javascript30. 16 - Mouse Move Shadow
date: 2021-02-02 22:02:39
category: javascript
thumbnail: './images/javascript30.png'
draft: false
---

![](./images/javascript30.png)

# Javascript30

> `정리` : [**Javascript30**](https://javascript30.com)을 공부한 내용 기록

# 16 - Mouse Move Shadow

## 목표

### 요구사항

1. 현재 좌표를 확인하여 CSS 효과를 적용한다.

### 필요기술

1. Javascript.

## 배운 것

### Javascript

현재 좌표를 확인하고 좌표값을 CSS에 적용한다.

```js
const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 500; // 500px

const shadow = (e) => {
  const { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y } = e;

  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  const xWalk = Math.round((x / width) * walk - walk / 2);
  const yWalk = Math.round((y / height) * walk - walk / 2);

  // color
  text.style.textShadow = `
      ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
      ${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,0.7),
      ${yWalk}px ${xWalk * -1}px 0 rgba(0,255,0,0.7),
      ${yWalk * -1}px ${xWalk}px 0 rgba(0,0,255,0.7)
    `;
};

hero.addEventListener('mousemove', shadow);
```

👋
