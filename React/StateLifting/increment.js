export default function Increment({counts, setCounts}){

    return (
        <>
        <button onClick={()=>setCounts(counts+1)}>Increase</button>
        </>
    )
}