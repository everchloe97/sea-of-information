const cipher = "dfjardstddetckdaccccdegk"
code = 4

function solution(cipher, code){
    const answer = [];
    const range = [...cipher].length/code
    for (let i=1; i<range+1; i++){
        answer.push(cipher[i*code-1])
    }
    return answer.join("")
}

console.log(solution(cipher, code))

// 생각
// cipher의 길이 / code = 배수의 개수
// cipher의 Index를 array에 Push하고 공백없이 붙여서 return

// 참고 ) 문자 붙이는 부분
function ref_solution(cipher, code) {
  var answer = "";
  const range = [...cipher].length/code
    for (let i=1; i<range+1; i++){
        answer += (cipher[i*code-1])
    }
  return answer;
}
console.log(solution(cipher, code))