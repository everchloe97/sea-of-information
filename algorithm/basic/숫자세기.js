const num = 29183
const k = 1

const solution = (num,k) => {


    const first_idx = [...String(num)].indexOf(""+k)
    return first_idx<0 ? first_idx : first_idx+1
}

console.log(solution(num,k))

// data type에 집중할 것.