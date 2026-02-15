import React, { useState } from "react";
import ReactDOM from 'react-dom/client';
import GlobalContext from "./Global";
import Second from "./second";
import Third from "./third";

function App(){
    const [count, setCount] = useState(1)

    return(
        <>
        <Second/>
        <GlobalContext.Provider value={{count, setCount}}>
            <h1>Count parent: {count}</h1>
            <Third/>
        </GlobalContext.Provider>
        </>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>)