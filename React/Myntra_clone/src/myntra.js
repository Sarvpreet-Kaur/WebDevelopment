import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Card from "./component/Card"
import Header from "./component/header";
import arr from "./utils/dummy"

console.log(arr);

function App() {
  let [A, setA] =useState(arr);

  function sortArray(){
    const sorted = [...A].sort((a,b)=>{ return a.price - b.price})
    console.log(sorted);
    setA(sorted)
  }

  function Price_above_9999(){
    const above_9999 = arr.filter(value => value.price>9999)
    setA(above_9999)
  }
    return (
        <>
          <div>
            <Header/>
            <button onClick = {sortArray}>Sortby Price</button>
            <button onClick = {Price_above_9999}>Price above 9999</button>
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
                A.map((value, index)=> <Card key = {index} cloth = {value.cloth} offer = {value.offer} price = {value.price}/>)
              }
      
          </div>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
