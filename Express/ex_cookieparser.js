const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

//Use cookie-parser middleware
app.use(cookieParser());
// Route for root URL
app.get('/', (req,res)=>{
    res.send('Welcome to the Cookie Server!');
});
//Route for setting a cookie
app.get('/set-cookie', (req,res)=>{
    res.cookie('username','John Doe');
    res.send('Cookie has been sent!');
});

// Route for getting the cookie
app.get('/get-cookie', (req,res)=>{
    res.send(`Username cookie: ${req.cookies.username}`);
});
//Start the server
app.listen(3000, ()=>{
    console.log('Server running on http://localhost:3000');
});


/**
 * TASK 1:
 * Read the keys of all the cookies stored in the local machine in the array list,
 * process each key and print the value of each and every key
 */