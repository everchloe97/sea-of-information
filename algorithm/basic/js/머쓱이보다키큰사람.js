const array = [149, 180, 192, 170]
height = 167
// 3

const solution = (array) => {

    return array.filter(v => v > height).length

}

console.log(solution(array,height))