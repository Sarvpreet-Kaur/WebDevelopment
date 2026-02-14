import React, { useMemo, useState, useEffect} from 'react'
import ReactDOM from 'react-dom/client'

//Global - created once only , useCallback can also be used
function Fibonacci(n){
    if(n <=1 ) return n;
    return Fibonacci(n-1) + Fibonacci(n-2);
}

function App(){
    const [count, setCount] = useState(0);
    const [num, setNum] = useState("");
    const [result, setResult] = useState(null)

    //exponential time
    // function Fibonacci(n){
    //     if(n <=1 ) return n;
    //     return Fibonacci(n-1) + Fibonacci(n-2);
    // }

    //even when counter is changed page becomes slow as each time fibonacci function is also called
    //const result = Fibonacci(num)

    //it caches the result of fibonacci, hence it only works when there is change in dependency array 
    // const result = useMemo(()=>Fibonacci(num), [num])

    //Adv. of useMemo
    //it requires an extra state and 1 extra re-render as useEffect works at last
    useEffect(()=>{setResult(Fibonacci(num));
    }, [num])

    return (
        <>
            <h1>Counter is: {count}</h1>
            <button onClick={()=>setCount(count + 1)}>Increment</button>
            <button onClick={()=>setCount(count - 1)}>Decrement</button>

            <div>
                <h2>Fibonacci number is: {result}</h2>
                <input type="number" value={num} onChange={(e)=>setNum(e.target.value)}></input>
            </div>
        </>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
