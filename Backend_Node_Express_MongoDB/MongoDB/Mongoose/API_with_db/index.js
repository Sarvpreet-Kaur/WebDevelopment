const express = require('express')
const app = express()
const main = require('./database')
const user = require('./users')

app.use(express.json());

//CRUD Operations: Connecting BAckend and DB

app.get("/info", async (req, res)=>{
    const ans = await user.find({});
    res.send(ans);
})

app.post("/info", async (req, res)=>{
    try{
        //if body includes keys other than schema they only those keys are removed not the complete document
        await user.create(req.body);
        res.status(200).send("SAVED")
    }
    catch(err){
        res.status(500).send(err);
    }
})

app.delete("/info", async (req,res)=>{

    await user.deleteOne({name:"Rishabh"});
    res.send("Deleted");
})

app.put("/info", async (req,res)=>{

    const result = await User.updateOne({ name: 'Preet' }, { age: 40, city:"Bangladesh"});
    res.send("Updated Succesfully");
})

main()
.then(async ()=>{
    console.log("Connected to DB");
    app.listen(5500, ()=>{
        console.log("Listening - 5500 port")
    })
})
.catch((err)=>console.log(err))
