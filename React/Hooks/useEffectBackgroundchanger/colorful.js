import React, {useState, useEffect} from "react";


function Colorful(){
    const [color, setColor] = useState("black")
    console.log("render first");

    //Manipulating DOM manually
    // document.body.style.backgroundColor = color;
    useEffect(()=>{
        console.log("use effect hook");
        document.body.style.backgroundColor = color
    }, [color])

    console.log("render second")

    return (
        <>
            <h1>Background Color Changer</h1>
            <div className="but">
                <button style = {{backgroundColor: "#FFFACD" }} onClick={()=>setColor("#FFFACD")}>Yellow</button>
                <button style = {{backgroundColor: "#B5EAD7" }} onClick={()=>setColor("#B5EAD7")}>Green</button>
                <button style = {{backgroundColor: "#FFD1DC"}} onClick={()=>setColor("#FFD1DC")}>Pink</button>
                <button style = {{backgroundColor: "#A7C7E7"}} onClick={()=>setColor("#A7C7E7")}>Blue</button>
                <button style = {{backgroundColor: "#E0B0FF"}} onClick={()=>setColor("#E0B0FF")}>Purple</button>
            </div>
        </>
    )
}

export default React.memo(Colorful)