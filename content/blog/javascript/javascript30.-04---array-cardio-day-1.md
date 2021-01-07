---
title: Javascript30. 04 - Array Cardio Day 1
date: 2021-01-05 23:01:12
category: javascript
thumbnail: './images/javascript30.png'
draft: false
---

![](./images/javascript30.png)

# Javascript30

> `정리` : [**Javascript30**](https://javascript30.com)을 공부한 내용 기록

# 04 - Array Cardio Day 1

## 목표

### 요구사항

1. 자바스크립트의 기능을 사용하여 consol.log에 배열을 정리한다.

### 필요기술

1. Array 함수들(map, sort, reduce, filter).

## 배운 것

### Array 함수

#### filter

[filter](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) 메서드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환(_return값 존재_)한다.

```js
let result1 = inventors.filter(
  (inventor) => inventor.year >= 1500 && inventor.year < 1600
);
```

#### map

[map](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map) 메서드는 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환(_return값 존재_)한다.

```js
let result2 = inventors.map((inventor) => `${inventor.first} ${inventor.last}`);
```

#### sort

[sort](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) 메서드는 배열의 요소를 적절한 위치에 정렬한 후 그 배열을 반환한다.

```js
let result3 = inventors.sort((a, b) => a.year - b.year);
```

#### reduce

[reduce](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) 메서드는 배열의 각 요소에 대해 주어진 _리듀서(reducer)_ 함수를 실행하고, 하나의 결과값을 반환한다.

```js
let result4 = inventors.reduce(
  (total, inventor) => total + (inventor.passed - inventor.year),
  0
);
```

👋
