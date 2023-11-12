const quiz = ["3 - 4 = -3", "5 + 6 = 11"]
// 	["X", "O"]

const solution = (quiz) => {

    const result = quiz.map(el => {
   
        const each = el.split(" ")
        const ans = each[1] === "+" ? (+each[0]) + (+each[2]) : (+each[0]) - (+each[2])
        return ans === +each[4] ? "O":"X"
    });
    return result
}

console.log(solution(quiz))

// 좀 깔끔하진 않은 것 같긴 한데..
// 일단 quiz가 list type이고 각 원소를 판단해서 결과만 return 하면 되니까 map 사용.
// + 혹은 - , 그리고 고정된 형식이므로 index로 접근.


// const [x, operator, y, , z] = el.split(" "); 이렇게 구조 분해 할당을 쓰는 것도 좋은 것 같다.
// 배수는 multiples
const good_solution = (quiz) => {

    const multiples = quiz.map(el => {
   
        const [x, operator, y, , z] = el.split(" ");
        let sum = operator === "+" ? (+x) + (+y) : (+x) - (+y);
        return sum === +z ? "O":"X"

    });
    return multiples
}

console.log(good_solution(quiz))