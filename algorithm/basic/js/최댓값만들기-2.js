const numbers = [1,2,-3,4,-5] // 15

const solution = (numbers) => {

    var answer = []
    for (let i = 0; i < numbers.length -1; i++){
        for (let j = i+1; j< numbers.length; j++){
        answer.push(numbers[i]*numbers[j])
        }
    }
    console.log('answer ====> ', answer)
    return Math.max(...answer)
}

console.log(solution(numbers))


const good_solution = (numbers) => {
    numbers.sort((a,b) => a-b)
    return Math.max(numbers[0]*numbers[1], numbers[numbers.length-1]*numbers[numbers.length-2]);
}

console.log(good_solution(numbers))