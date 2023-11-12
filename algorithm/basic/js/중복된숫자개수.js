const array = [1, 1, 2, 3, 4, 5];
n = 1
// result = 2;

const solution = (array,n) => {

    return array.filter(v=> v===n).length
}

console.log(solution(array,n))