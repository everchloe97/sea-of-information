const n = 12;

function solution(n) {
    const prime_factors = [];
    for (let i = 2; i < n + 1; i++) {
        while (n % i === 0) {
            n = n / i;
            if (n % i != 0) prime_factors.push(i);
        }
    }
    return prime_factors;
}

console.log(solution(n));

// 소인수 : Prime Factor
