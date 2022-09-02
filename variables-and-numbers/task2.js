//задание №2

let a = 13.123456789;
let b = 2.123;
let n = 5;

let fractionA = Math.floor((a - Math.floor(a)) * Math.pow(10, n));
let fractionB = Math.floor((b - Math.floor(b)) * Math.pow(10, n));

console.log('Первое дробное число', fractionA);
console.log('Второе дробное число', fractionB);

console.log('Первое число больше, чем второе', fractionA > fractionB);
console.log('Второе число больше, чем второе', fractionA < fractionB);
console.log('Первое число больше или равно, чем второе', fractionA >= fractionB);
console.log('Второе число больше или равно, чем первое', fractionA <= fractionB);
console.log('Первое и второе число равны', fractionA === fractionB);
console.log('Первое число не равно второму числу', fractionA !== fractionB);
