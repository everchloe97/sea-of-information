---
title: 3-way handshake
author: 박신영
date: 2022-07-29
---

## 면접 질문

3-way handshake가 무엇인지 어떻게 이루어지는지 설명해주세요
<br />

### 예상 꼬리 질문 1

3-way handshake를 사용했을 때 장점과 단점에 대해 설명해주세요
<br />

## 답변

3-way handshake는 TCP 프로토콜을 통해 데이터를 전송할 때 신뢰성을 확보하기 위한 방법입니다.

![3-way handshake](https://images.velog.io/images/xx0hn/post/b8c269b8-760a-4d5a-9b87-ba0dbe9d0c62/what-is-a-tcp-3-way-handshake-process-three-way-handshaking-establishing-connection-6a724e77ba96e241.jpeg)

클라이언트와 서버가 통신할 때 위와 같이 3단계의 통신을 거칩니다.

1. **SYN 단계**: 클라이언트는 서버에 클라이언트의 ISN을 담아 SYN을 보냅니다.
2. **SYN + ACK 단계**: 서버는 클라이언트의 SYN을 수신하고, 서버의 ISN과 승인 번호(클라이언트 ISN + 1)를 보냅니다.
3. **ACK 단계**: 클라이언트는 승인 번호(서버 ISN + 1)를 담아 ACK을 서버에 보냅니다.

> ISN
> 새로운 TCP 연결의 첫 번째 패킷에 할당된 임의의 시퀀스 번호를 말하며 장치마다 다를 수 있습니다.
> <br />

### 예상 꼬리 질문 답변 1

3-way handshake를 통해서 IP 패킷의 비연결성을 보완하며 `데이터 전달을 보증`할 수 있고, 패킷이 순서대로 도착하지 않으면 TCP 세그먼트의 정보를 토대로 다시 패킷에 정보를 요청하여 `비신뢰성을 보완`할 수 있습니다. 대신 데이터 전달 전 3-way handshake를 해야하므로 이를 사용하지 않는 UDP에 비해 속도가 느립니다.
<br />

## 질문 의도 및 간략 후기

주변에서 면접 질문으로 3-way handshake에 대한 질문을 많이 받았다고 들어서 면접 질문에 추가하였습니다. 클라이언트와 서버 간에 3-way handshake 과정이 어떻게 이루어지는지와, 이렇게 사용했을 때 장점 및 단점을 알아두시면 좋을 것 같습니다.
<br />

## 참고 자료

[Day 52. HTTP, TCP/IP, UDP ](https://sudsy-action-667.notion.site/Day-52-HTTP-TCP-IP-UDP-c68178aa68664232a8e414fa8b89fa39) <br />
[[ 네트워크 쉽게 이해하기 22편 ] TCP 3 Way-Handshake & 4 Way-Handshake](https://mindnet.tistory.com/entry/%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC-%EC%89%BD%EA%B2%8C-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-22%ED%8E%B8-TCP-3-WayHandshake-4-WayHandshake)<br />
