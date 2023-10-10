const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function solution(numbers) {
    const hap = numbers.reduce((acc, curr) => acc + curr, 0);
    return hap / numbers.length;
}

console.log(solution(numbers));
