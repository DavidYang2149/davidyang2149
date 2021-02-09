---
title: Javascript30. 22 - Follow Along Link Highlighter
date: 2021-02-07 21:02:80
category: javascript
thumbnail: './images/javascript30.png'
draft: false
---

![](./images/javascript30.png)

# Javascript30

> `정리` : [**Javascript30**](https://javascript30.com)을 공부한 내용 기록

# 22 - Follow Along Link Highlighter

## 목표

### 요구사항

1. anchor에 마우스 커서를 감지하여 반응형 CSS를 구현한다.

### 필요기술

1. Javascript.

## 배운 것

### Javascript

#### getBoundingClientRect

[getBoundingClientRect](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect)는 DOM Element의 위치를 구할 떄 사용한다.

```js
// ...
const highlightLink = (event) => {
  const linkCoords = event.getBoundingClientRect();

  const coords = {
    width: linkCoords.width,
    height: linkCoords.height,
    top: linkCoords.top + window.scrollY,
    left: linkCoords.left + window.scrollX,
  };
// ...
```

#### 참조

참조용 전체 코드.

```js
const targets = document.querySelectorAll('a');
const highlight = document.createElement('span');

highlight.classList.add('highlight');
document.body.appendChild(highlight);

const highlightLink = (event) => {
  const linkCoords = event.getBoundingClientRect();

  const coords = {
    width: linkCoords.width,
    height: linkCoords.height,
    top: linkCoords.top + window.scrollY,
    left: linkCoords.left + window.scrollX,
  };

  highlight.style.width = `${coords.width}px`;
  highlight.style.height = `${coords.height}px`;
  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
};

targets.forEach((a) =>
  a.addEventListener('mouseenter', () => highlightLink(a))
);
```

👋
