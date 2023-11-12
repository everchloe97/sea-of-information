/** review !!! */

const babbling = ["aya", "yee", "u", "maa", "wyeoo"]
// 1

const pronouns = ["aya", "ye", "woo", "ma"]
const solution = (babbling) => {

    var answer = 0;
    const regex = /^(aya|ye|woo|ma)+$/;

    babbling.forEach(v=> {
        if (regex.test(v)) answer++;
    });
    return answer;
}

console.log(solution(babbling))

// 풀이 참고
// 1. 정규식 사용

// 2. 순회 원리 이용

