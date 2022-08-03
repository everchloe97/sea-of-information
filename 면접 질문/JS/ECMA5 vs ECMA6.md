---
title: ECMA5 vs ECMA6
author: 박신영
date: 2022-08-03
---

## 면접 질문

ES5와 ES6의 차이점에 대해 설명해주세요

## 답변

ES5와 ES6의 대표적인 차이점으로는 `변수 선언 방식`, `모듈`, `클래스`, `화살표 함수`, `this`, `템플릿 리터럴` 등이 있습니다.

**1. 변수 선언 방식**

-ES5에서는 `var` 밖에 존재하지 않았지만, ES6에서는 `let`과 `const`가 추가되었습니다.
`var`은 재할당과 재선언에 자유롭고 `let`은 재할당은 가능하지만 재선언을 할 수 없고, `const`는 재할당과 재선언 모두 불가능합니다. 그리고 `let`과 `const`는 함수 스코프, 블록 스코프 내부에서 선언되면 스코프 밖에서 변수를 참조할 수 없습니다. `var`은 블록 스코프만 따릅니다.

**2. 모듈**
ES5 이전에는 각 기능별로 JS 파일을 나누고 개발 및 관리하는 것이 불가능 했습니다. `require`을 통해 `파일 자체`를 사용할 수 있었습니다.

ES6는 `import`/`export`로 모듈을 관리할 수 있었습니다. 다른 파일의 변수, 함수를 참조할 수 있습니다.

**3. 클래스**
ES5에서는 `class`라는 키워드가 없었지만 프로토타입을 통해 실현이 가능했습니다.
ES6부터는 `class` 키워드를 사용해 선언할 수 있습니다. `super` 메소드를 통해 클래스의 상속과 오버라이딩이 가능합니다.

**4. 화살표 함수**
ES5에서는 함수 선언문을 사용하여 함수를 선언하였습니다.

```js
function str(a, b) {}
```

ES6 에서는 화살표 함수가 등장하여 좀 더 간단하게 함수를 선언할 수 있었습니다.

```js
const str = () => {};
```

**5. this의 다른 동작**
ES5 같은 경우 객체 내의 메소드를 실행 시 `this` 메소드가 선언된 해당 객체를 가리킵니다. 그러나 객체 안에서 선언된 함수의 `this`는 해당 객체가 아닌 window를 바라보고 있기 때문에 함수 안에서 `this.name`, `this.age` 등을 하여도 아무 값이 나오지 않습니다.

ES6에서는 자신을 둘러싸고 있는 `this`를 바라보기 때문에 따로 바인딩이나 변수에 담을 필요가 없습니다.

**6. 템플릿 리터럴**
템플릿 리터럴은 ES6부터 등장하여 문자열 표현이 훨씬 간단해졌습니다.
작은 따옴표나 큰 따옴표 대신 백틱(`)으로 문자열을 감싸 표현하는 기능입니다.

```js
let name = '신영';
let age = 24;
console.log(`저의 이름은 ${name}이고, 나이는 ${age}살 입니다.`);
```

---

[참고]
[[JS] Javascript ES5 vs ES6 비교 문법 정리](https://juniordev-team.tistory.com/6)<br />

[[JavaScript] ECMAScript란? ES5와 ES6의 차이](https://doozi0316.tistory.com/entry/JavaScript-ECMAScript%EB%9E%80-ES5%EC%99%80-ES6%EC%9D%98-%EC%B0%A8%EC%9D%B4var-const-let-%ED%99%94%EC%82%B4%ED%91%9C-%ED%95%A8%EC%88%98-class)<br />

[Difference between ES5 and ES6](https://www.geeksforgeeks.org/difference-between-es5-and-es6/)
