---
title: Next.js_01
date: 2020-08-01 10:08:62
category: react
thumbnail: './images/nextJs_title.png'
draft: true
---

![](./images/nextJs_title.png)

> `온라인 강의` : **'양재동코드랩 - Next.js'**를 듣고 이해한 내용을 정리

# Next.js Study - 01. 😃

## 01. 네트워크란?

- **무언가(컴퓨터)**와 **무언가(컴퓨터)**가 그물망처럼 **무언가(통신매체)**에 의해 연결된 것.
  > `그물망(net)` : 점(node)과 점이 선(link)으로 연결되어 그물망이 됨.
- 네트워크는 **연결(통신매체)**에 의해 **무언가(데이터)**를 주고 받는다.

* 여기서부터 공부 내용 정리
* https://github.com/grotesq(깃헙)
* 작업 설정(mac 기준)
* homebrew(https://brew.sh/index_ko):
* Next.js(https://nextjs.org/)

- next.js?
- create-next-app 사용 가능(보일러 플레이트)
- package.json - script 수정하기:
- npm run dev: (prerendered page가 뜬다(즉 개발모드로 뜸))
- npm run build: 빌드를 진행해야 start를 시작할 수 있다.
- npm run start: 스타트 후에 수정된 내용은 build를 해야 새로운 내용이 반영된다.

- PORT 변경 방법: 터미널에서 > PROT=1234 npm run dev **혹은** package.json에서 "dev" : "next dev -p 1234"로 수정 **또는** next dev -p \${PORT}
- 위 방법 중 추천 방법 cross-env를 이용 / 터미널에서 npm i -D cross-env 설치 이후 package.json에서 "dev" : "cross-env next dev -p \${PORT-1234}"로 설정하자
-
