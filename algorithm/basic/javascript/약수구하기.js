const n = 24
// result = [1,2,3,4,6,8,12,24]

const solution = (n) => {

    const divide_list = []
    for (let i = 1 ; i< n+1 ; i++){
        if (n%i === 0 )
        divide_list.push(i)
    }
    return divide_list
}

console.log(solution(n))