const my_string = "cccCCC"



const solution = (my_string) => {
   
    const answer = [...my_string].map((e)=>{
        return e=== e.toUpperCase() ?
        e.toLowerCase() : e.toUpperCase()
    })
    return answer.join("")
}

console.log(solution(my_string))


function clean_solution(my_string){
    return [...my_string].map(e=> e === e.toUpperCase()? e.toLowerCase(): e.toUpperCase()).join("")
}

console.log(clean_solution(my_string))