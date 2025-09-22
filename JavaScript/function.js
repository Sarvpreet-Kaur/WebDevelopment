function greet(){
    console.log("Sat Shri Akal")
}
greet();

function mul(num1, num2){
    let num3 = num1*num2;
    return num3;
}

console.log(mul(3,4));


const fun1 = function(){
    console.log("hii");
};

console.log(fun1);
// fun1();

const fun2 = function(){
    console.log("hii");
    return "hehe";
};

console.log(fun2());
fun2();

//Arrow Function 
const fun3 = ()=>{
    console.log('hehe');
}
fun3();
const fun = (num1, num2)=> num1+num2;
console.log(fun(5,5));

const cube = num=> num*num*num;
console.log(cube(5));

//Rest operator
const sum = function(...num){
    console.log(num);
}
sum(1, 2, 30);
sum(3, 4, 6, 99, 10);


//Pass by value or pass by reference
const obj = {
    a: 1,
    b: 2,
    c: 3
};

function objFun(obj){
    obj.name = "me";
    //console.log(obj);
}

console.log(obj);
objFun(obj);
console.log(obj);

let a = 5;
function print(a){
    a = 6;
}
console.log(a);
print(a);
console.log(a);