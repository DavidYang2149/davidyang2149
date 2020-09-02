---
title: Docker Setting MongoDB
date: 2020-07-24 21:07:21
category: docker
thumbnail: './images/docker-Moby-logo.png'
draft: false
---

![](./images/docker-Moby-logo.png)

# Docker Setting for MongoDB 🥭

## 01. Docker 컨테이너에서 MongoDB 설정하기(준비물)

- MacOS 기준 / Docker 설치

## 02. Mongo 이미지 다운로드 & 설정

터미널에 접속하여 Docker에 MongoDB image 내려받기.

```sh
# Docker - MongoDB image Download
# --------------------------------
$ docker pull mongo
```

Mongo 이미지 다운로드가 완료되면 MongoDB 컨테이너를 만들어 보자.

> `예시 설정` : 포트 번호 - 37017 / 접속 비밀번호 - mongodb

```sh
# Docker - MongoDB Container Create
# ----------------------------------------
$ docker run --name mongodb
-d -p 37017:27017
-v /Users/Shared/data/mongodb/db:/data/db
-e MONGO_INITDB_ROOT_USERNAME=root
-e MONGO_INITDB_ROOT_PASSWORD=mongodb
--restart=always
mongo --auth
```

> `설정 설명`  
> **–-name** : 컨테이너 이름  
> **-d** : 데몬으로 실행  
> **-p** : {도커 컨테이너 외부}:{도커 컨테이너 내부} port(포트)  
> **-v** : {도커 컨테이너 외부}:{도커 컨테이너 내부} volume(저장소)  
> **--restart** : 도커 서버 구동 시 재시작 여부  
> **🚨주의** : 내부 포트 접속 시에 27017로 설정해야 한다. (MongoDB의 기본 포트값)

✅ 이후 컨테이너가 정상적으로 올라갔는지 체크.

```sh
# Docker - MongoDB Container Check
# ---------------------------------
$ docker ps -a

# Expect Result
# ---------------------------------------------------------------------------------------------------
# CONTAINER ID  |  IMAGE  |  COMMAND    |  CREATED      |  STATUS      |  PORTS            | NAMES
# 263242sam919  |  mongo  |  "docker…"  |  1 weeks ago  |  Up 6 hours  |  37017->27017/tcp | mongodb
```

## 03. 도커 컨테이너 설정하기

Mongo 컨테이너 상태 확인 후 종료되어 있다면 작동시키기.

```sh
# Docker - MongoDB Container Check & Start
# -----------------------------------------
$ docker ps -a

# Docker - If MongoDB Container exited...
# -----------------------------------------
$ docker start mongodb
```

이후에 mongo 컨테이너의 `bash`로 접속한다.  
~~컨테이너 설정 때 입력한 **비밀번호**로 접속하자.~~

```sh
# Docker - Access to MongoDB Container(bash)
# -------------------------------------------
$ docker exec -it mongodb /bin/bash
```

👋 이제 MongoDB를 사용하면 된다.
