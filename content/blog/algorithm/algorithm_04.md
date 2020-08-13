---
title: Algorithm_04
date: 2020-08-13 17:08:94
category: algorithm
thumbnail: './images/algorithm_04.png'
draft: false
---

![](./images/algorithm_04.png)

> `서적` : **'자바스크립트로 하는 자료 구조와 알고리즘'**을 읽고 이해한 내용 정리

# Algorithm(자바스크립트 문자열) - 04. 😃

자바스크립트로 문자열과 String 객체 그리고 내장 함수들을 알아본다.

## 01. 자바스크립트 문자열 기본

자바스크립트의 기본 자료형인 String에서 사용할 수 있는 문자열 함수를 알아보자.

### 01-01. 문자열 접근

문자에 접근하는 방법은 `.charAt()`을 이용한다.

```js{}
'cat'.charAt(1) // "a"를 반환한다.
```

`.charAt(index)`는 0부터 시작하여 해당 위치의 인덱스 값을 리턴한다.

또한 지정한 인덱스 사이의 문자들을 반환하는 `.subString(startIndex, endIndex)`를 사용할 수 있다.

```js{}
'superCat'.substring(1, 2) // "u"를 반환한다.
'superCat'.substring(5, 8) // "Cat"를 반환한다.
'superCat'.substring(1) // "uperCat" 두번째 매개변수(endIndex)를 전달하지 않으면 시작 위치부터 끝까지 값을 반환한다.
```

### 01-02. 문자열 비교

문자열도 서로 비교가 가능하다.

```js{}
const firstWord = 'a'
const secondWord = 'b'
console.log(firstWord < secondWord) // 'true'를 반환한다.
```

하지만 서로 다른 길이의 두 문자열을 비교한다면 더 짧은 길이의 문자열 길이만큼만 비교한다.

```js{}
const firstWord = 'able'
const secondWord = 'b'
console.log(firstWord < secondWord) // 'true'를 반환한다.
```

여기서 **'able'의 'a'**와 **'b'**가 서로 비교 되어 secondword가 더 큰 것이 된다.

### 01-03 문자열 검색

문자열 내에서 특정 문자열을 찾기 위해 `indexOf(searchValue[, fromIndex])`를 사용할 수 있다.

`searchValue`의 값과 같은 문자열이 시작하는 인덱스(0부터 시작)를 반환하는데 일치하는 값이 없으면 **-1**을 반환한다.

```js{}
'apple iPhone'.indexOf('apple') // 0을 반환한다.
'apple iPhone'.indexOf('Galaxy') // -1을 반환한다.

'apple iPhone'.indexOf('iPhone', 6) // 6을 반환한다.
'apple iPhone'.indexOf('iPhone', 8) // -1을 반환한다.
```

### 01-04 문자열 분해

문자열을 나누기 위해서는 `split(separator[, limit])`를 사용할 수 있다.

반환값은 Array가 되며 `separator`를 기준으로 분리하여 배열로 만들어 준다(`separator`값은 사라진다).

`[, limit]`는 시작을 기준으로 몇개의 Array값을 만들지 결정한다(1부터 시작).

```js{}
const tasteWord = 'chocolate-Cookie'
tasteWord.split('-') // ['chocolate', 'Cookie']

tasteWord.split('-', 2) // ['chocolate', 'Cookie']
tasteWord.split('-', 1) // ['chocolate']
```

### 01-05 문자열 바꾸기

`.replace(string, replaceString)`은 문자열 변수 내 특정 문자열을 다른 문자열로 대체할 수 있다.

```js{}
const changeWord = 'I hate chocolate';
changeWord.('hate', 'love') // 'I love chocolate'을 출력한다.
```

## 02. 정규 표현식

정규 표현식은 검색 패턴을 정의한 문자열들의 집합이다.

자바스크립트에서는 정규 표현식에 사용할 수 있는 객체 `RegExp`를 제공한다.

`RegExp`에는 다음과 같은 함수가 있다.

- `search()` : 문자열 내에 일치하는 문자열을 찾는다. 일치하는 문자열의 인덱스를 반환한다.
- `match()` : 첫번쨰로 일치하는 문자열을 찾는다. 첫번째로 일치하는 문자열(Array)을 반환한다.
- `matchAll()` : 일치하는 문자열을 찾는다. 일치하는 문자열(Array)을 반환한다.

```js{}
const word = 'I am very very sleepy'

const searchResult = word.search(/sleep/)
console.log(searchResult) // '15'를 출력한다.

const matchResult = word.match(/very/)
console.log(matchResult)
// ["very", index: 5, input: "I am very very sleepy", groups: undefined]

const matchAllResult = word.matchAll(/very/g)
console.log(...matchAllResult)
// ["very", index: 5, input: "I am very very sleepy", groups: undefined]
// ["very", index: 10, input: "I am very very sleepy", groups: undefined]
```

기본 정규 표현식의 규칙은 다음과 같다.

- i : 대소문자를 구분하지 않고 일치하는 문자열을 검색한다.
- g : 전역적으로 일치하는 문자열을 검색한다(g를 포함하지 않으면 처음 일치하는 문자를 찾은 후 멈춘다).
- m : 다중열 문자열에 대해서도 일치하는 문자열을 검색한다.

- ^ : 문자열·줄의 시작을 나타낸다.
- \d : 모든 숫자를 찾는다.
- [abd] : 괄호 내의 모든 문자를 찾는다.
- [\^abc] : 관호 내의 모든 문자들을 제외한 모든 문자를 찾는다.
- [0~9] : 괄호 내의 모든 숫자를 찾는다.
- [\^0~9] : 괄호 내의 숫자들을 제외한 모든 숫자를 찾는다.
- (x|y) : x 또는 y를 찾는다.

// 인코딩, 암호화 추가 예정

👋
