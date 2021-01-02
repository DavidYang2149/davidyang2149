---
title: Javascript30. 01 - JavaScript Drum Kit
date: 2021-01-02 11:01:86
category: javascript
thumbnail: './images/javascript30.png'
draft: false
---

![](./images/javascript30.png)

# Javascript30

> `정리` : [**Javascript30**](https://javascript30.com)을 공부한 내용 기록

# 01 - JavaScript Drum Kit

## 목표

### 요구사항

1. 정해진 키를 누른다.
2. 키를 누르면 소리가 재생된다.
3. 키를 누르면 CSS 효과가 발생한다.
4. CSS 효과는 0.5초 간 적용된 후 사라진다.

### 필요기술

1. 입력된 키의 값을 확인한다.
2. audio를 재생한다.
3. class를 적용한다.
4. class를 제거한다.

## 배운 것

### Document.querySelector()

[querySelector](https://developer.mozilla.org/ko/docs/Web/API/Document/querySelector)의 사용 방법.

```js
const tagPicker = tag => key => document.querySelector(`${tag}[data-key="${key}"]`);
const divPicker = tagPicker("div"); // div[data-key="${key}"]
const audioPicker = tagPicker("audio"); // audio[data-key="${key}"]
```

### Element.classList

[classList](https://developer.mozilla.org/ko/docs/Web/API/Element/classList)

`Element.classList`를 이용하여 쉽게 클래스를 추가(add), 삭제(remove), 변경(toggle)할 수 있다.

```js
const div = divPicker(key);

div.classList.add("playing");
setTimeout(() => div.classList.remove("playing"), 100);

```

### audio

`[audio](https://developer.mozilla.org/ko/docs/Web/HTML/Element/audio)`를 사용할 때 `currentTime`을 0으로 변경하면 지연없이 바로 실행이 가능하다.

```js
const audio = audioPicker(key);

audio.currentTime = 0;  // 재생 딜레이를 0으로 변경한다.
audio.play();
```

👋
