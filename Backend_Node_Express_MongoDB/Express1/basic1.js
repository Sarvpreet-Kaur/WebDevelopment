const express = require("express");

//creating a server
const app = express();

const data = {
    "name": "Reet"
}
// --------------------------------------------
// app.use((req, res)=>{
//     res.send(data)
// })
//---------------------------------------------

//if placed at top it will always display home as
//js will compare the root and enter here, assuming any "/contact" as child of '/'
// app.use("/", (req, res)=>{
//     res.send("Home")
// })

//--------------------------------------------------
// app.use("/about", (req, res)=>{
//     res.send(data)
// })

// app.use("/contact", (req, res)=>{
//     res.send("Contact")
// })

// app.use("/", (req, res)=>{
//     res.send("Home")
// })
// --------------------------------------------------

// ? char become Optional
// + char can be repeated multiple times
// * any number of character can arrive
// app.use("/abou?t", (req, res)=>{
//     res.send(data)
// })

// -----------------------------------------------------

//Dynamic Routing
app.use("/about/:id/:name", (req, res)=>{
    console.log(req.params)
    res.send(data)
})

app.listen(5500, ()=>{
    console.log("Listening")
})
