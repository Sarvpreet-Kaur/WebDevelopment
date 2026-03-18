const express = require('express');
const userRouter = express.Router();

const jwt = require('jsonwebtoken')
const user = require('../users')
const userAuth = require('../Middleware/userAuth')


userRouter.get("/", userAuth, async(req,res)=>{
    try{
        const payload = jwt.verify(req.cookies.token, process.env.SECRET_KEY)
        const result = await user.findById(payload._id);
        res.send(result);
    }
    catch(err){
        res.send("Error"+err.message);
    }
})

userRouter.delete("/", userAuth, async (req,res)=>{
    try{

        const payload = jwt.verify(req.cookies.token, process.env.SECRET_KEY);
        await user.findByIdAndDelete(payload._id);
        res.send("Deleted Successfully");
    }
    catch(err){
        res.send("Error"+err.message);
    }
})

userRouter.patch("/", userAuth, async(req,res)=>{
    try{

        const payload = jwt.verify(req.cookies.token, process.env.SECRET_KEY)
        const update = req.body;

        await user.findByIdAndUpdate(payload._id,update,{"runValidators":true});
        res.send("Update Successfully");
    }
    catch(err){
        res.send("Error "+err.message);
    }
})

module.exports = userRouter