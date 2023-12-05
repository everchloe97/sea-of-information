L4 - IP, Port 기준으로 스케줄링 알고리즘을 통해 부하를 분산.

L7 - IP, Port + URI, Payload, Http Header, Cookie 등의 내용을 기준으로 부하를 분산.

- L7 로드밸런서는 L4보다 세부적인 요청을 처리할 수 있는 장점이 있다.
ex) ALB