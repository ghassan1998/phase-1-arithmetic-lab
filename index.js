let num1 = 31;
let num2 = 2;
let multiply = num1 * num2;


function generateRandomInteger() {
  return Math.floor(Math.random() * Number.MAX_SAFE_INTEGER) + 1;
}

let random = generateRandomInteger();


let num3 = 19;
let num4 = 5;
let mod = num3 % num4;


let numbers = [10, 20, 15, 5];
let max = Math.max(...numbers);

console.log("multiply:", multiply); 
console.log("random:", random);     
console.log("mod:", mod);           
console.log("max:", max);           