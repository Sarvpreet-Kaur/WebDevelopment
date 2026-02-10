import React, {use, useState} from "react"
import ReactDOM from "react-dom/client"

function PasswordGenerator(){
    const [password, setPassword] = useState("ABCDEFG")
    const [length, setLength] = useState(7)
    const [numChange, setNumChange] = useState(false)
    const [charChange, setCharChange] = useState(false)

    return (
        <>
            <h1>{password}</h1>
            <div className="second">
                <input type = "range" min = {7} max = {50} value={length} onChange={(e)=>setLength(e.target.value)}></input>
                <label>Length: ({length}) </label>

                <input type = "checkbox" defaultChecked={numChange} onChange={()=>setNumChange(!numChange)}></input>
                <label>Number</label>

                <input type = "checkbox" defaultChecked={charChange} onChange={()=>setCharChange(!charChange)}></input>
                <label>Characters</label>
            </div>
        </>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<PasswordGenerator/>)