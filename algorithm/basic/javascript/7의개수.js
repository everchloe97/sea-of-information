const array = [7,77,17]
// 4

function solution(array) {
   
    return [...String(array)].filter(v=> v === '7').length
}

console.log(solution(array))