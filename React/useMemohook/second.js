import React, {useRef, useState} from "react";
import ReactDOM from 'react-dom/client';

function App(){
    const [count, setCount] = useState(0)

    //value is not displayed - it will always be 0 as there is no dom manipulation
    //0 is displayed every time as on re rendering value resets to 0 and that is displayed on dom
    // also when function re renders because of setCount the value resets to 0 
    // let money = 0


    //it holds the value across re rendering
    //value of money changes when counter is clicked 
    //1. useRef do not re renders therefore no change
    //2. wen counter re renders then the currently stored value is displayed
    // useRef gives an object and the value is stored under current key
    const money = useRef(0);
    return(
        <>
        <h1>Counter is: {count}</h1>
        <button onClick={()=>{setCount(count+1)}}>Increment</button>

        <h1>Money is: {money.current}</h1>
        <button onClick={()=>{
            money.current = money.current+1
            console.log(money.current)
        }}>Increment</button>
        </>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>)