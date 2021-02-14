---
title: Javascript30. 26 - Stripe Follow Along Nav
date: 2021-02-11 18:02:55
category: javascript
thumbnail: './images/javascript30.png'
draft: false
---

![](./images/javascript30.png)

# Javascript30

> `정리` : [**Javascript30**](https://javascript30.com)을 공부한 내용 기록

# 26 - Stripe Follow Along Nav

## 목표

### 요구사항

1. 마우스 커서를 올리면 메뉴를 띄운다.

### 필요기술

1. Javascript.

## 배운 것

### Javascript

#### getBoundingClientRect

[getBoundingClientRect](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect)는 DOM Element의 위치를 구할 떄 사용한다(과제 22번에서도 사용했음).

#### 참조

참조용 전체 코드.

```js
const triggers = document.querySelectorAll('.cool > li');
const background = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');

const handleEnter = (target1) => (target2) => (target3) => {
  target1.classList.add('trigger-enter');
  setTimeout(
    () =>
      target1.classList.contains('trigger-enter') &&
      target1.classList.add('trigger-enter-active'),
    150
  );
  target2.classList.add('open');

  const dropdown = target1.querySelector('.dropdown');
  const dropdownCoords = dropdown.getBoundingClientRect();
  const navCoords = target3.getBoundingClientRect();

  const coords = {
    height: dropdownCoords.height,
    width: dropdownCoords.width,
    top: dropdownCoords.top - navCoords.top,
    left: dropdownCoords.left - navCoords.left,
  };

  target2.style.setProperty('width', `${coords.width}px`);
  target2.style.setProperty('height', `${coords.height}px`);
  target2.style.setProperty(
    'transform',
    `translate(${coords.left}px, ${coords.top}px)`
  );
};

const handleLeave = (target1) => (target2) => {
  target1.classList.remove('trigger-enter', 'trigger-enter-active');
  target2.classList.remove('open');
};

triggers.forEach((trigger) =>
  trigger.addEventListener('mouseenter', () =>
    handleEnter(trigger)(background)(nav)
  )
);
triggers.forEach((trigger) =>
  trigger.addEventListener('mouseleave', () => handleLeave(trigger)(background))
);
```

👋
