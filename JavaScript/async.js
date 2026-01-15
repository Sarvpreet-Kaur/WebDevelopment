console.log("GEC");


/*
Takes overall 12 sec not 12 + 5 + 1 to execute as they run parallel - tasks are transferred to call stack as they are completed not order wise
 */
// setTimeout(()=>{
//     console.log("CallBack Queue 12s");
// }, 0.0000001);

setTimeout(()=>{
    console.log("CallBack Queue 12s");
}, 12000);

setTimeout(()=>{
    console.log("CallBack Queue 5s");
}, 5000);

setTimeout(()=>{
    console.log("CallBack Queue 1s");
}, 1000);

for(let i=0; i<100; i++){
    console.log("GEC");
}