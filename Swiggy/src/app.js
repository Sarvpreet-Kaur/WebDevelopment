import ReactDOM from 'react-dom/client';
import Restaurant from "./Components/Restaurant";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./Components/Home";
import RestaurantMenu from './Components/RestaurantMenu';


function App(){
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path = "/restaurant" element={<Restaurant/>}></Route>
            <Route path="/city/delhi/:id" element={<RestaurantMenu/>}></Route>
        </Routes>
        </BrowserRouter>
        </>
        
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App></App>)