---
title: Javascript30. 10 - Hold Shift and Check Checkboxes
date: 2021-01-19 12:01:80
category: javascript
thumbnail: './images/javascript30.png'
draft: false
---

![](./images/javascript30.png)

# Javascript30

> `정리` : [**Javascript30**](https://javascript30.com)을 공부한 내용 기록

# 10 - Hold Shift and Check Checkboxes

## 목표

### 요구사항

1. shiftKey의 기능을 활용한다.

### 필요기술

1. Javascript.

## 배운 것

### Javascript

#### shiftKey

[KeyboardEvent.shiftKey](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/shiftKey)는 읽기 전용 속성으로서 이벤트 발생 시 Shift 키를 눌렀는지(true) 누르지 않았는지(false)를 나타내는 Boolean값이다.

```js
const handleCheck = (e) => {
  let inBetween = false;

  if (e.shiftKey && e.target.checked) {
    checkboxes.forEach((checkbox) => {
      if (checkbox === e.target || checkbox === lastChecked) {
        inBetween = !inBetween;
      }

      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }
  lastChecked = e.target;
};
```

👋
