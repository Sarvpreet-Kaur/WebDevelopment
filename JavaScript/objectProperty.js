let obj = {};
console.log(obj);

obj.name = "Reet";
obj.age = 19;
//Every obj has - writable, enumerable, configurable

console.log(Object.getOwnPropertyDescriptor(obj, 'name'));
//writable - value can be changed

obj.name = "reeeeeet";

//configurable - whether we can change writable and enumerable

Object.defineProperty(obj, 'name',{
    value: 'Reet',
    writable: false,
    enumerable: true,
    configurable: true
});
//name of object does not change
console.log(obj);

Object.defineProperty(obj, 'age', {
    writable: false,
    configurable: false
});


// Object.defineProperty(obj, 'age', {
//     writable: true
// });
console.log(Object.getOwnPropertyDescriptor(obj, 'age'));

obj.age = 10;
console.log(obj);

let obj1 = {
    name : "Reet",
    age: 19,
    branch: "CS-AI ML"
};

console.log(obj1);
for(let key in obj1){
    console.log(key);
}

//Branch will not be visible in iteration
Object.defineProperty(obj1, 'branch',{
    enumerable: false
});

console.log(obj1);
for(let key in obj1){
    console.log(key);
}

let arr = Object.keys(obj1);
console.log(arr);

let obj2 = Object.create(obj1);
obj2.year = 3;

console.log(obj2);
for(let key in obj2  ){
    console.log(key);
}

let arr2 = Object.keys(obj2);
console.log(arr2);

let array = [1, 2, 4];
//For in loop will also include this name key as array is also an object
//but array can have only integer as index (conceptual) and not string therefore we not use for in loop
array.name = "Reet";
for(let key in array){
    console.log(key);
}

for(let i=0; i<array.length; i++){
    console.log(array[i]);
}

Object.defineProperty(Object.prototype, 'toString', {
    enumerable: true
});
let obj3 = {
    name : "Reet"
};
for(let key in obj3){
    console.log(key);
}

//Object.hasOwnProperty return true for those properties of that particular object for those properties which are of their own and not inherited
const parent = { inheritedProp: 'I am inherited' };
const child = Object.create(parent);
child.ownProp = 'I am my own';

for (const key in child) {
    if (child.hasOwnProperty(key)) {
        console.log(`Own property: ${key}`); // Output: Own property: ownProp
    } else {
        console.log(`Inherited property: ${key}`); // Output: Inherited property: inheritedProp, Inherited property: toString(as it is also inherited from Object and visible due to enumeration:true)
    }
}

//Object.defineProperties to define more than 1 property at a time
const temp = {};

Object.defineProperty(temp, 
    "name", { value: 'Alice', writable: true, enumerable: true, configurable:true}
);

//All three should be mentioned necessarily
Object.defineProperties(temp,
    {"age": { value: 19,  writable: true, enumerable: true, configurable: true},
    "year": {value: 2006, writable: false, enumerable: true, configurable: true}}
);

console.log(temp);

