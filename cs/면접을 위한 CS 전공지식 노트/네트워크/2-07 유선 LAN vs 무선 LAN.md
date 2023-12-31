---
title: 유선 LAN vs 무선 LAN
date: 2022-08-03  / 2023-09-23 (R)
---

## 면접 질문

TCP/IP의 4계층에서 링크 계층에 대해 설명해주세요

## 답변

링크 계층은 실질적으로 데이터를 전달하는 계층으로 장치 간 신호를 주고받는 규칙을 정하는 계층입니다.
OSI 7계층에서는 물리계층과 데이터링크 계층으로 나누기도 하는데, 데이터 링크 계층은 이더넷 프레임을 이용하여 에러확인, 흐름 제어, 접근 제어를 담당합니다.
물리 계층은 유선 LAN 혹은 무선 LAN을 이용하여 데이터를 전달합니다.

---

### 예상 꼬리 질문 1

유선 LAN과 무선 LAN의 차이점에 대해 설명해주실 수 있나요?

### 예상 꼬리 질문 답변 1

유선 LAN은 `전이중화 통신`을 이용한 송수신 방식을 사용합니다. 송신로와 수신로를 나누어서 데이터를 주고받으며, 현대의 고속 이더넷은 이 방식을 기반으로 통신합니다.
유선 LAN을 이루는 케이블에는 트위스트 페어 케이블과 광섬유 케이블이 대표적입니다.

무선 LAN은 `반이중화 통신`을 사용하며 수신과 송신에 같은 채널을 사용합니다. 반이중화 통신은 양쪽 장치는 서로 통신할 수는 있지만, 동시에는 통신할 수 없고, 한 번에 한 방향만 통신할 수 있는 방식입니다. 만약 동시에 전송하면 충돌이 발생하여 메세지가 왜곡 혹은 손실될 수 있으므로 충돌 방지 시스템이 필요합니다. 무선 LAN에는 와이파이, BSS, ESS가 대표적입니다.

---

### 예상 꼬리 질문 2

이더넷 프레임에 대해서도 설명해주실 수 있나요?

### 예상 꼬리 질문 답변 2

데이터 링크 계층에서 이더넷 프레임으로 데이터의 에러를 검출하고 `캡슐화` 하는데요, `수신, 송신 Mac 주소`나 `EtherType`, `CRC(에러확인 비트)` 등이 이더넷 프레임에 포함되어 있습니다.
