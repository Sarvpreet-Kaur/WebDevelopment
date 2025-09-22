const obj = document.getElementById("first");
console.log(obj);
//obj.innerHTML = "I am changed";

const obj1 = document.getElementsByClassName("head2");
console.log(obj1);
console.log(obj1[0]);
console.log(typeof(obj1));

obj1[0].style.backgroundColor = "pink"
console.log(obj.tagName);

const id = document.querySelector('#second');
id.innerHTML = "This is changed using query selector";

const id2 = document.querySelector('.head1');
id2.style.backgroundColor = "lightGreen"

//Returns a node List
const id3 = document.querySelectorAll('.head2');
console.log(id3);

//Iterating over node list 
//1. forEach loop
id3.forEach((val)=>{console.log(val)});

//2.for of loop
for(let val of id3) console.log(val);

//3.Basic for loop 
for(let i=0; i<id3.length; i++)console.log(id3[i]);

//Convert node list to arr
Array.from(id3);

let obj2 = document.querySelectorAll('li');
console.log(obj2);

let obj3 = document.getElementsByTagName('h1');
console.log(obj3);

let obj4 = document.getElementsByTagName('li');
console.log(obj4);

//HTML Collection can be accessed using -
//Normal for loop using length 
//It is iterable therefor for of loop also 

for(let i=0; i<obj4.length; i++){
    console.log(obj4[i]);
}

for(let val of obj4){
    console.log(val);
}

// Array.from(obj4);
// obj4.forEach((val)=>{console.log(val)});

const list = document.querySelector('li');
console.log(list.parentNode);
console.log(list.parentElement);

const unList = document.querySelector('ul');
console.log(unList.childNodes); 
console.log(unList.firstChild); 
console.log(unList.lastChild); 
//Only html  element
console.log(unList.firstElementChild); 
console.log(unList.lastElementChild); 


console.log(list.nextSibling)
console.log(list.nextElementSibling)

console.log(list.previousSibling)
console.log(list.previousElementSibling)


//Difference between innerHTML, innerText and textContent
console.log(document.getElementById('first').innerHTML);
console.log(document.getElementById('first').textContent);
console.log(document.getElementById('first').innerText);