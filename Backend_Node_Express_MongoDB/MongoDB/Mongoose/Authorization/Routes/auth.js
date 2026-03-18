const express = require('express');
const authRouter = express.Router();

const validUser = require('../validateUser');
const bcrypt = require('bcrypt');
const user = require('../users');

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

module.exports = authRouter