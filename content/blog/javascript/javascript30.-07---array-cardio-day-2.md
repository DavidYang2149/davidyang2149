---
title: Javascript30. 07 - Array Cardio Day 2
date: 2020-01-13 18:01:99
category: javascript
thumbnail: './images/javascript30.png'
draft: false
---

![](./images/javascript30.png)

# Javascript30

> `정리` : [**Javascript30**](https://javascript30.com)을 공부한 내용 기록

# 07 - Array Cardio Day 2

## 목표

### 요구사항

1. 자바스크립트의 기능을 사용하여 consol.log에 배열을 정리한다.

### 필요기술

1. Array 함수들(map, sort, reduce, filter).

## 배운 것

### Javascript

#### some, every

[some](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/some) 메서드는 배열 안의 어떤 요소라도 주어진 판별 함수를 통과하는지 테스트한다.

```js
const isAdult = people.some(
  (person) => new Date().getFullYear - person.year >= 19
);
```

[every](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/every) 메서드는 배열 안의 모든 요소가 주어진 판별 함수를 통과하는지 테스트한다.

```js
const isEveryAdult = people.every(
  (person) => new Date().getFullYear - person.year >= 19
);
```

#### find, findIndex

[find](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/find) 메서드는 주어진 판별 함수를 만족하는 첫 번째 요소의 값을 반환한다. 그런 요소가 없다면 undefined를 반환한다.

```js
const target = comments.find((comment) => comment.id === 823423);
```

[findIndex](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex) 메서드는 주어진 판별 함수를 만족하는 배열의 첫 번째 요소에 대한 인덱스를 반환한다. 만족하는 요소가 없으면 -1을 반환한다.

```js
const index = comments.findIndex((comment) => comment.id === 823423);
```

#### splice, slice

[slice](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) 메서드는 어떤 배열의 begin부터 end까지(end 미포함)에 대한 얕은 복사본을 새로운 배열 객체로 반환한다. 원본 배열은 바뀌지 않는다.

```js
// immutable
const newComments = [...comments.slice(0, index), ...comments.slice(index + 1)];
```

> 🏆 `slice`와 유사한 `splice`를 알아보자.

[splice](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) 메서드는 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경한다.

```js
// mutable
comments.splice(index, 1);
```

👋
