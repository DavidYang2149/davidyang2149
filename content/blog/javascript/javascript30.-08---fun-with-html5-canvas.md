---
title: Javascript30. 08 - Fun with HTML5 Canvas
date: 2020-01-14 19:01:79
category: javascript
thumbnail: './images/javascript30.png'
draft: false
---

![](./images/javascript30.png)

# Javascript30

> `정리` : [**Javascript30**](https://javascript30.com)을 공부한 내용 기록

# 08 - Fun with HTML5 Canvas

## 목표

### 요구사항

1. canvas를 이용하여 그림을 그릴 수 있다.

### 필요기술

1. canvas.

## 배운 것

### Javascript

#### Canvas

[Canvas](https://developer.mozilla.org/ko/docs/Web/HTML/Canvas) 엘리먼트는 그래픽을 그리기위한 수단을 제공한다. 무엇보다도 애니메이션, 게임 그래픽, 데이터 시각화, 사진 조작 및 실시간 비디오 처리를 위해 사용된다.

```html
<html>
  <!-- //... -->
  <canvas id="draw" width="800" height="800"></canvas>
  <!-- //... -->
</html>
```

#### getContext

HTML <[canvas](https://developer.mozilla.org/ko/docs/Web/HTML/Canvas)> element를 사용할 때 [getContext](https://developer.mozilla.org/ko/docs/Web/API/HTMLCanvasElement/getContext) 메소드는 캔버스의 드로잉 컨텍스트를 반환한다.

```js
const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 100;
// ctx.globalCompositeOperation = 'multiply';
```

👋
