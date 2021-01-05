---
title: Javascript30. 03 - CSS Variables
date: 2021-01-05 13:01:69
category: javascript
thumbnail: './images/javascript30.png'
draft: false
---

![](./images/javascript30.png)

# Javascript30

> `정리` : [**Javascript30**](https://javascript30.com)을 공부한 내용 기록

# 03 - CSS Variables

## 목표

### 요구사항

1. Spacing, blur, color를 선택하면 사진이 변한다.

### 필요기술

1. input의 value를 CSS에 적용한다.
2. CSS의 변수를 사용한다.

## 배운 것

### CSS 변수

[CSS var()](https://developer.mozilla.org/ko/docs/Web/CSS/var())은 변수를 설정할 수 있다.

이 때 `root` 단위에서 값을 설정하고 변경할 수 있다.

```css
:root {
  --base: #ffc600;
  --spacing: 10px;
  --blur: 10px;
}

img {
  background: var(--base);
  padding: var(--spacing);
  filter: blur(var(--blur));
}
```

### CSS style (root)

`root`에 위치한 *CSS 변수*는 다음과 같이 변경할 수 있다.

```js
spacing.addEventListener('mousemove', (e) => {
  document.documentElement.style.setProperty('--spacing', spacing.value + e.target.attributes['data-sizing'].value);
      });

blur.addEventListener('mousemove', (e) => {
  document.documentElement.style.setProperty('--blur', blur.value + e.target.attributes['data-sizing'].value);
});

base.addEventListener('change', (e) => {
  document.documentElement.style.setProperty('--base', base.value);
});
```

👋
