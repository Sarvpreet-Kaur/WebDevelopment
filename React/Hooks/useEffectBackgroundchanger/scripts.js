import React, {useState, useEffect} from "react";
import ReactDOM from 'react-dom/client';
import Colorful from "./colorful";



function Main(){
    const [count, setCount] = useState(0);
    return( 
    <>
        <div className="counter">
            <h1 style = {{marginRight: "10px"}}>Counter is: {count} </h1>
            <button onClick={()=>(setCount(count+1))} style = {{width: "200px"}}>Increment  </button>
        </div>
        <Colorful></Colorful>
    </>)
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Main/>)