import { useState } from "react";
import {addItems, removeItems} from "./slicer2"
import { useDispatch } from "react-redux";

export default function FoodCart({value}){
    const [inCart, setInCart] = useState(false)
    const dispatch = useDispatch()

    function handleClick(){
        if(inCart){
            //we have to remove that particular item
            dispatch(removeItems())
            setInCart(false)
        }
        else{
            dispatch(addItems())
            setInCart(true)
        }
    }

    return (
        <>
            <h1>{value.food}</h1>
            <h2>{value.Price}</h2>
            <button onClick={handleClick}>{inCart?"Remove":"Add"}</button>
        </>
    )
}