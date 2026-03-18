const express = require('express');
const app = express();
const main = require('./database');
const user = require('./users');
const validUser = require('./validateUser');
const bcrypt = require('bcrypt');

const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

app.use(express.json())
app.use(cookieParser())

app.post("/register", async (req, res)=>{

    try{
        validUser(req.body)

        //Hashed password
        req.body.password = await bcrypt.hash(req.body.password, 10);
        await user.create(req.body);
        res.send("Registration done successfully")
    }
    catch(err){
        res.send("Error : "+ err.message)
    }
})

app.post("/login", async(req, res)=>{
    try{

        // const people = await user.findById(req.body._id)
        const people = await user.findOne({emailId:req.body.emailId});

        // if(!(req.body.emailId === people.emailId)) throw new Error("Invalid credentials")

        //Comparing password(hashed) by extracting salt and creating a hash with the entered password and then comparing
        const isAllowed = await bcrypt.compare(req.body.password, people.password)

        if(!isAllowed) throw new Error("Invalid Credentials")

        //Token implementation
        //this secret-key is for encryption and decryption for digital signature eg : "secret_key"
        const token = jwt.sign({_id:people._id, emailId:people.emailId} , "secret_key");
        res.cookie("token", token);
        res.send("Login successfully")
    }
    catch(err) {res.send("Error: "+ err.message)}
})

app.get("/info", async(req,res)=>{
    try{

        //before sending data verify the token is coming from a valid source
        const payload = jwt.verify(req.cookies.token, "secret_key");
        console.log(payload);

        const result = await user.find();
        res.send(result);
    }
    catch(err){
        res.send("Error: "+err.message);
    }
})

// app.get("/user/:id", async(req,res)=>{
//     try{
        
//         const result = await User.findById(req.params.id);
//         res.send(result);
//     }
//     catch(err){
//         res.send("Error"+err.message);
//     }
// })

app.get("/user", async(req,res)=>{
    try{
        const payload = jwt.verify(req.cookies.token, "secret_key")
        const result = await user.findById(payload._id);
        res.send(result);
    }
    catch(err){
        res.send("Error"+err.message);
    }
})

// app.delete("/user/:id", async (req,res)=>{
//     try{
//         await User.findByIdAndDelete(req.params.id);
//         res.send("Deleted Successfully");
//     }
//     catch(err){
        
//         res.send("Error"+err.message);
//     }
// })

app.delete("/user", async (req,res)=>{
    try{

        const payload = jwt.verify(req.cookies.token, "secret_key");
        await user.findByIdAndDelete(payload._id);
        res.send("Deleted Successfully");
    }
    catch(err){
        res.send("Error"+err.message);
    }
})

// app.patch("/user", async(req,res)=>{
//     try{
//         const {_id, ...update} = req.body;

//         await User.findByIdAndUpdate(_id,update,{"runValidators":true});
//         res.send("Update Successfully");
//     }
//     catch(err){
//         res.send("Error "+err.message);
//     }
// })

app.patch("/user", async(req,res)=>{
    try{

        const payload = jwt.verify(req.cookies.token, "secret_key")
        const update = req.body;

        await user.findByIdAndUpdate(payload._id,update,{"runValidators":true});
        res.send("Update Successfully");
    }
    catch(err){
        res.send("Error "+err.message);
    }
})

main()
.then(async ()=>{
    console.log("Connected to DB")
    app.listen(3000, ()=>{
        console.log("Listening at port 3000");
    })
})
.catch((err)=>console.log(err));
