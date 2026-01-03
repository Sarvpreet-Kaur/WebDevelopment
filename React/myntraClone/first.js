import React from "react";
import ReactDOM from "react-dom/client";

const ele = <h1>Hello</h1>
const root = ReactDOM.createRoot(document.getElementById('root'));



function Greet(props){
    return <h2> Hii {props.name}, You are of age {props.age} </h2>
}

const ele2 = <Greet name="Reet" age="19"/>
root.render(ele2);
// To download as only devDependencies - npm install -D name
