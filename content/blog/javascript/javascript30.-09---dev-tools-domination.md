---
title: Javascript30. 09 - Dev Tools Domination
date: 2021-01-18 11:01:19
category: javascript
thumbnail: './images/javascript30.png'
draft: false
---

![](./images/javascript30.png)

# Javascript30

> `정리` : [**Javascript30**](https://javascript30.com)을 공부한 내용 기록

# 09 - Dev Tools Domination

## 목표

### 요구사항

1. console의 기능을 활용한다.

### 필요기술

1. console.

## 배운 것

### Javascript

#### Console

[console](https://developer.mozilla.org/ko/docs/Web/API/Console) 객체는 브라우저의 디버깅 콘솔(Firefox 웹 콘솔 등)에 접근할 수 있는 메서드를 제공한다.

```js
const dogs = [
  { name: 'Snickers', age: 2 },
  { name: 'hugo', age: 8 },
];

const log = (value) => console.log(value);
const warn = (value) => console.warn(value);
const error = (value) => console.error(value);
const info = (value) => console.info(value);
// const assert = (value) => console.assert(value); // failed
const clear = (value) => console.clear(value);
const dir = (value) => console.dir(value);
const groupCollapsed = (value) => console.groupCollapsed(value);
const groupEnd = (value) => console.groupEnd(value);
const count = (value) => console.count(value);
const time = (value) => console.time(value);
const timeEnd = (value) => console.timeEnd(value);
const table = (value) => console.table(value);

// Regular
log('hello');

// Interpolated
log('Hello I am a %s string!', '💩');

// Styled
log(
  '%c I am some great text',
  'font-size:50px; background:red; text-shadow: 10px 10px 0 blue'
);

// warning!
warn('OH NOOO');

// Error :|
error('Shit!');

// Info
info('Crocodiles eat 3-4 people per year');

// Testing
const p = document.querySelector('p');

console.assert(p.classList.contains('ouch'), 'That is wrong!');

// clearing
// clear();

// Viewing DOM Elements
log(p);
dir(p);
// clear();

// Grouping together
dogs.forEach((dog) => {
  groupCollapsed(`${dog.name}`);
  log(`This is ${dog.name}`);
  log(`${dog.name} is ${dog.age} years old`);
  log(`${dog.name} is ${dog.age * 7} dog years old`);
  groupEnd(`${dog.name}`);
});

// counting
count('Wes');
count('Wes');
count('Steve');
count('Steve');
count('Wes');
count('Steve');
count('Wes');
count('Steve');
count('Steve');
count('Steve');
count('Steve');
count('Steve');

// timing
time('fetching data');
fetch('https://api.github.com/users/wesbos')
  .then((data) => data.json())
  .then((data) => {
    timeEnd('fetching data');
    log(data);
  });

table(dogs);
```

👋
