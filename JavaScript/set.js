const set = new Set([10, 20, 30, 40, 10]);
console.log(set);
console.log(typeof(set));

set.add(90);
set.delete(10);
console.log(set);

console.log(set.has(10));
console.log(set.size);
set.clear();
console.log(set);

const set1 = new Set([10, 40, 30]);
const set2 = new Set([10, 40, 50]);

//Union
// let set3 = new Set([...set1,...set2]);

//Intersection
let set3 = new Set([...set1].filter((num)=>set2.has(num)));
console.log(set3);
for(let val of set3){
    console.log(val);
}