// both " " ans ' ' or ``
let str1 = "Hello";
console.log(str1);

//Modern value ``
let price = 80;
console.log(`Price of fresh tomato ${price}`);

console.log(str1.length);

let str2 = new String("Reet");
console.log(str2);
console.log(`${typeof(str2)} - ${str2}`);

let num = 231;
let num1 = new Number(231); //Type of object memory location in heap
console.log(num1, typeof(num1));
let num2 = new Number(231);

console.log(num == num1);
console.log(num1 == num2);

num = 123.456;
console.log(num.toFixed(2));
console.log(num.toExponential(4));
console.log(num.toPrecision(4));
console.log(num.toPrecision(2));

//0<=val<1
console.log(Math.random());

console.log(Math.floor(Math.random()*10));
//20 to 30
let max = 30;
let min = 20;
console.log(Math.floor(Math.random()*(max-min+1)+min));