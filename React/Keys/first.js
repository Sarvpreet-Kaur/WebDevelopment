import React, {useState} from "react";
import ReactDOM from 'react-dom/client';
import Add from "./add";

function App(){
    const [language, setLanguage] = useState(["TS", "JS", "Java"])

    function handleClick(){
        setLanguage(["C++", ...language])
    }

    const vdom = <h1>Mamomito</h1>

    const rdom = document.createElement('h1')
    rdom.innerText = "Hii"

    console.log(vdom);
    console.log(rdom);

    return (
        <>
        <div style = {{display:"flex", justifyContent:"center", gap:"20px", marginTop:"50px"}}>
            {
                /*language.map((value, index)=> <Add key = {index} value = {value}></Add>)*/
                language.map((value)=> <Add key = {value} value = {value}></Add>)
            }
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <button onClick={handleClick}>Add Language</button>
        </>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App></App>)