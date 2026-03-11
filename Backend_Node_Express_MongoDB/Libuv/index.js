
// let a = 10;
// let b = "Hello ji"

// console.log(b);

// function sum(a,b){
//     return a+b;
// }

// setTimeout(()=>{
//     console.log("Hello Time Out");
// },3000)

// console.log(a);
// console.log(sum(3,8));

// -------------------------------------------------------------------------------
/*console.log("Start");

setTimeout(() => {
    console.log("Timer finished");
}, 2000);

setTimeout(() => {
    console.log("Timer second finished");
}, 1000);

for (let i = 0; i < 1e9; i++) {} // long synchronous task

console.log("End");*/

//----------------------------------------------------------------------------------

const fs = require('fs')


//Blocking operation 
/*
fs.readFile() starts reading the file asynchronously.
Node sends the task to libuv thread pool.
When reading finishes → the callback function runs.*/

//Synchronous operation - no callback - blocking - stop program until finished - not good for heavy tasks
// const data = fs.readFileSync("./data.json", "utf-8");
// console.log(data);

//Asynchronous - callback - runs in background - non-blocking - better for servers
fs.readFile("./data.json", "utf-8", (err, res)=>{
    console.log(res)
})
console.log("Reet");
