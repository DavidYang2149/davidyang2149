---
title: Algorithm_05
date: 2020-08-14 20:08:46
category: algorithm
thumbnail: './images/algorithm_05.png'
draft: false
---

![](./images/algorithm_05.png)

> `서적` : **'자바스크립트로 하는 자료 구조와 알고리즘'**을 읽고 이해한 내용 정리

# Algorithm(자바스크립트 배열) - 05. 😃

자바스크립트로 문자열과 String 객체 그리고 내장 함수들을 알아본다.

## 01. 자바스크립트 배열

배열은 일반적으로 사용되는 자료 구조이다.

```js{}
const array1 = [1, 2, 3, 4]
```

### 01-01. 배열의 기본

배열의 삽입, 삭제, 접근에 대해 알아보자.

배열의 선언 후 `.push(element)` 메소드를 이용하여 배열을 삽입할 수 있다.

```js{}
const array1 = [1, 2, 3, 4]
array1.push(5) // array1 = [1, 2, 3, 4, 5]
array1.push(10) // array1 = [1, 2, 3, 4, 5, 10]
array1.push(3) // array1 = [1, 2, 3, 4, 5, 10, 3]
```

삭제는 `.pop()` 메소드를 사용하여 항목을 제거할 수 있다.

```js{}
const array1 = [1, 2, 3, 4]
array1.pop() // 4를 반환한다. array1 = [1, 2, 3]
array1.pop() // 3를 반환한다. array1 = [1, 2]
```

또한가지의 방법으로 `.shift()` 메소드가 있다. 해당 메소드는 앞에서부터 삭제한다.

```js{}
const array1 = [1, 2, 3, 4]
array1.shift() // 1를 반환한다. array1 = [2, 3, 4]
array1.shift() // 2를 반환한다. array1 = [3, 4]
```

배열은 접근하는 방법은 다음과 같다.

```js{}
const array1 = [1, 2, 3, 4]
array1[0] // 1을 반환한다.
array1[1] // 2를 반환한다.
```

### 01-02. 배열의 반복

문자에 접근하는 방법은 `.charAt()`을 이용한다.

## 02. 반복

## 03. 도움 함수

👋
