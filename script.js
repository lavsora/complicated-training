const num = 266219;
const str = String(num);

let sum = 1;

for (const digit of str) {
    sum *= +digit;
}

console.log(sum);

sum = sum ** 3;

console.log(Number(String(sum).slice(0,2)));
