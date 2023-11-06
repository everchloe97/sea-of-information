const n = 1234

const solution = (n) => {

    return [...String(n)].reduce((a,c)=> a+(+c), 0)
}

console.log(solution(n))