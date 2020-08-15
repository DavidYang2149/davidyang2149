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
const exampleArray = [1, 2, 3, 4]
```

배열의 삽입, 삭제, 접근에 대해 알아보자.

배열의 선언 후 `.push(element)` 메소드를 이용하여 배열을 삽입할 수 있다.

```js{}
const exampleArray = [1, 2, 3, 4]
exampleArray.push(5) // exampleArray = [1, 2, 3, 4, 5]
exampleArray.push(10) // exampleArray = [1, 2, 3, 4, 5, 10]
exampleArray.push(3) // exampleArray = [1, 2, 3, 4, 5, 10, 3]
```

삭제는 `.pop()` 메소드를 사용하여 항목을 제거할 수 있다.

```js{}
const exampleArray = [1, 2, 3, 4]
exampleArray.pop() // 4를 반환한다. exampleArray = [1, 2, 3]
exampleArray.pop() // 3을 반환한다. exampleArray = [1, 2]
```

또 한 가지의 방법으로 `.shift()` 메소드가 있다. 해당 메소드는 앞에서부터 삭제한다.

```js{}
const exampleArray = [1, 2, 3, 4]
exampleArray.shift() // 1을 반환한다. exampleArray = [2, 3, 4]
exampleArray.shift() // 2를 반환한다. exampleArray = [3, 4]
```

배열은 접근하는 방법은 다음과 같다.

```js{}
const exampleArray = [1, 2, 3, 4]
exampleArray[0] // 1을 반환한다.
exampleArray[1] // 2를 반환한다.
```

## 02. 반복

반복은 $O(n)$의 시간 복잡도를 가진다.

**for (초기 변수; 조건 ; 수정)**

`for`는 가장 일반적인 반복 방법이다.

```js{}
const exampleArray = [1, 2, 3, 4]

for (let i = 0; i < exampleArray.length; i++) {
  console.log(exampleArray[i])
}
```

**for (in)**

인덱스를 하나씩 호출하는 방법이다. 여기서 `in` 앞에 지정된 변수 `index`는 배열의 인덱스다(값이 아님).

```js{}
const exampleArray = [1, 2, 3, 4]

for (let index in exampleArray) {
  console.log(exampleArray[index])
}
```

**for (of)**

여기서 `of` 앞에 지정된 변수 `element`는 배열의 값이다.

```js{}
const exampleArray = [1, 2, 3, 4]

for (let element of exampleArray) {
  console.log(element)
}
```

**forEach()**

`forEach`는 반복 바깥을 빠져나오거나 배열 내 특정 항목들을 건너뛸 수 없다는 것이다.

즉, `forEach`가 전체 항목을 반복 접근한다는 의미가 있어 명시적이다.

```js{}
const exampleArray = [1, 2, 3, 4]

exampleArray.forEach(function(element, index) {
  console.log(element)
})

exampleArray.forEach(function(element, index) {
  console.log(exampleArray[index])
})
```

## 03. 도움 함수

배열 처리에 유용한 도움 함수를 알아보자.

**.slice(begin, end)**

`.slice`는 기존 배열을 수정하지 않고 배열의 일부를 반환한다.

🚨주의 : **begin(index)부터 시작**하되 **end(index)는 포함하지 않는다**는 것이다.

```js{}
const exampleArray = [1, 2, 3, 4]

exampleArray.slice(1, 2) //[2]를 반환한다, exampleArray = [1, 2, 3, 4]
exampleArray.slice(2, 4) //[3, 4]를 반환한다, exampleArray = [1, 2, 3, 4]
exampleArray.slice(2, 3) //[3]을 반환한다, exampleArray = [1, 2, 3, 4]
```

**.splice(begin, size, element1, element2...)**

`.splice` 도움 함수는 기존 항목을 제거하거나 신규 항목을 추가함으로 배열의 내용을 변경한다.

`.splice`는 세 개의 매개변수를 받는데 _시작 인덱스_, _제거할 항목의 크기_, *추가할 신규 항목들*이다.

```js{}
const exampleArray1 = [1, 2, 3, 4]

exampleArray1.splice(1, 2) //[2, 3]을 반환한다, exampleArray1 = [1, 4]

const exampleArray2 = [1, 2, 3, 4]

exampleArray2.splice(1, 2, 5, 6, 7) //[2, 3]을 반환한다, exampleArray2 = [1, 5, 6, 7, 4]

const exampleArray3 = [1, 2, 3, 4]

exampleArray3.splice(1, 2, [5, 6, 7]) //[2, 3]을 반환한다, exampleArray3 = [1, [5, 6, 7], 4]
```

**.concat()**

`.concat` 신규 항목을 배열의 맨 뒤에 추가한 다음, 해당 배열을 반환한다.

```js{}
const exampleArray = [1, 2, 3, 4]

exampleArray.concat([3, 4, 5]) //[1, 2, 3, 4, 3, 4, 5]를 반환한다, exampleArray = [1, 2, 3, 4]
```

**.length**

`.length` 속성은 배열의 크기를 반환한다.

🚨주의 : `.length`에는 함수를 실행하는 소괄호`()`가 붙지 않는다.

```js{}
const exampleArray = [1, 2, 3, 4]

console.log(exampleArray.length) // 4를 출력한다.

exampleArray.length = 3
console.log(exampleArray) // [1, 2, 3]을 출력한다.
```

**전개 연산자**

전개 연산자는 **...** 점 세 개로 표현하며 인자를 확장하는 데 사용된다.

```js{}
const exampleArray = [1, 2, 3, 4]

const addFourNumbers = (a, b, c, d) => {
  return a + b + c + d
}

console.log(addFourNumbers(...exampleArray)) // 10을 출력한다.
```

// 추후 연습문제 추가 예정.

👋
