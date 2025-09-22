const fs = require("fs");

const restaurants = [];
const images = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

//50
const rest_name = ["Noma",
    "El Celler de Can Roca",
    "Osteria Francescana",
    "Eleven Madison Park",
    "The French Laundry",
    "Per Se",
    "Le Bernardin",
    "Alinea",
    "Dinner by Heston Blumenthal",
    "The Fat Duck",
    "Gaggan",
    "Central",
    "Pujol",
    "Quintonil",
    "Mugaritz",
    "Arpège",
    "Blue Hill at Stone Barns",
    "Mirazur",
    "Restaurant Gordon Ramsay",
    "Pierre Gagnaire",
    "L’Astrance",
    "Le Meurice",
    "Alain Ducasse au Plaza Athénée",
    "Maison Pic",
    "Paul Bocuse",
    "Sukiyabashi Jiro",
    "Kikunoi",
    "Narisawa",
    "Den",
    "Attica",
    "Steirereck",
    "Geranium",
    "Frantzén",
    "Faviken",
    "Septime",
    "Hof van Cleve",
    "De Librije",
    "Azurmendi",
    "D.O.M.",
    "Maní",
    "Lasai",
    "The Ledbury",
    "Clove Club",
    "Sketch (The Lecture Room & Library)",
    "Core by Clare Smyth",
    "Restaurant Tim Raue",
    "Schloss Schauenstein",
    "Test Kitchen",
    "La Pergola"
];

//10
const foodTypes = [
    "Italian",
    "Chinese",
    "Mexican",
    "Indian",
    "Japanese",
    "French",
    "Thai",
    "Greek",
    "Spanish",
    "American"
];

//10
const delhiLocations = [
    "Connaught Place",
    "India Gate",
    "Qutub Minar",
    "Red Fort",
    "Chandni Chowk",
    "Hauz Khas Village",
    "Lotus Temple",
    "Rajpath",
    "Lajpat Nagar",
    "Sarojini Nagar"
];

for(let i=0; i<100; i++){
    const obj = {};
    obj["image"] = images[Math.floor(Math.random()*10)];
    obj["name"] = rest_name[Math.floor(Math.random()*50)];
    obj["rating"] = (Math.random()*5+1).toFixed(1);
    obj["food_type"] = foodTypes[(Math.floor(Math.random()*10))];
    obj["Price_for_two"] = Math.floor(Math.random()*2401+100);
    obj["Location"] = delhiLocations[Math.floor(Math.random()*10)];
    obj["distance_from_customer_residence"] = (Math.random()*10+1).toFixed(1);
    obj["offers"] = Math.floor(Math.random()*30);
    obj["alcohol"] = Math.random() > 0.7;
    obj["open_time"] = Math.floor(Math.random()*24);
    obj["closing_time"] = (obj["open_time"]+12)%24;

    restaurants.push(obj);
}

//Converting array into JSON
const jsonData = JSON.stringify(restaurants, null, 4);
console.log(jsonData);

fs.writeFile("data.json", jsonData, (err) => {
    if (err) {
        console.error("Error writing file", err);
    } else {
        console.log("✅ JSON data saved to data.json (formatted nicely)");
    }
});