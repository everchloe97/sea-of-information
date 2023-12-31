---
title: JS 자료형

date: 2022-08-03
---

## 면접 질문

자바스크립트의 자료형에 대해 설명해주세요

## 답변

### 원시 타입 데이터 (primitive type)

<br />

-   고정된 저장 공간을 차지하는 데이터 / 하나의 정보를 가진 데이터 (데이터는 **stack**에 저장되어 있다.)
-   객체가 아니면서 method를 가지지 않는 6가지 타입입니다.
-   값 자체에 대한 **변경이 불가능**하지만 (immutable), 다른 데이터를 **할당**해줄 수는 있습니다.

ex) String, Number, Boolean, undefined, bigint, symbol, (null)
<br />

### 참조 타입 데이터( reference type)

-   저장 공간의 크기가 계속 변할 수 있는 데이터, 데이터의 크기가 **동적**으로 변합니다.
    ex) 배열, 객체, 함수
-   변수에 값이 아닌, 데이터가 있는 `주소`를 저장합니다.
-   Object 자료형은 `데이터는 heap에 저장`되고, `변수에 할당을 할 경우 변수에는 주소가 저장`된다.

    1. [1, 2, 3]; // [1, 2, 3]이라는 데이터가 heap에 저장되지만 `변수 할당이 되지 않아 주소는 어디에도 저장되지 않는다.`

    2. const num1 = [1, 2, 3]; // // [1, 2, 3]이라는 데이터가 heap에 저장되고, 그 주소가 변수 num1에 저장된다.

    3. const num2 = [1, 2, 3]; // // [1, 2, 3]이라는 데이터가 heap에 저장되고, 그 주소가 변수 num2에 저장된다.
       1), 2), 3)에서 말하는 주소는 `전부 다른 주소`이다.

-   대량의 데이터를 쉽게 다루기 위해 사용된다.

```jsx
[] === [];  //false
[1. 2. 3] === [1, 2, 3];  //false
{yam: 10} === {yam: 10};  //false
```

참조 자료형에서 `===` 은 `주소값`이 같은지 확인한다. 내용이 같은 객체와 배열이라도, 주소는 각각 다르므로, js는 이 둘을 같지 않다고 본다.
<br />
**참조할당**

```jsx
let x = { yam: 10 };
let y = x;
y.yam = 20;

console.log(y); // { yam: 20 }
console.log(x); // { yam: 20 }
```

변수 x를 변수 y에 할당하는 경우, 변수 x값은 참조 자료형이므로 x 값의 주소를 할당한다. 그래서 `서로 다른 변수가 같은 객체를 바라보고 있는 것`이다. 따라서 `y 객체를 변경하면 x의 객체도 동일하게 바뀌게 된다`.
