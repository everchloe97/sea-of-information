---
title: Prototype

date: 2022-08-03
---

## 면접 질문

자바스크립트는 객체 지향 언어인가요?

## 답변

자바 스크립트는 객체 지향 언어는 아니지만, 객체 지향 방식으로 작성할 수 있는 언어입니다. 자바스크립트는 `프로토타입`을 기반으로 한 언어인데요, 모든 객체들이 메소드와 속성을 상속받기 위한 템플릿으로 프로토타입 객체를 가집니다.

프로토타입 객체도 상위 프로토타입 객체에게 메소드와 속성을 받을 수 있고, 상위 프로토타입도 마찬가지입니다. 이를 `프로토타입 체인`이라고 하며, 다른 객체에 정의된 메소드와 속성을 한 객체에 사용할 수 있습니다.

```js
class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sleep() {
        console.log(`${this.name}은 잠에 들었습니다`);
    }
}

let shiny = new Human("신영", 30);

Human.prototype.constructor === Human; // true
Human.prototype === shiny.__proto__; // true
Human.prototype.sleep === shiny.sleep; // true
```

![](https://cdn.discordapp.com/attachments/879215554379018243/1004316021777252402/unknown.png)

-   클래스를 만들면 클래스의 `prototype` 속성이 만들어집니다. 여기에 클래스의 `속성`과 `메소드`가 들어있습니다.
-   클래스를 통해 `인스턴스 객체`를 만들면, 인스턴스는 `prototype 객체`를 참조합니다.

---

[참고]

[Object prototypes](https://developer.mozilla.org/ko/docs/Learn/JavaScript/Objects/Object_prototypes) <br />
[[Javascript ] 프로토타입 이해하기](https://medium.com/@bluesh55/javascript-prototype-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-f8e67c286b67)
