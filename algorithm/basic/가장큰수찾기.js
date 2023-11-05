const array = [1,8,3]


const solution = (array) =>{

    const max_num =  Math.max(...array)
    const idx = array.indexOf(max_num)
   
    return [max_num,idx]
}

console.log(solution(array))

// 시간복잡도 계산하면 최댓값찾고, 중복되는 거 없으니 indexOf 하는 게 더 빠를 듯
// idx 변수는 그냥 바로 return에 넣어줘도 간단해서 괜찮을 듯.