const my_string = "Bcad"

const solution = (my_string) => {

    return ([...my_string.toLowerCase()].sort()).join("")
}

console.log(solution(my_string))


// js : 낮추고 > 정렬하고 > 조인