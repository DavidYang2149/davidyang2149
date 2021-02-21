---
title: Javascript30. 14 - JavaScript References VS Copying
date: 2020-01-25 23:01:77
category: javascript
thumbnail: './images/javascript30.png'
draft: false
---

![](./images/javascript30.png)

# Javascript30

> `정리` : [**Javascript30**](https://javascript30.com)을 공부한 내용 기록

# 14 - JavaScript References VS Copying

## 목표

### 요구사항

1. Array와 Object의 복사에 대해 공부한다.

### 필요기술

1. Javascript.

## 배운 것

### Javascript

reference type의 복사 방법에 알아보자.

**Object**와 **Array**는 **reference type**으로 두가지의 값 복사 방법이 있다.

### shallow copy(얕은 복사)

얕은 복사는 새로운 객체나 배열에 복사를 하는데 원본값의 주소만 복사하는 것을 말한다.
즉, 원본의 주소를 참조하기 때문에 원본의 값이 변경되면 복사한 값도 같이 변경된다.

```js
// Array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

const arrayCopy = players;
players.push('David');

console.log(arrayCopy.includes('David')); // true

// Object
const person = {
  name: 'Wes Bos',
  age: 80,
};

const objectCopy1 = person;
const objectCopy2 = Object.assign({}, person);

person.weight = 70;

console.log(objectCopy1.weight); // 70
console.log(objectCopy2.weight); // 70
```

### deep copy(깊은 복사)

깊은 복사는 원본의 주소가 아닌 값을 새롭게 복사하는 것을 말한다.
그래서 원본의 값이 변경되어도 새롭게 복사된 값은 변경되지 않는다.

```js
// Array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

const copy1 = players.slice();
const copy2 = [].concat(players);
const copy3 = [...players];
const copy4 = Array.from(players);

players.push('David');

console.log(copy1.includes('David')); // false
console.log(copy2.includes('David')); // false
console.log(copy3.includes('David')); // false
console.log(copy4.includes('David')); // false

// Object
const person = {
  name: 'Wes Bos',
  age: 80,
};

const copy5 = { ...person };
person.age = 33;

console.log(copy5.age); // undefined

// JSON
const copy6 = JSON.parse(JSON.stringify(person));
person.weight = 70;

console.log(copy6.weight); // undefined
```

👋
