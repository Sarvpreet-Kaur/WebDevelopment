import { useState } from "react";
import {useDispatch } from "react-redux";
import { CustomIncrease } from "./slicer1";

export default function CustomCounter(){
    //because only this function needs this state not other components, so not created in global store
    const [num, setNum] = useState("");
    const dispatch = useDispatch();

    function handleClick(){
        dispatch(CustomIncrease(Number(num)))
        setNum("")
    }
    return (
        <>
        <input type="number" value={num} onChange={(e)=>setNum(e.target.value)}></input>
        <button onClick={()=>handleClick()}>Submit</button>
        </>
    )
}