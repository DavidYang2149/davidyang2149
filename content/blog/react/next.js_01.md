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

- 여기서부터 공부 내용 정리
- https://github.com/grotesq(깃헙)
- 작업 설정(mac 기준)
- homebrew(https://brew.sh/index_ko):
- Next.js(https://nextjs.org/)

* next.js?
* create-next-app 사용 가능(보일러 플레이트)
* package.json - script 수정하기:
* npm run dev: (prerendered page가 뜬다(즉 개발모드로 뜸))
* npm run build: 빌드를 진행해야 start를 시작할 수 있다.
* npm run start: 스타트 후에 수정된 내용은 build를 해야 새로운 내용이 반영된다.

* PORT 변경 방법: 터미널에서 > PROT=1234 npm run dev **혹은** package.json에서 "dev" : "next dev -p 1234"로 수정 **또는** next dev -p \${PORT}
* 위 방법 중 추천 방법 cross-env를 이용 / 터미널에서 npm i -D cross-env 설치 이후 package.json에서 "dev" : "cross-env next dev -p \${PORT-1234}"로 설정하자

* 파일 구조 설명
* pages
  ㄴ api
  ㄴ index.js
  ㄴ second.js

* pages: 파일 안에 만들어진 이름으로 route가 생성된다. / 또한 폴더로 접속할 시에 index.js를 생성할 수 있다.
* pages: 여기서는 주로 데이터 통신을 위해 작업을 한다.
* components: 새롭게 생성하여 시각적인 뷰를 위한 작업을 한다.
* \_app.js: head를 설정하여 page의 default 값을 설정할 수 있다.
* \_document.js: 서버사이드 랜더링을 할 때 최초 내용을 담아온다. / css가 포함된 라이브러리거나(예: ant design, tailwind)
* 최소 요구사항은 pages 밑에 index.js만 있으면 작동된다. (\_app.js와 \_document.js의 경우 공통 부분에 대한 설정 정도가 된다.)
* export: static 파일의 경우 export를 하여 좀 더 빠르게 랜더처리가 가능하다.
* 이미지 처리: 이미지 전용 처리 서버를 두는게 요즘 트렌드

- 다음주 next.js 과제
- vercel 무료 배포 가능(해당 페이지에 배포 예정 - 그러므로 가입해보기)

- [영화API](https://www.kobis.or.kr/kobisopenapi/homepg/main/main.do)
- [프로그래스 바](https://ricostacruz.com/nprogress/)
- [결과](https://box-office.davidyang2149.vercel.app/)
