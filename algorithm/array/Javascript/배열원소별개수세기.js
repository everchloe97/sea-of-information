const arr  = ['a','a','b','c']
// result = {'a':2, 'b':1,'c':1}


// 각 원소의 개수?

// 1. for
const pair = {}
for (const v of arr){
    pair[v] = pair[v] ? pair[v]+1:1;
}

console.log(pair)

// 2. reduce
const nums = arr.reduce((v, i) => {
    return v[i]=(v[i]||0)+1, v}
,{})
console.log(nums); 




