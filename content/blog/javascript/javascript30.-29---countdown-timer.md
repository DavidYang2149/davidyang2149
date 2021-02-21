---
title: Javascript30. 29 - Countdown Timer
date: 2020-02-14 15:02:37
category: javascript
thumbnail: './images/javascript30.png'
draft: false
---

![](./images/javascript30.png)

# Javascript30

> `정리` : [**Javascript30**](https://javascript30.com)을 공부한 내용 기록

# 29 - Countdown Timer

## 목표

### 요구사항

1. 타이머를 만든다.

### 필요기술

1. Javascript.

## 배운 것

### Javascript

#### 참조

참조용 전체 코드.

```js
let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');
const customForm = document.customForm;

const handleTimer = (seconds) => {
  // clear any existing timers
  clearInterval(countdown);

  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);
  displayEndTime(then);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    // check if we should stop it!
    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }
    // display it
    displayTimeLeft(secondsLeft);
  }, 1000);
};

const displayTimeLeft = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${
    remainderSeconds < 10 ? '0' : ''
  }${remainderSeconds}`;
  document.title = display;
  timerDisplay.textContent = display;
};

const displayEndTime = (timestamp) => {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const adjustedHour = hour > 12 ? hour - 12 : hour;
  const minutes = end.getMinutes();
  endTime.textContent = `Be Back At ${adjustedHour}:${
    minutes < 10 ? '0' : ''
  }${minutes}`;
};

const startTimer = (target) => {
  const seconds = parseInt(target);
  handleTimer(seconds);
};

buttons.forEach((button) =>
  button.addEventListener('click', () => startTimer(button.dataset.time))
);
customForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const mins = customForm.minutes.value;
  handleTimer(mins * 60);
  customForm.reset();
});
```

👋
