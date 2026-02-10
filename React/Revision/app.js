import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const Header = () =>{
    return (
        <div className = "header">
            <h1>Mamamito</h1>
            <nav>
                <a href="#">Home</a> | 
                <a href="#"> About</a> | 
                <a href="#"> Contact</a>
            </nav>
        </div>
    )
}

const Greeting = ({ name }) => {
    return <h2>Welcome {name} !!!!</h2>;
};

const Main = () => {
    const [curr, setCurr] = useState("");
    const [inputValue, setInputValue] = useState("");

    return (
        <>
        <Greeting name={curr} />
        <p>This is the mamamito page.</p>

        <div className="input-box">
            <input
            type="text"
            placeholder="Enter your name..."
            onChange={(e) => setInputValue(e.target.value)} />

            <button onClick={() => setCurr(inputValue)}>
            Submit
            </button>
        </div>
        </>
    );
};


const Footer = () => {
    return (
        <>
            <p>© 2026 My Website. All rights reserved.</p>
        </>
    )
}
const App = () => {
    return (
        <div className="container">
            <Header />
            <main className="main">
                <Main />
            </main>
            <footer className="footer">
                <Footer />
            </footer>
        </div>
    );
};


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
