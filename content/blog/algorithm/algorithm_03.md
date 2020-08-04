---
title: Algorithm_03
date: 2020-08-03 21:08:41
category: algorithm
thumbnail: './images/algorithm_03.png'
draft: false
---

![](./images/algorithm_03.png)

> `서적` : **'자바스크립트로 하는 자료 구조와 알고리즘'**을 읽고 이해한 내용 정리

# Algorithm Study(자바스크립트 숫자) - 03. 😃

자바스크립트로 숫자의 특징과 숫자를 이용한 알고리즘 예시를 알아보자.

## 01. 자바스크립트의 숫자(특징).

### 01-01. 숫자의 특징.

자바스크립트에서 사용하는 숫자의 연산은 크게 다음과 같다.

- \+ : 덧셈
- \- : 뺄셈
- / : 나눗셈
- \* : 곱셈
- % : 나머지(연산)

해당 연산은 다른 언어에서도 동일하다.

반면 숫자 체계는 조금 다르다.

우선 자바스크립트의 숫자는 64bit의 **부동소수점 표현**을 사용한다.

부호가 1bit, 지수가 11bit, 소수가 52bit으로 나누어진다.

이 때 부동소수점으로 인한 오류가 발생하게 되는데, 이에 대한 예시로 자주 나타나는 케이스가 이것이다.

```js{1}
0.1 + 0.2 === 0.3 // "false"
0.1 + 0.2 // 0.30000000000000004
```

위의 이유를 이해하기 위해서는 이진 표기법으로 십진수를 표현하는 것을 알아야 한다.

🚨해당 부분은 이진법에 대한 내용을 자세하게 풀 때 다시 작성해보려 한다.(스킵)

---

### 01-02. 자바스크립트 숫자 객체.

그럼 위와 같은 문제를 해결할 수 있는 방법은 무엇이 있을까?

**자바스크립트 숫자 객체**에서 제공하는 속성들을 사용하여 문제를 해결할 수 있다.

```js{}
Math.floor // 정수로 내림
Math.round // 정수로 반올림
Math.ceil // 정수로 올림

// Example
Math.floor(0.5) // 0
Math.floor(0.4) // 0

Math.round(0.5) // 1
Math.round(0.4) // 0

Math.ceil(0.5) // 1
Math.ceil(0.4) // 1
```

또한 `Number.EPSILON`을 사용하는 방법이 있다.

이 것은 두 개의 표현 가능한 숫자 사시의 가장 작은 간격을 반환하는데, 이를 이용하여 아까의 문제를 해결할 수 있다.

```js{1, 7}
0.1 + 0.2 === 0.3 // "false"

const numberMatch = (firstNumber, secondNumber) => {
  return Math.abs(firstNumber - secondNumber) < Number.EPSILON
}

numberMatch(0.1 + 0.2, 0.3) // "true"
```

---

### 01-03. 최대치와 최소치.

64비트의 부동소수점으로 얻을 수 있는 최대치를 넘어가면 어떻게 될까?

`Number.MAX_SAFE_INTEGER` 는 가장 큰 정수값으로 **9007199254740991** 이다.

`Number.MAX_VALUE` 는 가장 큰 부동 소수점으로 **1.7976931348623157e+308** 이다.

```js{}
//  Number.MAX_SAFE_INTEGER는 가장 큰 정수를 말한다.
Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2 // "true"
// 최대값 정수를 소수와 비교할 시에는 정상적으로 작동한다.
Number.MAX_SAFE_INTEGER + 1.234 === Number.MAX_SAFE_INTEGER + 2.234 // "false"

// Number.MAX_VALUE는 가장 큰 부동 소수점을 말한다.
Number.MAX_VALUE + 1.234 === Number.MAX_VALUE + 2.234 // "true"
// 반대로 최대값 부동소수를 비교해도 비정상적인 결과가 나온다.
Number.MAX_VALUE + 1 === Number.MAX_VALUE + 2 // "true"
```

최소치는 이와 다른 결과를 얻게 된다.

`Number.MIN_SAFE_INTEGER` 는 가장 작은 정수값으로 **-9007199254740991** 이다.

`Number.MIN_VALUE` 는 가장 작은 부동 소수점으로 **5e-324** 이다.

가장 작은 부동 소수점은 음수가 아니기 때문에 정상적인 비교가 가능하다.

```js{}
//  Number.MIN_SAFE_INTEGER는 가장 작은 정수를 말한다.
Number.MIN_SAFE_INTEGER - 1 === Number.MIN_SAFE_INTEGER - 2 // "true"
// 최소값 정수를 소수와 비교할 시에는 정상적으로 작동한다.
Number.MIN_SAFE_INTEGER - 1.234 === Number.MIN_SAFE_INTEGER - 2.234 // "false"

// Number.MIN_VALUE는 가장 작은 부동 소수점을 말한다. (정상작동)
Number.MIN_VALUE - 1.234 === Number.MIN_VALUE - 2.234 // "false"
// 역시 정상적으로 작동한다.
Number.MIN_VALUE + 1 === Number.MIN_VALUE + 2 // "false"
```

무한의 경우 Infinity, -Infinity로 표기된다.

전체 크기 순서를 비교하면 다음과 같다.

```{}
-Infinity < Number.MIN_SAFE_INTEGER < Number.MIN_VALUE < 0
< Number.MAX_SAFE_INTEGER < Number.MAX_VALUE < Infinity
```

## 02. 숫자 알고리즘.

👋
