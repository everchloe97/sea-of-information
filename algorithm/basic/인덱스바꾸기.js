const my_string = "hello"
const num1 = 1
const num2 = 2
// "hlelo"

const solution = (my_string, num1, num2) =>{

    const list_str = [...my_string]
   
    const str_num1 = list_str[num1]
    const str_num2 = list_str[num2]

    list_str.splice(num1,1,str_num2)
    list_str.splice(num2,1,str_num1)
    
    return list_str.join("")
}

console.log(solution(my_string,num1,num2))

// 생각
// const str_num1,2 =>  원본에서 각 index에 해당하는 값을 고정해둔다.
// splice 함수는 원본을 바꾼다. 해당 index, 1개 자르고, 치환한다.


function ref_solution(my_string, num1, num2) {

    my_string = [...my_string];
    [my_string[num1], my_string[num2]] = [my_string[num2], my_string[num1]];
    return my_string.join('');
}

console.log(ref_solution(my_string,num1,num2))

// 구조분해 할당