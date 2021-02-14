---
title: Javascript30. 27 - Click and Drag
date: 2021-02-12 12:02:07
category: javascript
thumbnail: './images/javascript30.png'
draft: false
---

![](./images/javascript30.png)

# Javascript30

> `정리` : [**Javascript30**](https://javascript30.com)을 공부한 내용 기록

# 27 - Click and Drag

## 목표

### 요구사항

1. 마우스를 클릭한 상태에서 스크롤을 드래그한다.

### 필요기술

1. Javascript.

## 배운 것

### Javascript

#### 참조

참조용 전체 코드.

```js
const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
  if (!isDown) return; // stop the fn from running
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3;
  slider.scrollLeft = scrollLeft - walk;
});
```

👋
