const array = [3,10,28]
const n = 20


function solution(array, n){
    
    const abs_array = array.map(el => Math.abs(el-n))
    const filtered = array.filter(el => Math.abs(el-n)===Math.min(...abs_array)) // |array-n|이 가장 작은 array의 요소만 필터링.
    
    return  Math.min(...filtered) // 그 중에서도 가장 작은 수를 고름.
}

console.log(solution(array,n))

// 생각
// 각 원소 - n 을 한 array. 중에서 가장 작은 수를 찾고, 이를 index로 원 array에서 원소를 찾는다.
// 가장 가까운 수가 여러 개일 경우 더 작은 수를 return 합니다. > 이 조건에서 걸림. 
// 1) 절대값이 가장 작고, 그 값이 같은 수 중 2) 가장 작은 수만 return