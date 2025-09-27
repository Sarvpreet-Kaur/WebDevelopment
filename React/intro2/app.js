import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

/**
 * React uses key like a name tag to tell list items apart.
Imagine you have two <h1>Hello</h1> — they look the same, but React needs a way to know which one is which when updating.
If there’s no key, React can get confused and might throw away and rebuild elements instead of reusing them.

👉 So key is just a unique identifier for each item in a list.
    It doesn’t show up on the screen.
    You don’t use it inside the component.
    It’s only for React to keep track of things.
 */

const element = React.createElement("h1", {key: "1"}, "Hello");
const element2 = React.createElement("h1", {key: "2"}, "Hello");

// const newelement = <h1>Hii</h1>;
const obj = {
    name : "reet",
    age: 19
};

const Style = {
    color:" #b8e1a9"
};
const name = "Reet";
// const newelement = (
//     <>
//         <h1 id = "first" className="h1first">Hello World {name}</h1>
//         <h2 id = "second" style={Style}>I am good {obj.age}</h2>
//     </>
// );

//double curly brackets as first one is required for jsx(because the components other than string should be written in {}) and another for the style object
const newelement = (
    <>
        <h1 id = "first" className="h1first">Hello World {name}</h1>
        <h2 id = "second" style={{color:" #fff5ba"}}>I am good {obj.age}</h2>
    </>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(element);

// const div1 = React.createElement('div', {}, [element, element2]);
// root.render(div1);



/**
 * REACT COMPONENTS:
 * Function Based Component
 */

function greet(){
    return <h1 id = "first" className="h1first">Hello World</h1>;
}

const meet = (name)=>{
    return <h2 id = "second" style={{color:" #fff5ba"}}>I am good {name}</h2>
}

root.render(<> {greet()} {meet(obj.name)}</>)
