// require("./node1_sec"); // CJS




//sum(1, 1) - directly can not call this function
//internally require wraps up as iife function
// (function (){

//     console.log("IIFE function")
//     function sum(a,b){
//         return a+b;
//     }
// })();


const {sum, sub}  = require("./node1_sec"); 

console.log(sum(1, 1)); //as it is exported from imported file
console.log(sub(1, 1));
console.log("I am first");