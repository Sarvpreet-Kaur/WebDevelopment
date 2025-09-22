const map = new Map();
map.set(3, 9);
map.set("name", "reet");
map.set(3, 0); //Value will be modified if duplicate key is reduced 

console.log(map);

map.delete(3);
console.log(map);

console.log(map.has("name"));
console.log(map.size);

map.clear();
console.log(map);

//2nd way to create - as a 2D array
const map1 = new Map([
    [4, "Reet"],
    [30, 90],
    [true, "1"],
    [69, 96]
]);

for(let val of map1){
    console.log(val);
}

for(let [key, val] of map1){
    console.log(key, val);
}

console.log(map1[4]);

map1.forEach((val, key)=>{console.log(key, val)});