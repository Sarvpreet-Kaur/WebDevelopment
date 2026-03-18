import React, { useState }  from "react";
import ReactDOM from "react-dom/client";

function App(){
    const [count, setCount] = useState(0)
    const [toggle, setToggle] = useState(false)
    const [para, setPara] = useState("")
    const reverseStringUnicode = (str) => Array.from(str).reverse().join('');
    return(
        <>
        <h1> COUNTER : {count}</h1>
        <button onClick={()=> toggle==false?(setCount(count+1)): (setCount(count-1))}>Add: + </button>
        <button onClick={()=> toggle==false?(setCount(count-1)): (setCount(count+1))}>Sub: - </button>
        <button onClick={()=>setToggle(!toggle)}>Toggle</button>

        <input type="text" onChange={(e)=>setPara(e.target.value)}></input>
        <p>`toggle? ${para}: reverseStringUnicode(para)`</p>
        </>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);