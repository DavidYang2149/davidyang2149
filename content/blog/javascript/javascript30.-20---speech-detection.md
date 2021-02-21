---
title: Javascript30. 20 - Speech Detection
date: 2020-02-05 09:02:95
category: javascript
thumbnail: './images/javascript30.png'
draft: false
---

![](./images/javascript30.png)

# Javascript30

> `정리` : [**Javascript30**](https://javascript30.com)을 공부한 내용 기록

# 20 - Speech Detection

## 목표

### 요구사항

1. SpeechRecognition 기능을 이용하여 음성을 텍스트로 변환하기.

### 필요기술

1. Javascript.

## 배운 것

### Javascript

#### SpeechRecognition

[SpeechRecognition](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition)을 이용하여 음성 데이터를 수집한다.

```js
window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.lang = 'en-US';

let p = document.createElement('p');
const words = document.querySelector('.words');
words.appendChild(p);

recognition.addEventListener('result', (e) => {
  const transcript = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join('');

  const poopScript = transcript.replace(/poop|poo|shit|dump/gi, '💩');
  p.textContent = poopScript;

  if (e.results[0].isFinal) {
    p = document.createElement('p');
    words.appendChild(p);
  }
});

recognition.addEventListener('end', recognition.start);

recognition.start();
```

👋
