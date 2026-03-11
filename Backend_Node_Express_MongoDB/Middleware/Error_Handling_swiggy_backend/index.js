const express = require('express');
const app = express();
const {Auth} = require('./auth_temporary')
app.use(express.json());

const FoodMenu = [
    {"id": 1, "food": "Paneer Butter Masala", "category": "veg", "price": 250},
    {"id": 2, "food": "Chicken Biryani", "category": "non-veg", "price": 300},
    {"id": 3, "food": "Masala Dosa (Premium)", "category": "veg", "price": 120},
    {"id": 4, "food": "Mutton Rogan Josh", "category": "non-veg", "price": 450},
    {"id": 5, "food": "Veg Fried Rice", "category": "veg", "price": 180},
    {"id": 6, "food": "Chilli Chicken", "category": "non-veg", "price": 280},
    {"id": 7, "food": "Dal Makhani", "category": "veg", "price": 200},
    {"id": 8, "food": "Fish Curry", "category": "non-veg", "price": 350},
    {"id": 9, "food": "Aloo Gobi Adraki", "category": "veg", "price": 160},
    {"id": 10, "food": "Prawn Masala", "category": "non-veg", "price": 400},
    {"id": 11, "food": "Palak Paneer", "category": "veg", "price": 220},
    {"id": 12, "food": "Butter Chicken", "category": "non-veg", "price": 320},
    {"id": 13, "food": "Chole Bhature", "category": "veg", "price": 140},
    {"id": 14, "food": "Egg Curry", "category": "non-veg", "price": 180},
    {"id": 15, "food": "Mushroom Tikka Masala", "category": "veg", "price": 260},
    {"id": 16, "food": "Chicken Tikka (Dry)", "category": "non-veg", "price": 290},
    {"id": 17, "food": "Veg Pulao", "category": "veg", "price": 150},
    {"id": 18, "food": "Chicken Korma", "category": "non-veg", "price": 310},
    {"id": 19, "food": "Malai Kofta", "category": "veg", "price": 240},
    {"id": 20, "food": "Tandoori Chicken (Half)", "category": "non-veg", "price": 350},
    {"id": 21, "food": "Gobi Manchurian (Dry)", "category": "veg", "price": 190},
    {"id": 22, "food": "Chicken Noodles", "category": "non-veg", "price": 210},
    {"id": 23, "food": "Paneer Tikka (Dry)", "category": "veg", "price": 270},
    {"id": 24, "food": "Mutton Biryani", "category": "non-veg", "price": 400},
    {"id": 25, "food": "Mixed Vegetable Curry", "category": "veg", "price": 180},
    {"id": 26, "food": "Fish Fry (Pomfret)", "category": "non-veg", "price": 480},
    {"id": 27, "food": "Veg Momos (Steamed)", "category": "veg", "price": 110},
    {"id": 28, "food": "Chicken Seekh Kebab", "category": "non-veg", "price": 260},
    {"id": 29, "food": "Veg Burger (Gourmet)", "category": "veg", "price": 150},
    {"id": 30, "food": "Chicken Burger", "category": "non-veg", "price": 180},
    {"id": 31, "food": "Margherita Pizza (Medium)", "category": "veg", "price": 300},
    {"id": 32, "food": "Pepperoni Pizza (Medium)", "category": "non-veg", "price": 380},
    {"id": 33, "food": "Veg Pasta (White Sauce)", "category": "veg", "price": 250},
    {"id": 34, "food": "Chicken Pasta (White Sauce)", "category": "non-veg", "price": 280},
    {"id": 35, "food": "Veg Spring Rolls", "category": "veg", "price": 130},
    {"id": 36, "food": "Chilli Prawns", "category": "non-veg", "price": 420},
    {"id": 37, "food": "Manchurian (Veg Gravy)", "category": "veg", "price": 210},
    {"id": 38, "food": "Schezwan Chicken", "category": "non-veg", "price": 290},
    {"id": 39, "food": "Aloo Paratha (with curd/pickle)", "category": "veg", "price": 110},
    {"id": 40, "food": "Keema Pav", "category": "non-veg", "price": 220},
    {"id": 41, "food": "Rava Onion Dosa", "category": "veg", "price": 130},
    {"id": 42, "food": "Andhra Chilli Chicken", "category": "non-veg", "price": 300},
    {"id": 43, "food": "Gajar ka Halwa (portion)", "category": "veg", "price": 120},
    {"id": 44, "food": "Shahi Tukda", "category": "veg", "price": 140},
    {"id": 45, "food": "Rasmalai (2 pieces)", "category": "veg", "price": 110},
    {"id": 46, "food": "Chicken Shawarma", "category": "non-veg", "price": 160},
    {"id": 47, "food": "Falafel Wrap", "category": "veg", "price": 140},
    {"id": 48, "food": "Mutton Kebab", "category": "non-veg", "price": 380},
    {"id": 49, "food": "Veg Seekh Kebab", "category": "veg", "price": 200},
    {"id": 50, "food": "Pork Chops", "category": "non-veg", "price": 450}
]

//for a user
const addToCart = [];

app.get("/foodMenu", (req, res)=>{
    res.status(200).send(FoodMenu);
})

app.post("/admin", Auth, (req, res)=>{
    FoodMenu.push(req.body);
    res.status(201).send("Added successfully");
})

app.delete("/admin/:id", Auth, (req, res)=>{
    const id = parseInt(req.params.id);
    const index = FoodMenu.findIndex(item=>item.id=== id);

    if(index==-1) res.status(404).send("Item does not exist")
    else{
        FoodMenu.splice(index, 1);
        res.send("DELETED")
    }
})

app.patch("/admin", Auth, (req, res)=>{

    const id = parseInt(req.body.id);
    const data = FoodMenu.find(item=> item.id === id);

    if(req.body.food) data.food = req.body.food
    if(req.body.category) data.category = req.body.category
    if(req.body.price) data.price = req.body.price

    res.status(200).send("Updated successfully")
})

app.listen(5000, ()=>{
    console.log("5000")
})