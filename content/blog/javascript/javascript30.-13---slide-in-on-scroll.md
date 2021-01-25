---
title: Javascript30. 13 - Slide in on Scroll
date: 2021-01-25 22:01:59
category: javascript
thumbnail: './images/javascript30.png'
draft: false
---

![](./images/javascript30.png)

# Javascript30

> `정리` : [**Javascript30**](https://javascript30.com)을 공부한 내용 기록

# 13 - Slide in on Scroll

## 목표

### 요구사항

1. debounce와 throttle을 이용하여 스크롤링을 한다.

### 필요기술

1. Javascript.

## 배운 것

### Javascript

Debounce와 Throttle를 이해했다.

Debounce는 이벤트를 그룹화하여 특정시간이 지난 후 하나의 이벤트만을 발생시키는 기술이다.

Throttle는 일정한 주기마다 이벤트를 발생시키는 기술이다.

```js
const debounce = (func, time = 500) => {
  let timer = null;
  return (...parameters) => {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      func(...parameters);
      console.log(timer);
      timer = null;
    }, time);
  };
};

const throttle = (func, time = 500) => {
  let timer = null;
  return (...parameters) => {
    if (!timer) {
      timer = setTimeout(() => {
        func(...parameters);
        console.log(timer);
        timer = null;
      }, time);
    }
  };
};

//...
window.addEventListener('scroll', throttle(doSomething));
window.addEventListener('scroll', debounce(doSomething));
```

👋
