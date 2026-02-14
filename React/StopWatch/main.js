import React, { useRef, useState } from "react";
import ReactDOM from 'react-dom/client';


/**
 * when there are many clicks on start, different setIntervals are called
 * it does not stop or reset - as the reference is stored only for the starting one
 * not the others, therefore multiple clicks on start does not get stopped
 * It needs check whether a setInterval is running - if yes then don't create another 
 * else a new setInterval will run
 * This way only 1 setInterval will work 
 * 
 * or it can be done by checking whether intervalref is null or not 
 * if null then new setInterval
 * else previous one only
 */
function App(){
    const[timer, setTimer] = useState(0)
    //so that it stores the reference of setInterval
    const intervalref = useRef(null)
    const [isRunning, setIsRunning] = useState(false)

    //when start clicked once only 1 is shown not 1 2 3..
    //this is because once the function renders setInterval works and take timer every time as 0 only
    // old function keeps executing setInterval and sets Timer with 1 as 0 is timer for that function
    function start(){
        // setInterval(()=>{
        //     setTimer(timer+1)
        // }, 1000)

        if(!isRunning){
            intervalref.current = setInterval(()=>{
                //it can fetch the latest value of timer using callback currtimer will fetch latest value 
                setTimer((currtimer)=>currtimer+1)
            }, 1000)
            setIsRunning(true)
        }
        
    }

    function stop(){
        //To stop the interval we call this function and stops the previous stored interval
        clearInterval(intervalref.current)
        //sets the reference to null
        intervalref.current = null
        setIsRunning(false)
    }

    function reset(){
        clearInterval(intervalref.current)
        intervalref.current = null
        setTimer(0)
        setIsRunning(false)
    }

    return (
        <div className="box">
            <h1 className="watch">StopWatch</h1>
            <h1 className="time">{timer}</h1>

            <button className="start" onClick={()=>start()}>Start</button>
            <button className="stop" onClick={()=>stop()}>Stop</button>
            <button className="reset" onClick={()=>reset()}>Reset</button>
        </div>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>)