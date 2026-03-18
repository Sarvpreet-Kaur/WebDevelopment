const express = require('express');
const app = express();
const main = require('./database');

const cookieParser = require('cookie-parser');

const authRouter = require('./Routes/auth')
const userRouter = require('./Routes/user')

require('dotenv').config()

app.use(express.json())
app.use(cookieParser())

app.use("/auth", authRouter)
app.use("/user", userRouter)

main()
.then(async ()=>{
    console.log("Connected to DB")
    app.listen(process.env.PORT, ()=>{
        console.log("Listening");
    })
})
.catch((err)=>console.log(err));
