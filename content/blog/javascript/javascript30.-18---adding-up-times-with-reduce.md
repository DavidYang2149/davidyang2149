---
title: Javascript30. 18 - Adding Up Times with Reduce
date: 2021-02-03 09:02:93
category: javascript
thumbnail: './images/javascript30.png'
draft: false
---

![](./images/javascript30.png)

# Javascript30

> `정리` : [**Javascript30**](https://javascript30.com)을 공부한 내용 기록

# 18 - Adding Up Times with Reduce

## 목표

### 요구사항

1. reduce를 사용하여 시간 값 더하기.

### 필요기술

1. Javascript.

## 배운 것

### Javascript

배열로 데이터를 받고 reduce를 이용하여 시, 분, 초를 정리한다.

```js
// HTML - <li data-time="4:04"> x Multiple...
const timeNodes = Array.from(document.querySelectorAll('[data-time]'));

const seconds = timeNodes
  .map((node) => node.dataset.time)
  .map((timeCode) => {
    const [mins, secs] = timeCode.split(':').map(parseFloat);
    return mins * 60 + secs;
  })
  .reduce((total, vidSeconds) => total + vidSeconds);

let secondsLeft = seconds;
const hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;

const mins = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;

console.log(hours, mins, secondsLeft);
```

👋
