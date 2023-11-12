const numbers = [34, 5, 71, 29, 100, 34]
const n=123

function solution(numbers, n) {
  
    let sum = 0
    for (const num of numbers){
      sum +=num
      if (sum >n) break
    }
    return sum
}

console.log(solution(numbers,n))

// 다른 풀이
function good_solution(numbers, n) {
    var answer = 0; // == sum
    let i = 0;
    while(answer <= n) { // 합이 n이하 이면
        answer += numbers[i++] // numbers[0], numbers[1], ... 계속 더한다.
    }
    return answer;
}
console.log(good_solution(numbers,n))

function clean_solution(numbers, n) {
    return numbers.reduce((a,c)=>(a<=n)?a+c:a)
}

console.log(clean_solution(numbers,n))