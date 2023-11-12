const n = 144
// 1

const is_square = (n) =>{

    const answer = Math.sqrt(n)
    return  answer % 1 === 0 ? 1:2
}
// 1st trial
/*
범위가 약간 고민되긴 함. > 전체로 하면 시간 초과 뜸.

   let num = 1
    let square_num = 0
    while (num) {
        if( n % num === 0 & num * num === n) {
            square_num +=num
            console.log(square_num)
            return square_num === 0 ? 2:1
        } 
        num ++;
    }

*/

// Math.sqrt()를 사용하자.

console.log(is_square(n))