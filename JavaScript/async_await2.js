function test1(){
    const p1 = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("First resolved");
        },5000);
    });
    return p1;
}

function test2(){
    const p2 = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Second resolved");
        },8000);
    });
    return p2;
}
// async function greet(){
//     console.log("hello greet");
//     const data1 = await test1();
//     console.log(data1);

//     const data2 = await test2();
//     console.log(data2);
// }
// greet();
// console.log("hello 1");
// console.log("hello 2");

// const p1 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("First out resolved");
//     },8000);
// });
// p1.then((response)=>console.log(response));


//if we want tasks to run in parallel - Promise.all returns an array and runs in parallel
async function greet(){
    console.log("hello greet");

    //All will come at the same time if the test2 is 8 sec and test1 is 5sec then both will be printed after 8 sec
    const [data1, data2] = await Promise.all([test1(), test2()]);
    console.log(data1);
    console.log(data2);
}
greet();
// console.log("hello 1");
// console.log("hello 2");