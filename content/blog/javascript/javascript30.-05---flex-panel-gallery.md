---
title: Javascript30. 05 - Flex Panel Gallery
date: 2021-01-07 12:01:82
category: javascript
thumbnail: './images/javascript30.png'
draft: false
---

![](./images/javascript30.png)

# Javascript30

> `정리` : [**Javascript30**](https://javascript30.com)을 공부한 내용 기록

# 05 - Flex Panel Gallery

## 목표

### 요구사항

1. 이미지를 클릭하면 글씨가 등장하고 이미지가 커진다.
2. 다시 이미지를 클릭하면 원본으로 돌아간다.

### 필요기술

1. CSS
2. 자바스크립트

## 배운 것

### CSS

#### transform

[transform](https://developer.mozilla.org/ko/docs/Web/CSS/transform) 속성은 요소에 회전, 크기 조절, 기울이기, 이동 효과를 부여할 수 있다.

```css
.panel > *:first-child {
  transform: translateY(-100%);
}
.panel.open-active > *:first-child {
  transform: translateY(0);
}
.panel > *:last-child {
  transform: translateY(100%);
}
.panel.open-active > *:last-child {
  transform: translateY(0);
}
```

### Javascript

#### 속성 접근자

[속성 접근자](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Property_Accessors)는 점 또는 괄호 표기법으로 객체의 속성에 접근할 수 있도록 해준다.

```js
const toggleActive = (value) => (panel) => {
  value.propertyName.includes('flex') && panel.classList.toggle('open-active');
};
```

👋
