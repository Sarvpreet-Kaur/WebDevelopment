// console.log(x);
// var x = 10; - undefined

// console.log(x);
// let x = 10; - can not be accessed before initialization

// console.log(b);
// var x = 10; - b is not defined

var x = 10;
let y = 20;
const z = 30;
console.log(x);
console.log(y);
console.log(z);


//The above code is executed as :- declarations are sone at the top
// var x = undefined;
// let y;
// const z;
// print x
// print y
// print z
// x = 10
// y = 20
// z = 30

greet();
//This is executed as while allocating memory as function: function code
function greet(){
    console.log("Hello greet");
}

// meet(); let can  not be accessed and therefore gives error
//if var meet then gives error that meet is not a function as after declaration meet has stored indefinite
let meet = ()=>{console.log("hii")};