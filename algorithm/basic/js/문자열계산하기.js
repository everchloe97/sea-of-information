const my_string = "3 + 4 - 10"
// 7

const solution = (my_string) => {

    const str_list = my_string.split(" ")
    const arr = str_list.map(e=> !["+","-"].includes(e)? +e:e)

    let sum = arr[0]
    for (let i=1; i< arr.length; i+=2){
        arr[i] === '+' ? sum +=arr[i+1] : sum -=arr[i+1]
    }
    return sum
}

console.log(solution(my_string))

// operator는 하나 건너 하나 있다는 것 기억하기.