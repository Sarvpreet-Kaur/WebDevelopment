const express = require('express');
const bodyParser = require('body-parser');
const app = express();
// use body parser middleware
// to parse JSON bodies
app.use(bodyParser.json());// REplaces
// express.json
// Define a get route for the URL

app.get('/',(req, res)=>{
    res.send('Hello Body server');
});

