const order = 29423

function solution(order) {

    const numbers = [...String(order)]
    return numbers.filter(e=> [3,6,9].includes(+e)).length
}
console.log(solution(order))

// 생각
// ... spread 연산자는 String에 사용 가능.
// +를 붙여서 숫자끼리 비교하게끔.

function reg_solution(order) {
    return (''+order).split(/[369]/).length-1;
}
console.log(reg_solution(order))