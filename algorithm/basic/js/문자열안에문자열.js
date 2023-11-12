const str1 ="ab6CDE443fgh22iJKlmn1o"
const str2 = "6CD"
// 1

const solution = (str1,str2) => {

    return str1.includes(str2) ? 1:2
}

console.log(solution(str1,str2))