import React from "react";
import ReactDOM from "react-dom/client";
import Card from "./component/Card"
import Header from "./component/header";
import arr from "./utils/dummy"

function App() {
    return (
        <>
          <div>
            <Header/>
          </div>
          <div className="bod" style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
              {/* <Card cloth = "T-Shirt" offer = "20-30%"/>
              <Card cloth = "T-Shirt" offer = "20-30%"/>
              <Card cloth = "T-Shirt" offer = "20-30%"/>
              <Card cloth = "T-Shirt" offer = "20-30%"/>
              <Card cloth = "T-Shirt" offer = "20-30%"/>
              <Card cloth = "T-Shirt" offer = "20-30%"/>
              <Card cloth = "T-Shirt" offer = "20-30%"/> */}

              {
                arr.map((value, index)=> <Card key = {index} cloth = {value.cloth} offer = {value.offer}/>)
              }
      
          </div>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
