---
title: Javascript30. 21 - Geolocation
date: 2020-02-06 11:02:16
category: javascript
thumbnail: './images/javascript30.png'
draft: false
---

![](./images/javascript30.png)

# Javascript30

> `정리` : [**Javascript30**](https://javascript30.com)을 공부한 내용 기록

# 21 - Geolocation

## 목표

### 요구사항

1. geolocation 기능을 이용하여 방향과 속도를 구한다.

### 필요기술

1. Javascript.

## 배운 것

### Javascript

#### geolocation

[navigator.geolocation](https://developer.mozilla.org/ko/docs/Web/API/Navigator/geolocation) 속성은 웹에서 장치의 위치를 알아낼 때 사용할 수 있는 [Geolocation](https://developer.mozilla.org/ko/docs/Web/API/Geolocation) 객체를 반환한다.

[geolocation 객체](https://developer.mozilla.org/ko/docs/WebAPI/Using_geolocation)의 기능은 다음과 같다.

1. 현재 위치 가져오기.
2. 현재 위치 추적하기.
3. 응답 미세 조정.
4. 위치 표현.

```js
navigator.geolocation.watchPosition(
  (data) => {
    console.log(data);
    speed.textContent = data.coords.speed;
    arrow.style.transform = `rotate(${data.coords.heading}deg)`;
  },
  (err) => {
    console.error(err);
  }
);
```

👋
