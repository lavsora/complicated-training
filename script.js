let num = 266219;
let str = String(num);

let sum = 1;

for (let digit of str) {
    sum *= +digit;
}

console.log(sum);

sum = sum ** 3;

console.log(Number(String(sum).slice(0,2)));
