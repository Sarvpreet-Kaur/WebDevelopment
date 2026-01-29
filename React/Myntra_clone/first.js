import React from "react"
import ReactDOM from "react-dom/client"

const ele1 = "Hello";
const name = "Reet"
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(ele1);

let obj = {
    name : "Reet Kaur",
    age: 19
}
let arr = [10, 20]
//each element of arr is extracted one by one and then produced
//this cannot happen in objects 

// function greet(name){
//     return <h2> Hii {name} </h2>
// }

function Greet(props){
    console.log(typeof(props));
    console.log(props);
    return <h2> Hii {props.name} </h2>
}
const user_defined_tag = <Greet name = "Reet" age = "19"/>
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(user_defined_tag);