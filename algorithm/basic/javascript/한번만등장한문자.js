const s = "abcabcadc"

const solution = (s)=>{

    const s_list = [...s] 
    let once_letter_list = []
    
    s_list.forEach((item) => {
        if(s.indexOf(item) === s.lastIndexOf(item)){
        once_letter_list.push(item);
        }   
    })
    return once_letter_list.sort().join("")
}
console.log(solution(s))


/** lastIndexOf 는 뒤에서부터 찾는다. */