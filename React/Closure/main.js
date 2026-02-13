import React, {useEffect, useState, useCallback} from "react"
import ReactDOM from "react-dom/client"

function PasswordGenerator(){
    const [password, setPassword] = useState("ABCDEFG")
    const [length, setLength] = useState(7)
    const [numChange, setNumChange] = useState(false)
    const [charChange, setCharChange] = useState(false)

    //Optimization
    //Memory will be allocated again and again whenever we re-render after setPassword is called,
    //when setPassword is called there is no need to allocate for this function generatePassword
    // it will only be called when length, numChange, charChange are changed 

    //It is a closure as its previous referenced memory is used, it is re render only when its dependencies changes
    const generatePassword = useCallback(()=>{
        let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
        if(numChange){
            str += "1234567890"
        }
        if(charChange){
            str += "!@#$%^&*(){}+_-"
        }

        let pass = "";
        for(let i=0; i<length; i++){
            pass += str[Math.floor(Math.random()*str.length)]
        }

        setPassword(pass);
        
    }, [length, numChange, charChange])
    // function generatePassword(){
    //     let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    //     if(numChange){
    //         str += "1234567890"
    //     }
    //     if(charChange){
    //         str += "!@#$%^&*(){}+_-"
    //     }

    //     let pass = "";
    //     for(let i=0; i<length; i++){
    //         pass += str[Math.floor(Math.random()*str.length)]
    //     }

    //     setPassword(pass);
    // }
    // goes to infinite loop - when setPassword is called it will re render again therefore generatePassword will be called again and again 
    // therefore sets to infinite loop 
    // generatePassword();

    //only changes when there is any change in dependency array
    
    
    // useEffect(()=>{
    //     generatePassword()
    // }, [length, numChange, charChange])

    useEffect(()=>{ generatePassword()}, [generatePassword])

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