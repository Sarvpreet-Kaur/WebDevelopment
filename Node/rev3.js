const fs = require("fs");

console.time("syncTotal");

const data = fs.readFileSync("abc.txt", "utf8");

// simulate CPU work
for (let i = 0; i < 1e9; i++) {}

console.timeEnd("syncTotal");


console.time("asyncTotal");

fs.readFile("abc.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.timeEnd("asyncTotal");
});

// CPU work runs immediately
for (let i = 0; i < 1e9; i++) {}
