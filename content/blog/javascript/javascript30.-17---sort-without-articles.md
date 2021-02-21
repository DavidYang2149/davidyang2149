---
title: Javascript30. 17 - Sort Without Articles
date: 2020-02-02 22:02:64
category: javascript
thumbnail: './images/javascript30.png'
draft: false
---

![](./images/javascript30.png)

# Javascript30

> `정리` : [**Javascript30**](https://javascript30.com)을 공부한 내용 기록

# 17 - Sort Without Articles

## 목표

### 요구사항

1. 배열의 값을 재정렬하여 순서대로 보여준다.

### 필요기술

1. Javascript.

## 배운 것

### Javascript

배열의 정렬 조건을 만든 후 원본의 값을 정렬하여 보여준다.

```js
const bands = [
  'The Plot in You',
  'The Devil Wears Prada',
  'Pierce the Veil',
  'Norma Jean',
  'The Bled',
  'Say Anything',
  'The Midway State',
  'We Came as Romans',
  'Counterparts',
  'Oh, Sleeper',
  'A Skylit Drive',
  'Anywhere But Here',
  'An Old Dog',
];
const ul = document.querySelector('#bands');
const removeArticle = (value) => value.replace(/^(a |the |an )/i, '').trim();

const sortedBands = bands.sort((a, b) =>
  removeArticle(a) > removeArticle(b) ? 1 : -1
);

ul.innerHTML = sortedBands.map((band) => `<li>${band}</li>`).join('');
```

👋
