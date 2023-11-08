const numlist = [4, 5, 6, 7, 8, 9, 10, 11, 12]
const n = 3

const solution = (numlist,n) =>{

    return numlist.filter(v=> (v%n)===0)
}

console.log(solution(numlist,n))


// numlist의 원소 중 n으로 나눠서 나머지가 0이 되는 것만 필터링.