const n = 2 // Germ 수
const t = 10

const cnt_germ = (n,t) => {

    // 1
    return n*(2**t)

}   

console.log(cnt_germ(n,t))

// Math.pow 사용 시 > return n*Math.pow(2,t);

// shift 연산자 사용 시 > return n << t;