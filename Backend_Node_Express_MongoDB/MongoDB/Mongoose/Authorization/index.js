const express = require('express');
const app = express();
const main = require('./database');

const cookieParser = require('cookie-parser');

const authRouter = require('./Routes/auth')
const userRouter = require('./Routes/user')
const rateLimiter = require('./Middleware/rateLimiter')

require('dotenv').config()
const redisClient = require('./redis')

app.use(express.json());
app.use(cookieParser());
app.use(rateLimiter);

app.use("/auth", authRouter);
app.use("/user", userRouter);

const initializeConnection = async()=>{
    try{
        // connect individually
        // await redisClient.connect();
        // console.log("Connected to Redis");

        // await main();
        // console.log("DB Connected");

        //connect parallel
        await Promise.all([redisClient.connect(), main()])
        console.log("DB Connected")

        app.listen(process.env.PORT, ()=>{
            console.log("Listening")
        })
    }
    catch(err) {console.log("Error: "+err.message)}
}

initializeConnection();