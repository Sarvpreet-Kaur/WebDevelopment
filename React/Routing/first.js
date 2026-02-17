import React from "react";
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import Home from './home';
import Contact from "./contacts";
import Dashboard from "./dashboard";
import Details from './details';
import Zero from './zero'
import Hello from "./hello";
import Hi from "./hi";

function App(){
    return (
        <BrowserRouter>

        <nav>
            <Link to="/">Home </Link>
            <Link to="/contacts">Contact </Link>
            <Link to="/Dashboard">Dashboard </Link>
            <Link to="/Details">Details </Link>
        </nav>

        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/contacts" element={<Contact/>}></Route>
            <Route path="/Dashboard" element={<Dashboard/>}></Route>
            <Route path="/Details" element={<Details/>}>
                <Route index element={<Zero></Zero>}></Route>
                <Route path="hello" element={<Hello></Hello>}></Route>
                <Route path="hi" element={<Hi></Hi>}></Route>
            </Route>
            
            
        </Routes>
        </BrowserRouter>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App></App>)