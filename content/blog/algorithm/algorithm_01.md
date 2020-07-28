---
title: Algorithm_01
date: 2020-07-28 13:07:27
category: algorithm
thumbnail: './images/algorithm_01.png'
draft: false
---

![](./images/algorithm_01.png)

> `서적` : **'자바스크립트로 하는 자료 구조와 알고리즘'**을 읽고 이해한 내용 정리

# Algorithm Study(빅오 표기법) - 01. 😃

## 01. 빅오 표기법의 기초.

- $\mathcal{O}(1)$ : 상수 시간.
- $\mathcal{O}(n)$ : 선형(Linear) 시간.
- $\mathcal{O}(n^2)$ : 2차 시간.
- $\mathcal{O}(log{}n)$ : 로그 시간.

## 02. 빅오 표기법의 규칙.

> 알고리즘의 시간 복잡도를 $\mathcal{f}(n)$으로 표현한다고 가정.  
> 여기서 $n$은 입력의 개수.  
> $\mathcal{f}(n)$의 값은 소요 시간과 소요 공간(메모리)를 의미.

1. 계수 법칙  
   상수 $k$가 $0$보다 클 때, $\mathcal{f}(n)$이 $\mathcal{O}(g(n))$이면, $\mathcal{kf}(n)$는 $\mathcal{O}(g(n))$이다.

2. 합의 법칙  
   $\mathcal{f}(n)$이 $\mathcal{O}(h(n))$이고 $\mathcal{g}(n)$이 $\mathcal{O}(p(n))$이면 $\mathcal{f}(n) + \mathcal{g}(n)$은  
   $\mathcal{O}(h(n) + p(n))$이다.

3. 곱의 법칙  
   $\mathcal{f}(n)$이 $\mathcal{O}(h(n))$이고 $\mathcal{g}(n)$이 $\mathcal{O}(p(n))$이면 $\mathcal{f}(n) * \mathcal{g}(n)$은  
   $\mathcal{O}(h(n)p(n))$이다.

4. 다항 법칙  
   $\mathcal{f}(n)$이 $k$차 다항식이면 $\mathcal{f}(n)$은 $\mathcal{O}(n^k)$이다.

### 02-01. 계수 법칙 - 상수를 제거하라.

---

**입력($n$) 크기**와 연관되지 않은 상수는 전부 무시하면 된다.

> 상수 $k > 0$인 경우, $\mathcal{f}(n)$이 $\mathcal{O}(g(n))$이면, $\mathcal{kf}(n)$는 $\mathcal{O}(g(n))$이다.

예를 들어 $3\mathcal{f}(n)$과 $\mathcal{f}(n)$는 모두 동일한 $\mathcal{O}(g(n))$인 빅오 표기법을 가지게 된다.

`javascript`로 해당 예시를 구현해보자.

```js{1}
// 3f(n)의 예시
const fn3 = num => {
  let count = 0
  for (let i = 0; i < num * 3; i++) {
    count += 1
  }
  return count
}
```

상단 코드는 $3\mathcal{f}(n)=3n$이다.

```js{1}
// f(n)의 예시
const fn = num => {
  let count = 0
  for (let i = 0; i < num; i++) {
    count += 1
  }
  return count
}
```

다음 코드는 $\mathcal{f}(n)=n$이다.

이 때 상수 $k$`(여기서는 상수 k=3)`는 코드 실행 횟수($n$)에 영향을 주지 않는다.  
그러므로 상수 값이 무시되어 $\mathcal{kf}(n)$는 $\mathcal{O}(g(n))$는 서로 동일하게 된다.

### 02-02. 합의 법칙 - 빅오를 더하라.

---

합의 법칙은 서로 다른 시간 복잡도를 더할 수 있다는 것이다.

> $\mathcal{f}(n)$이 $\mathcal{O}(h(n))$이고 $\mathcal{g}(n)$이 $\mathcal{O}(p(n))$이면 $\mathcal{f}(n) + \mathcal{g}(n)$은  
> $\mathcal{O}(h(n) + p(n))$이다.

`javascript`로 해당 예시를 보자.

```js{1}
// f(n)과 g(n)이 합해지는 예시
const fnAddGn = num => {
  let count = 0

  // f(n)
  for (let i = 0; i < num * 3; i++) {
    count += 1
  }

  // g(n)
  for (let i = 0; i < num * 6; i++) {
    count += 1
  }
  return count
}
```

다음 함수`fnAddGn`의 경우, $f(n)=3n$과 $g(n)=6n$ 두 가지가 실행되어 9n이 된다.
하지만 계수의 법칙을 적용하면 $\mathcal{O}(n)=n$이 된다.

이 때 상수 $k$`(여기서는 상수 k=3)`는 코드 실행 횟수($n$)에 영향을 주지 않는다.  
그러므로 상수 값이 무시되어 $\mathcal{kf}(n)$는 $\mathcal{O}(g(n))$는 서로 동일하게 된다.
