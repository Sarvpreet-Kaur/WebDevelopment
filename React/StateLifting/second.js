import GlobalContext from "./Global"
import { useContext } from "react"

export default function Second(){
    const data = useContext(GlobalContext)
    return(
        <>
        <h2> Mamamito {data}</h2>
        </>
    )
}