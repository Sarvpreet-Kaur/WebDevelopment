const mongoose = require('mongoose');
const {url} =  require('../url')

async function main(){
    await mongoose.connect(url);

    //Creating schema
    const userSchema = new mongoose.Schema({
        name: String,
        age: Number,
        city: String,
        gender: String
    })

    //Creating collection
    //creating model , class in mongoose

    //this name is lowercased and s is added at end
    const user = mongoose.model("user", userSchema)

    // //creating document or object
    // const per1 = new user({name: "Reet", age: 20, city: "Kanpur"});
    // await per1.save()

    // //or
    // await user.create({name: "Preet", age: 18, city: "Kanpur"})

    // //inserting more than 1 - passing as array
    await user.insertMany ([
        { name: "Alice Johnson", gender: "Female", age: 28, city: "New York" },
        { name: "Bob Smith", age: 34 },
        { name: "Charlie Brown", gender: "Male", city: "Los Angeles" },
        { name: "Diana Prince"},
        { name: "Ethan Hunt", gender: "Male", age: 45, city: "London"}
    ])

    const ans = await user.find({})
    console.log(ans)

    const res = await user.find({name: "Reet"})
    console.log(res)


}

main()
    .then(()=>console.log("Connected to DB"))
    .catch((err)=>console.log(err))
