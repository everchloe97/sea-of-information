// arr = [기준]
// pick_num = 뽑는 수

// combinations > 조합. 순서 상관 X
const getCombinations = (arr, pick_num) => {

    const result = [];
    if (pick_num === 1) return arr.map(v=> [v])

    arr.forEach((fixed, index, origin) => {
        const rest = origin.slice(index+1);// 고정시킨 값 제외
        const combinations = getCombinations(rest, pick_num-1) // 나머지 요소. 이미 하나 고정시켰으니 전체 수 -1
        const attached = combinations.map((combination)=>[fixed, ...combination])

        console.log('fixed ---> ', fixed)
        console.log('rest ---> ', rest)
        console.log('attached ---> ', attached)
        result.push(...attached)
    });

    return result
}

const arr = [1,2,3,4]
const pick_num = 2

console.log(getCombinations(arr,pick_num))
// [ [ 1, 2 ], [ 1, 3 ], [ 1, 4 ], [ 2, 3 ], [ 2, 4 ], [ 3, 4 ] ]

// 참고 https://pul8219.github.io/algorithm/algorithm-permutation-and-combination/