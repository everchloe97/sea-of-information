// arr = [기준]
// pick_num = 뽑는 수

// permutations > 순열. 순서 상관 O
const getPermutations = (arr, pick_num) => {

    const result = [];
    if (pick_num === 1) return arr.map(v=> [v])

    arr.forEach((fixed, index, origin) => {
        const rest = [...origin.slice(0, index), ...origin.slice(index + 1)]; // 해당하는 fixed를 제외한 나머지 배열
        const permutations = getPermutations(rest, pick_num-1) // 나머지 요소. 이미 하나 고정시켰으니 전체 수 -1
        const attached = permutations.map((permutation)=>[fixed, ...permutation])

        result.push(...attached)
    });

    return result
}

const arr = [1,2,3,4]
const pick_num = 2

console.log(getPermutations(arr,pick_num))

// 참고 https://pul8219.github.io/algorithm/algorithm-permutation-and-combination/