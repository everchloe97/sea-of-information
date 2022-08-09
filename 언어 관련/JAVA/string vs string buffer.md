---
title: string vs string buffer
author: 염하늘
date: 2022-08-07
---

## 면접 질문

String과 String buffer의 공통점과 차이점에 대해 설명해주세요.
<br></br>

## 답변
* string과 string buffer 모두 Java에서 문자열을 다루는 대표적인 클래스라는 공통점이 있습니다. <br />
* string은 `불변의 속성`, 즉 변하지 않는 문자열을 자주 읽어들이는 경우에 사용하면 좋은 성능을 기대할 수 있습니다. (String 클래스는 불변하기 때문에 문자열을 수정하는 시점에 `새로운 String 인스턴스가 생성`됩니다.)<br />
* string buffer는 `가변적`입니다. append()나 delete() 메서드를 이용하여 동일 객체 내에서 문자열 변경이 가능합니다. 그래서 문자열 연산(문자열의 추가, 수정, 삭제)이 빈번하고 멀티스레드 환경일 경우 사용하면 효율적입니다.
<br><br />

#### keyword 🔍
* string : 불변<br/>
* string buffer : 가변<br/>
* string builder : 동기화 X

### 참고 자료
[string vs string buffer](https://ifuwanna.tistory.com/221)