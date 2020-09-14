---
title: 좋은 Git Commit 메시지 작성하기
date: 2020-09-14 19:09:85
category: front-end
thumbnail: './images/200914-git-Logo.png'
draft: false
---

![](./images/200914-git-Logo.png)

> 🏆 좋은 깃 커밋 메시지 작성하기.  
> How to write a Git commit message.

# 1. 좋은 커밋이란 ❓

[좋은 git 커밋 메시지를 작성하기 위한 8가지 약속](https://djkeh.github.io/articles/How-to-write-a-git-commit-message-kor/) 글을 읽고 정리한 내용.

**좋은 커밋을 위한 8가지 약속.**

1. 제목과 본문을 한 줄 띄워 분리하기.
2. 제목은 영문 기준 50자 이내로.
3. 제목 첫글자를 대문자로.
4. 제목 끝에 . 금지.
5. 제목은 `명령조`로.
6. Github - 제목(이나 본문)에 이슈 번호 붙이기.
7. 본문은 영문 기준 72자마다 줄 바꾸기.
8. 본문은 `어떻게`보다 `무엇을`, `왜`에 맞춰 작성하기.

그동안 커밋 메시지는 한 줄로만 간단하게 기록했다.

```sh{}
$ git commit -m"[Add]commit message"
```

그런데 전에 작업한 내용을 참조하고자 커밋을 검색할 때 생각보다 찾기가 어려웠다.

또한 많은 코드 작업을 한 경우 한 줄의 커밋 메시지로만 내용을 파악하는 데 어려움을 겪었다.

즉, 한 줄만으로는 정보를 담기에 부족한 것을 깨달았다.

# 2. 좋은 커밋의 목적 📚

[글](https://djkeh.github.io/articles/How-to-write-a-git-commit-message-kor)에서 제시하는 좋은 커밋의 목적은 다음과 같다.

1. 더 좋은 커밋 로그 가독성.
2. 더 나은 협업과 리뷰 프로세스.
3. 더 쉬운 코드 유지보수.

커밋 메시지를 작성할 때는 기승전결(제목, 본문, 꼬리말)을 고려하고 나와 타인이 쉽게 이해하고 검색하기 좋도록 간결하고 명확하게 작성하자.

# 3. Git 템플릿 만들기 🙏

커밋 메시지 템플릿을 만들어 좋은 커밋을 만들 수 있는 습관을 기르자.

```sh{}
$ touch ~/.gitmessage.txt
$ vi ~/.gitmessage.txt
```

검색으로 다른 분들이 만든 내용을 참조하여 커스텀 템플릿을 만들었다.

커스텀 템플릿을 입력하고 저장한다.

```sh{}
# --- 제목(title) - 50자 이내로 ---
# <타입(type)> <제목(title)>
# 예시(ex) : Docs(Add) Commit docs Add

# 한 줄 띄우기

# 한 줄 띄우기
# --- 본문(content) - 72자마다 줄바꾸기  ---
# 예시(ex) :
# - Workflow
# 1. 커밋 메시지에 대한 문서 제작 추가.
# 2. commit message docs add.

# 한 줄 띄우기

# 한 줄 띄우기
# --- 꼬리말(footer) ---
# <타입(type)> <이슈 번호(issue number)>
# 예시(ex) : Fix #122

# --- COMMIT END ---
# <타입> 리스트
#   init    : 초기화
#   add     : 기능 추가
#   update  : 기능 보완 (업그레이드)
#   fix     : 버그 수정
#   refactor: 리팩토링
#   style   : 스타일 (코드 형식, 세미콜론 추가: 비즈니스 로직에 변경 없음)
#   docs    : 문서 (문서 추가(Add), 수정, 삭제)
#   test    : 테스트 (테스트 코드 추가, 수정, 삭제: 비즈니스 로직에 변경 없음)
#   chore   : 기타 변경사항 (빌드 스크립트 수정 등)
# ------------------
#     제목 첫 글자를 대문자로
#     제목은 명령문으로
#     제목 끝에 마침표(.) 금지
#     제목과 본문을 한 줄 띄워 분리하기
#     본문은 "어떻게" 보다 "무엇을", "왜"를 설명한다.
#     본문에 여러 줄의 메시지를 작성할 땐 "-" 혹은 "번호"로 구분
# ------------------

```

그리고 커밋 템플릿을 추가하는 작업을 해준다.

```sh{}
$ git config --global commit.template ~/.gitmessage.txt
```

이렇게 작업하면 앞으로 `git commit`으로 입력할 때 자동으로 템플릿이 나타난다.

또한 템플릿의 주석은 실제 커밋시 포함이 되지 않는다.

# 4. 참조 📋

- [좋은 git 커밋 메시지를 작성하기 위한 8가지 약속](https://djkeh.github.io/articles/How-to-write-a-git-commit-message-kor/)
- [Git 문서 - Git 설정하기](https://git-scm.com/book/ko/v2/Git%EB%A7%9E%EC%B6%A4-Git-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0)

👋
