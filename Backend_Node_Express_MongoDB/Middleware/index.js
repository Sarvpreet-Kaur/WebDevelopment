const express = require('express');
const app = express();

// app.use("/user", (req, res)=>{

//     // not a return statement 
//     //only once
//     res.send("Hello")
//     // res.send("will give error")
// })

//First second callback functions act as a middleware
/*
app.use("/user", (req, res, next)=>{
    console.log("first");
    next();
    console.log("Sixth")
}, 
(req, res, next)=>{
    console.log("second");
    next();
    console.log("fifth")
}, 
(req, res, next)=>{
    console.log("third");
    // next();
    res.send("Can be sent only once in this whole process")
    console.log("Sixth")
})
*/

//can be wrapped in array - or any mixed combination

// app.use(route, RH, [RH, RH, RH], RH, RH)
// Middleware: mw-> mw-> mw-> RequestHandler

/*
app.use("/user", [(req, res, next)=>{
    console.log("first");
    next();
    console.log("Sixth")
}, 
(req, res, next)=>{
    console.log("second");
    next();
    console.log("fifth")
}, 
(req, res)=>{
    console.log("third");
    // next();
    res.send("Can be sent only once in this whole process")
    console.log("Sixth")
}])
*/

//can be written as different functions

/*
app.use("/user", (req,res,next)=>{
    
    console.log("first");
    // res.send("Hello Ji");
    next();
})

app.use("/user", (req,res,next)=>{
    
    console.log("Second");
    // res.send("I am second");
    next();
})

app.use("/user",(req,res,next)=>{
    console.log("Third")
    res.send("I am Third");
    // next();
})

app.use("/user",(req,res,next)=>{
    console.log("fourth")
    res.send("I am Fourth");  
})
*/



// Maintain logs through middleware
// Code that is required for every route handler can be written as middleware
// app.use() can run any http methods

//Maintaining logs, authorization etc.
app.use("/user",(req,res,next)=>{
    
    // console.log(`${Date.now()} ${req.method} ${req.url}`);
    // next();
    // 30 line of code
    next();
})



app.get("/user", (req,res)=>{
    res.send("Info about user")
})

app.post("/user", (req,res)=>{
    res.send("Info saved");
})


app.delete("/user", (req,res)=>{
    res.send("Info Deleted");
})



app.listen(5000, ()=>{
    console.log("Listening")
})