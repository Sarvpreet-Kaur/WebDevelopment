import ReactDOM from 'react-dom/client';
import Restaurant from "./Components/Restaurant";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./Components/Home";
import RestaurantMenu from './Components/RestaurantMenu';
import SearchFood from './Components/SearchFood';
import SecondHome from './Components/SecondHome';
import {store} from './Store/stored'
import { Provider } from 'react-redux';
import Checkout from './Components/Checkout';

function App(){
    return(
        <Provider store={store}>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route element = {<SecondHome/>}>
                    <Route path = "/restaurant" element={<Restaurant/>}></Route>
                    <Route path="/city/delhi/:id" element={<RestaurantMenu/>}></Route>
                    <Route path="/city/delhi/:id/search" element={<SearchFood/>}></Route>
                </Route>
                <Route path="/Checkout" element={<Checkout/>}></Route>
            </Routes>
            </BrowserRouter>
        </Provider>
        
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App></App>)