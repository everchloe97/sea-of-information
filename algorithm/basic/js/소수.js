const number = 19

// 주어진 수가 소수인지 판단하라.
const isPrime = (number)=>{

        console.log(Math.sqrt(number)) // 그냥 이것만 하면 안됨.
        console.log(Math.floor(Math.sqrt(number))) // 소수 버림

    for (let i = 2 ; i < Math.floor(Math.sqrt(number))+1; i++){
        if (number % i === 0) return false
        else return true
    }
}

console.log(isPrime(number))

// 제곱근을 무조건 이용하는 게 핵심.
// py에서는 int(num**1/2) 로 표현한다는 것도 기억.
// Math.pow() <-> Math.sqrt()