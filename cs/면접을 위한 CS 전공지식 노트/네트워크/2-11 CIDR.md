---
title: CIDR
date: 2023-09-23
---

## 면접 질문

IP 주소를 할당하는 방식에 대해 설명해주세요. </br>
<br/>

## 답변

주로 CIDR를 사용합니다. (Classless Inter-Domain Routing) 과거에는 Class 기반으로 IP 주소를 할당하는 방식이 사용되었으나, CIDR 방식을 사용하면서 더 유연하게 IP 주소를 여러 네트워크 영역으로 나눌 수 있게 되었습니다.

</br>

CIDR를 사용했을 때, 다음과 같은 이점들이 있습니다.

-   IP 주소 낭비 감소 <br/>
    CIDR을 사용하면 특정 네트워크에 필요한 수의 IP 주소를 프로비저닝하여 낭비를 줄일 수 있습니다. 또한 라우팅 테이블 항목이 줄어들고 데이터 패킷 라우팅이 단순화됩니다.

-   데이터를 빠르게 전송 <br/>
    CIDR을 사용하면 라우터에서 보다 효율적으로 IP 주소를 여러 서브넷으로 구성할 수 있습니다. (불필요한 경로를 사용하지 않고도 데이터가 대상 주소에 도달 가능합니다.)

---

## 참고 자료

[CIDR 쉽게 계산하는 법](https://kim-dragon.tistory.com/154)<br/>
[CIDR의 개념과 이점](https://aws.amazon.com/ko/what-is/cidr/)<br/>
[IP 주소를 묶는 방법 - youtube](https://www.youtube.com/watch?v=kYiQGpPVnyI)
