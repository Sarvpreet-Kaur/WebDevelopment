const express = require('express');
const authRouter = express.Router();

const validUser = require('../validateUser');
const bcrypt = require('bcrypt');
const user = require('../users');

const jwt  = require('jsonwebtoken')
const redisClient = require('../redis')
const userAuth = require('../Middleware/userAuth')

authRouter.post("/register", async (req, res)=>{
    try{
        validUser(req.body)
        req.body.password = await bcrypt.hash(req.body.password, 10);
        await user.create(req.body);
        res.send("Registration done successfully")
    }
    catch(err){
        res.send("Error : "+ err.message)
    }
})

authRouter.post("/login", async(req, res)=>{
    try{
        const people = await user.findByEmail(req.body.emailId);
        const isAllowed = await bcrypt.compare(req.body.password, people.password)

        if(!isAllowed) throw new Error("Invalid Credentials")

        const token = people.getJWT();

        res.cookie("token", token);
        res.send("Login successfully")
    }
    catch(err) {res.send("Error: "+ err.message)}
})

//Logout feature - by removing cookie form user side
// drawback: token is still valid until it is expired
/*authRouter.post("/logout", async(req, res)=>{
    try{
        res.cookie("token", null, {expires: new Date(Date.now())})
        res.send("Logged Out successfully")
    }
    catch(err) {res.send("Error: "+err.message)}
})*/

authRouter.post("/logout", userAuth, async(req, res)=>{
    try{
        const {token} = req.cookies;

        const payload = jwt.decode(token);
        console.log(payload);
        
        //Block this token
        await redisClient.set(`token:${token}`, "Blocked");

        //to set expire after a particular time (in ms) - 10sec
        // await redisClient.expire(`token:${token}`, 1000)

        //expire at particular time - set from 1 Jan 1970
        await redisClient.expireAt(`token:${token}`, payload.exp);

        res.cookie("token", null, {expires: new Date(Date.now())})
        res.send("Logged Out Successfully !!")
    }
    catch(err) {res.send("Error: "+err.message)};
})

module.exports = authRouter