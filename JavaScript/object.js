//creation of object
//1.
const obj = {
    name : "Reet",
    acc_bal : 4498938409823498,
    gender : "Female",
    age: 19,
    11 : 11
};

console.log(obj);
console.log(obj.name);
console.log(obj.age);

console.log(obj["acc_bal"]); // If accessing through brackets give string format
console.log(obj[11]);
console.log(obj['11']);

//2.
const Person = new Object();
Person.name = "Reet";
Person.age = 100;
console.log(Person);

delete Person.age;
console.log(Person);

Person.name = "Reeeeet";
console.log(Person);

//3. using class

class People{
    constructor(name, age, gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

let per1 = new People("Reet", 19, "Female");
console.log(per1);

//Methods
const obj1 = {
    name : "Reet",
    acc_bal : 4498938409823498,
    gender : "Female",
    age: 19
};

const arr = Object.keys(obj1);
console.log(arr);

console.log(Object.values(obj1));

//Returns a 2D array of key value pair
console.log(Object.entries(obj1));


const obj0 = {a:1, b:2};
const obj2 = {c:3, d:4};

//We give empty because the first parameter stores the answer and the next the elements to be combined
//Therefore if we do not give empty it will also change in obj0
//Hence empty is given 

//It gives a copy
const obj3 = Object.assign({}, obj0, obj2);
console.log(obj3);

//Other way to combine 2 or more objects - spread operator 
const obj4 = {...obj0, ...obj2};
console.log(obj4);

//Nested Object
const user = {
    name : "Reet", 
    age: 20, 
    address : {
        pincode : 208006,
        city : "Kanpur"
    }
}

console.log(user);
console.log(user.address.city);

const usercopy = Object.assign({}, user);
console.log(usercopy);

usercopy.name = "Rihu";
usercopy.address.pincode = 208090;

console.log(user);
console.log(usercopy);

//FREEZE
const obj5 = {
    a:1, b:2, c:3, d:4
};
Object.freeze(obj5);
console.log(obj5);

//Do not changes anything
obj5.a = 3;
console.log(obj5);

obj5["e"] = 8;
console.log(obj5);

delete obj5["d"];
console.log(obj5);
console.log(obj5["d"]);

//SEAL
const obj6 = {
    a:1, b:2, c:3, d:4
};
Object.seal(obj6);
console.log(obj6);

//Do not changes anything
obj6.a = 3;
console.log(obj6);

obj6["e"] = 8;
console.log(obj6);

delete obj6["d"];
console.log(obj6);
console.log(obj6["d"]);

//Destructuring of Object
console.log(obj1);
const {name: full_name, acc_bal : bal} = obj1;
console.log(full_name, bal);

const{name, age, ...obj7} = obj1;
console.log(obj7);

const{address:add} = user;
console.log(add);

const{address:{pincode:pin}} = user;
console.log(pin);

//user.__proto__

let user1 = {
    name: "Reet",
    age: 19
}

let user2 = {
    bal : 80804804,
    money: 50
}

user2.__proto__ = user1;
console.log(user2.name);

let arr1 = [1, 2];
console.log(arr.__proto__ == Array.prototype);
console.log(Array.prototype.__proto__ == Object.prototype);
console.log(arr.__proto__.__proto__ == Object.prototype);
console.log(arr.__proto__.__proto__.__proto__ == null);
