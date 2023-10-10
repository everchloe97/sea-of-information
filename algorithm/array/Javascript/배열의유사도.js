const s1 = ["a", "b", "c"];
const s2 = ["com", "b", "d", "p", "c"];

function solution(s1, s2) {
    const s = [...s1, ...s2];
    // const duplicated_s = s.filter((v, i) => s.indexOf(v) != i);
    return s.filter((v, i) => s.indexOf(v) != i).length;
}

console.log(solution(s1, s2));

// arr의 element를 순회. 해당 element가 첫번째로 나온 arr.indexOf(element) 값과
// 다른 경우 => 중복된 element이다.
