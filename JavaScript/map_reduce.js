// const arr = [1,2,3,4,5,6,6];

// const res = arr.map((num)=> {return num*2});
// console.log(res);

// const res1 = arr.filter((num)=>num%2==0).map((num)=>num*num);
// console.log(res1);

// //Reduce
// const ans = arr.reduce((acc, curr)=>{
//     acc = acc + curr;
//     return acc;
// }, 0);
// console.log(ans);

// const ans2 = arr.reduce((acc, curr)=> {acc+curr}, 0);

let fruits = ["orange","kiwi","mango","orange","kiwi","banana","kiwi"];

const result = fruits.reduce((acc, curr) => {
    if(acc.hasOwnProperty(curr)) acc[curr]++;
    else acc[curr] = 1;
    return acc;
}, {});

console.log(result);