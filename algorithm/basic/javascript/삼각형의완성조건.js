const sides=[3, 6, 2]

// 생각
// sides array의 size는 3. sort 해서 index 0+1 > 2 ? 삼항 연산 활용

function solution(sides) {

    const comparison = sides.sort((a,b)=> a-b)
    return comparison[0]+comparison[1]>comparison[2] ? 1 : 2
}

console.log(solution(sides));

// develop
// sort는 원본을 바꾸니까 굳이 comparison 변수를 선언하지 않고 sides를 그대로 써도 좋다.