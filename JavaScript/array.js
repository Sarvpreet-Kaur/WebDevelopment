let arr = [2,3,4,5,5];
console.log(arr);
console.log(arr.length);
console.log(arr[0]);
console.log(arr.at(4));

let nee = arr;
console.log(nee == arr);

let nee2 = structuredClone(arr);
console.log(nee2);
console.log(nee2 == arr);

arr.push(10);
console.log(arr);

arr.pop();
console.log(arr);

arr.unshift(10);
console.log(arr);

arr.shift();
console.log(arr);

delete arr[2];
console.log(arr);

console.log(arr.indexOf(5));
console.log(arr.lastIndexOf(5));
console.log(arr.indexOf(10)); // -1 if does not exist
console.log(arr.includes(5));
console.log(arr.includes(10));

arr = [1, 2, 3, 4, 5, 6, 7, true, "reet"]
//slice
console.log(arr);
console.log(arr.slice(1, 4));

//splice
console.log(arr);
console.log(arr.splice(3, 5));
console.log(arr);

arr = [1, 2, 3, 4, 5, 6, 7, true, "reet"]
console.log(arr);
console.log(arr.splice(3, 5, 890, 909, 8984)); 
console.log(arr);

//toString and join
console.log(arr.toString());
console.log(arr.join(" "));
console.log(arr.join(","));
console.log(arr.join("."));

arr1 = [1, 2, 3, 4];
let arr2 = [5, 6, 7];
let arr3 = [90]

console.log(arr1.concat(arr2, arr3));
arr1.push(arr3);
console.log(arr1);

//2D array
arr = [[1, 2, 3],[4, 5, 6]];
console.log(arr); 
console.log(arr.flat());

arr =  [[1, 2, 3],[4, 5, 6,[7, 8, 9]]];
console.log(arr.flat());
console.log(arr.flat(2));

console.log(Array.isArray(arr));
arr = "reet";
console.log(Array.isArray(arr));

//Not recommended

let a = new Array(423,53,423,43);
console.log(a);

let b = new Array(10);
console.log(b);


arr = [2, 3, 4, 5, 6, 6, 7];
const[fir, sec, , , fo] = arr;
console.log(fir, sec, fo);

const[f, s, ...t] = arr;
console.log(t);