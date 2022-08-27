const fs = require('fs');
const [n, ...a] = fs.readFileSync('/dev/stdin').toString().trim().split(/\s/).map(Number);

const stack = [];

for (let i = 0; i < n; i++) {
  const number = a[i];

  while (stack.length && a[stack[stack.length - 1]] < number) {
    a[stack.pop()] = number;
  }

  stack.push(i);
};

stack.forEach(i => a[i] = -1);

console.log(a.join(' '));