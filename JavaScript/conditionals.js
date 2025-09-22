//if-else

let age = 25;
if(age>=18){
    console.log("Eligible for voting");
}
else{
    console.log("Not eligible");
}

//Same as c++

//SCOPES
let a = 10;
var b = 20;
const c = 30;

function greet(){
    console.log(a);
    console.log(b);
    console.log(c);
}

greet();

function inside(){
    e = "Only inside";
    console.log(e);
}

inside();

if(1){
    let d = 10;
    var e = 20;
    const f = 40;
}
//Var can be accessed outside block 
// console.log(d);
console.log(e);
// console.log(f);


var can = "hehe I can be accessed first let and const can't";
console.log(can);

greet1();
function greet1(){
    console.log("Accessing first");
}
//meet(); // gives error
const meet = ()=>{console.log("hey only after, before gives error");};
meet();

let obj = {
    name : "Reet",
    age : 19,
    gender: "female",
    city: `Kanpur`
};

for(let key in obj){
    console.log(key, obj[key]);
}

let obj2 = Object.create(obj);
//inherit ones are not printed
obj2.money = 323;
console.log(obj2);
console.log(Object.keys(obj2));


//Inherit keys are printed
for(let key in obj2){
    console.log(key);
}

//For of
let arr3 = [1,2,3,4,5,6,7];
for(let val of arr3){
    console.log(val);
}

//For each
let arr4 = [1,2,3,4,5,6];
arr4.forEach(function(num){
    console.log(num);
});

arr4.forEach((num, index, a)=>{
    console.log(num, index);
    a[index] = num+1;
});

arr4.forEach((num, index)=>{
    console.log(num, index);

});

//filter
const result = arr4.filter((num)=>{
    return num%2==0;
})
console.log(result);

const students = [
    {name: "Reet", age: 19, marks:90},
    {name: "Deet", age: 19, marks:50},
    {name: "Preet", age: 19, marks:90},
    {name: "Geet", age: 19, marks:70},
    {name: "Meet", age: 19, marks:30}
]

const ans = students.filter( obj=> obj.marks>50);
console.log(ans);