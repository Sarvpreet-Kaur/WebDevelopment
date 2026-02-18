import React from "react";
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux";
import stores from "./stores"
import "./counting"
import Counting from "./counting"
import CustomCounter from "./customCounter";

function App(){
    console.log(stores);

    return(
        <Provider store={stores}>
            <Counting></Counting>
            <br></br>
            <br></br>
            <CustomCounter></CustomCounter>
        </Provider>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App></App>)