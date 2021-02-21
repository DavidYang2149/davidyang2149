---
title: Javascript30. 15 - LocalStorage
date: 2020-01-29 16:01:26
category: javascript
thumbnail: './images/javascript30.png'
draft: false
---

![](./images/javascript30.png)

# Javascript30

> `정리` : [**Javascript30**](https://javascript30.com)을 공부한 내용 기록

# 15 - LocalStorage

## 목표

### 요구사항

1. LocalStorage를 이용하여 데이터를 저장한다.

### 필요기술

1. Javascript(LocalStorage).

## 배운 것

### Javascript

LocalStorage를 이용하여 정보를 저장한다.

> localStorage.getItem('name');  
> localStorage.setItem('name', target);

```js
// ...
const items = JSON.parse(localStorage.getItem('15items')) || [];
// ...
const item = {
  content: target.value,
  done: false,
};

items.push(item);
localStorage.setItem('15items', JSON.stringify(items));
// ...
```

👋
