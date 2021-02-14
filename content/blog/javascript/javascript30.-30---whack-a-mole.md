---
title: Javascript30. 30 - Whack A Mole
date: 2021-02-14 16:02:51
category: javascript
thumbnail: './images/javascript30.png'
draft: false
---

![](./images/javascript30.png)

# Javascript30

> `정리` : [**Javascript30**](https://javascript30.com)을 공부한 내용 기록

# 30 - Whack A Mole

## 목표

### 요구사항

1. 두더지 잡기를 만든다.

### 필요기술

1. Javascript.

## 배운 것

### Javascript

#### 참조

참조용 전체 코드.

```js
const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');

let lastHole;
let timeUp = false;
let score = 0;

const randomTime = (min, max) => {
  return Math.round(Math.random() * (max - min) + min);
};

const randomHole = (holes) => {
  const idx = Math.floor(Math.random() * holes.length);
  const hole = holes[idx];
  if (hole === lastHole) {
    console.log('Ah nah thats the same one bud');
    return randomHole(holes);
  }
  lastHole = hole;
  return hole;
};

const peep = () => {
  const time = randomTime(200, 1000);
  const hole = randomHole(holes);
  hole.classList.add('up');
  setTimeout(() => {
    hole.classList.remove('up');
    if (!timeUp) peep();
  }, time);
};

const startGame = () => {
  scoreBoard.textContent = 0;
  timeUp = false;
  score = 0;
  peep();
  setTimeout(() => (timeUp = true), 10000);
};

const bonk = (e) => (target) => {
  if (!e.isTrusted) return; // cheater!
  score++;
  target.parentNode.classList.remove('up');
  scoreBoard.textContent = score;
};

moles.forEach((mole) => mole.addEventListener('click', (e) => bonk(e)(mole)));
```

👋
