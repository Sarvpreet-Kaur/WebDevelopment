import React, {useState} from "react"
import ReactDOM from "react-dom/client"

function Counter(){
    let [count, setCount] = useState(0)

    function incrementnum(){
        // count=count+1
        setCount(count+1)
        // console.log(count)
        // document.querySelector('h1').innerText = `Count is: ${count}`
    }
    function decrementnum(){
        // count=count-1
        setCount(count-1)
        // console.log(count)
        // document.querySelector('h1').innerText = `Count is: ${count}`
    }
    return (
        <div className="first">
            <h1> Count is: {count}</h1>
            <button onClick={incrementnum}>Increment {count}</button>
            <button onClick={decrementnum}>Decrement {count}</button>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Counter/>)