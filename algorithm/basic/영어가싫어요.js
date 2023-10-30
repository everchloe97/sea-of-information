const numbers = "onefourzerosixseven"	

// "onefourzerosixseven"

const solution = (numbers)=>{

    const example = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" ]

    for (let idx = 0 ; idx<example.length+1 ; idx++){
        numbers = numbers.replaceAll(example[idx],idx)
    }
    return +numbers

}
console.log(solution(numbers))

function ref_solution(numbers) {
    const obj = {
        zero: 0, one: 1, two: 2, three: 3, four: 4,
        five: 5, six: 6, seven: 7, eight: 8, nine: 9
    };
    const regex = /zero|one|two|three|four|five|six|seven|eight|nine/g

    const num = numbers.replace(regex, (v) => {
        return obj[v];
    });

    return +num;
}

console.log(ref_solution(numbers))