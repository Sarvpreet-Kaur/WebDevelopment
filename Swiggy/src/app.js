import ReactDOM from 'react-dom/client';
import Restaurant from "./Components/Restaurant";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./Components/Home";
import Shimmer from './Components/Shimmer';

function App(){
    return(
        // <>
        // <BrowserRouter>
        // <Routes>
        //     <Route path="/" element={<Home/>}></Route>
        //     <Route path = "/restaurant" element={<Restaurant/>}></Route>
        // </Routes>
        // </BrowserRouter>
        // </>
        <Shimmer></Shimmer>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App></App>)