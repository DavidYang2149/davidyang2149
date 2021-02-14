---
title: Javascript30. 28 - Video Speed Controller
date: 2021-02-13 09:02:19
category: javascript
thumbnail: './images/javascript30.png'
draft: false
---

![](./images/javascript30.png)

# Javascript30

> `정리` : [**Javascript30**](https://javascript30.com)을 공부한 내용 기록

# 28 - Video Speed Controller

## 목표

### 요구사항

1. 동영상 재생 속도를 조절한다.

### 필요기술

1. Javascript.

## 배운 것

### Javascript

[HTMLMediaElement.playbackRate](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/playbackRate)는 비디오 재생의 속도를 조절한다(배속 조절).

#### 참조

참조용 전체 코드.

```js
const speed = document.querySelector('.speed');
const speedBar = document.querySelector('.speed-bar');
const video = document.querySelector('.flex');

const handleMove = (e) => (target) => (bar) => (video) => {
  const y = e.pageY - target.offsetTop;
  const percent = y / target.offsetHeight;
  const min = 0.4;
  const max = 4;
  const height = Math.round(percent * 100) + '%';
  const playbackRate = percent * (max - min) + min;
  bar.style.height = height;
  bar.textContent = playbackRate.toFixed(2) + '×';
  video.playbackRate = playbackRate;
};

speed.addEventListener('mousemove', (e) =>
  handleMove(e)(speed)(speedBar)(video)
);
```

👋
