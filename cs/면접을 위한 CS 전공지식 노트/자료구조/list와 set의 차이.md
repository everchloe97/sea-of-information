---
title: title
date: 2023/11/05
---

## 면접 질문
List와 Set의 차이는 무엇인가요?</br>
<br/>

## 답변
- list는 데이터의 중복을 허용하고 순서를 유지합니다.<br/>
- set은 데이터의 중복을 허용하지 않고
데이터는 랜덤으로 저장됩니다. 순서 보장 X
</br>

<br/>

## 꼬리 질문

set이 어떻게 구현되는지 아시나요? (**hash table**) <br/>
언제 set을 쓰면 좋나요? 왜 좋나요? (**검색 속도**)
<br/>

- set을 구현할 때는 hash table의 key에 데이터를 저장하는 형태로 구현을 합니다.

- hash table에서 key 검색 시 시간복잡도가 O(1) -> 빠릅니다. <br/>
-> list의 경우 O(n).
그래서 list가 아니라 hash table에서 검색하는 게 효율이 좋습니다.

<br/>

## 참고 자료

[ref](https://www.youtube.com/watch?v=CMgpTGs_N_w)<br/>
