const s = "10 Z 20 Z 1"

function solution(s) {

    const stack = []
    s.split(' ').forEach(el => {
        el === "Z"? stack.pop() : stack.push(+el)
    })

    return stack.length? stack.reduce((acc,cur)=> acc+cur): 0
}

console.log(solution(s))


// 생각
// loop 1 --- "10" > stack = [10]
// loop 2 --- "Z"  > stack = [10]--> 비운다. stack = []
// loop 3 --- "20" > stack = [20]
// ... stack 에 원소가 [1] 만 남는다. 그러면 총합 1 return, 없으면 0 return 
// +연산자를 통해 숫자로 바꾼다.
