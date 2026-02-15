import GlobalContext from "./Global";
import { useContext } from "react";

export default function Third(){

    const {count, setCount} = useContext(GlobalContext)
    return (
        <>
        <h2>Printing {count}</h2>
        <button onClick={()=>setCount(count*2)}>Magic3</button>
        </>
    )
}