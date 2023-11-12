const my_string = "people";

function solution(my_string) {
    const arr_my_string = [...my_string];
    const filtered = arr_my_string.filter((v, i) => arr_my_string.indexOf(v) === i);

    return filtered.join(",").replaceAll(",", "");
}

console.log(solution(my_string));

// 참고할만한 풀이
function solution(my_string) {
    return [...new Set(my_string)].join("");
}
