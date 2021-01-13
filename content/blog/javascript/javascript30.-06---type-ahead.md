---
title: Javascript30. 06 - Type Ahead
date: 2021-01-07 21:01:29
category: javascript
thumbnail: './images/javascript30.png'
draft: false
---

![](./images/javascript30.png)

# Javascript30

> `정리` : [**Javascript30**](https://javascript30.com)을 공부한 내용 기록

# 06 - Type Ahead

## 목표

### 요구사항

1. 문자를 입력하면 유사한 내용을 하단 검색어에 보여준다.

### 필요기술

1. fetch(promise)
2. 정규표현식

## 배운 것

### Javascript

#### fetch

[fetch](https://developer.mozilla.org/ko/docs/Web/API/Fetch_API/Fetch%EC%9D%98_%EC%82%AC%EC%9A%A9%EB%B2%95) 메서드를 이용하는 것으로 비동기 네트워크 통신을 알기쉽게 기술할 수 있다.

```js
fetch(endpoint)
  .then((response) => response.json())
  .then((json) => cities.push(...json));
```

> 🏆 `fetch`를 사용하면 `promise`를 반환한다. 이에 대해 더 공부해보기.

#### 정규표현식

[정규표현식](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/%EC%A0%95%EA%B7%9C%EC%8B%9D)은 문자열에 나타는 특정 문자 조합과 대응시키기 위해 사용되는 패턴이다.

```js
const numberWithCommas = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
```

[RegExp](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/RegExp) 생성자는 패턴을 사용해 텍스트를 판별할 때 사용한다.

```js
const findMatches = (wordToMatch) => (cities) => {
  return cities.filter((place) => {
    const regex = new RegExp(wordToMatch, 'gi');
    return place.city.match(regex) || place.state.match(regex);
  });
};
```

👋
