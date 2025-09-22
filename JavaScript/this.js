//Global object
//console.log(global);
//WRT to browser: window
console.log(this);

//console.log(window == this); //True

// "use strict"
function greet(){
    console.log(this)
}
// greet()

const obj = {
    name: "Reet",
    age: 10,
    greet: function(){
        console.log(this); // Points to that object
        console.log(this.name);
    }
}
greet(); //Points to global object
obj.greet(); //Points to object as the context is given

//Arrow function
let obj1 = {
    name: " Reet",
    age: 10,
    greet: ()=>{console.log(this);}// it will show window as it takes from global scope
};

obj1.greet();

let obj2 = {
    name: " Reet",
    age: 10,
    greet: function(){
        let ab = ()=>{
            // it will show object as it takes from object (corresponding) scope
            console.log(this);
        }
        ab();
    }// it will show window as it takes from global scope
};

obj2.greet();

let obj3 = {
    name: " Reet",
    age: 10,
    greet: ()=>{
        let ab = ()=>{
            // it will show window as it takes from global (as object's greet is also a arrow function ) scope
            console.log(this);
        }
        ab();
    }// it will show window as it takes from global scope
};

obj3.greet();

//CLASS
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

let reet = new Person("Reet", 20);
console.log(reet);