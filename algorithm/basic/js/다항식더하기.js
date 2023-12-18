// polynomial = "x + x + x" // "3x"

const polynomial = "3x + 7 + x" // "4x + 7"

const solution = (polynomial) => {
// 양의 정수, 공백, 'x', '+'

    const answer = ''
    const poli = polynomial.split(' ')
    console.log('list', poli)
    const calculation = poli.map(e=>{
     
        const regex = /[0-9]x|[x]/;  // Nx 꼴이거나 x인것들만 모음.
        const nx = regex.test(e)
        let n_sum = 0;
  
        if (nx) // true
            {
                if (e === 'x') e = e.replace('x','1x');
                e = e.split('') // 항상 ['숫자','x'] 꼴로 나오게 됨.
                e[0]
            }
    
        if (e === '+') {}  
    })
    return calculation
}

console.log(solution(polynomial))