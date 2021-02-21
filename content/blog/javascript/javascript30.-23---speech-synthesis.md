---
title: Javascript30. 23 - Speech Synthesis
date: 2020-02-08 21:02:28
category: javascript
thumbnail: './images/javascript30.png'
draft: false
---

![](./images/javascript30.png)

# Javascript30

> `정리` : [**Javascript30**](https://javascript30.com)을 공부한 내용 기록

# 23 - Speech Synthesis

## 목표

### 요구사항

1. 텍스트를 음성으로 읽는 기능을 구현한다.

### 필요기술

1. Javascript.

## 배운 것

### Javascript

#### SpeechSynthesisUtterance

[SpeechSynthesisUtterance](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance)는 텍스트를 음성으로 변환하는 API이다.

**speechSynthesis.getVoices()**는 현재 기기에서 지원하는 음성을 가져온다.

**speechSynthesis.cancel()**는 현재 송출하는 음성을 정지시킨다.

**speechSynthesis.speak(text)**는 **text**를 음성으로 송출한다.

**speechSyntheis.addEventListener('voiceschanged', function)**는 음성 설정이 변경될 때 **function**을 실행한다.

```js
const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');

msg.text = document.querySelector('[name="text"]').value;

const populateVoices = (value) => {
  voices = value.getVoices();
  voicesDropdown.innerHTML = voices
    .filter((voice) => voice.lang.includes('en'))
    .map(
      (voice) =>
        `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`
    )
    .join('');
};

const setVoice = (event) => {
  msg.voice = voices.find((voice) => voice.name === event.srcElement.value);
  toggle();
};

const toggle = (startOver = true) => {
  speechSynthesis.cancel();
  if (startOver) {
    speechSynthesis.speak(msg);
  }
};

const setOption = (target) => {
  msg[target.name] = target.value;
  toggle();
};

speechSynthesis.addEventListener('voiceschanged', () =>
  populateVoices(speechSynthesis)
);
voicesDropdown.addEventListener('change', setVoice);
options.forEach((option) =>
  option.addEventListener('change', () => setOption(option))
);
speakButton.addEventListener('click', toggle);
stopButton.addEventListener('click', () => toggle(false));
```

👋
