---
title: Javascript30. 02 - JS and CSS Clock
date: 2021-01-03 11:01:01
category: javascript
thumbnail: './images/javascript30.png'
draft: false
---

![](./images/javascript30.png)

# Javascript30

> `정리` : [**Javascript30**](https://javascript30.com)을 공부한 내용 기록

# 02 - JS and CSS Clock

## 목표

### 요구사항

1. 아날로그 시계를 만든다.

### 필요기술

1. CSS로 시, 분, 초를 표현한다.
2. setinterval로 시간을 갱신한다.

## 배운 것

### CSS Transforms

[transform](https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Transforms/Using_CSS_transforms)의 사용 방법 숙지.

### CSS style

[style](https://developer.mozilla.org/ko/docs/Web/API/HTMLElement/style) 입력하기.

```js
secondHand.style.height = "3px";
hourHand.style.height = "8px";

const changeDegrees = target => degree => (target.style.transform = `rotate(${degree}deg)`);
```

### new Date

[Date](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date)를 호출하는 방법.

```js
const now = new Date();

const seconds = now.getSeconds();
const secondsDegrees = (seconds / 60) * 360 + 90;
changeDegrees(secondHand)(secondsDegrees);
const mins = now.getMinutes();
const minsDegrees = (mins / 60) * 360 + (seconds / 60) * 6 + 90;
changeDegrees(minsHand)(minsDegrees);
const hour = now.getHours();
const hourDegrees = (hour / 12) * 360 + (mins / 60) * 30 + 90;
changeDegrees(hourHand)(hourDegrees);
```

👋
