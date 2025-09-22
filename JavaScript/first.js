console.log("Hello");

//Data Types
let a = 10;
let nam = "Reet";
const permanent = 100;

console.log(a);
console.log(nam);
console.log(permanent);

// permanent = 10; -> gives error
//Primitive  data types 
let account = 1000;
console.log(account," - ",typeof(account));

let str = "Reet";
console.log(str," - ", typeof(str));

let statement = true;
console.log(statement, " - ", typeof(statement));

//undefined
let accounts;
console.log(accounts, " - " ,typeof(accounts));

let balance = null;
console.log(balance , " - ", typeof(balance));

let big =573475934759347597547254472097427;
console.log(big, " - ", typeof(big));

let bign =573475934759347597547254472097427n;
console.log(big, " - ", typeof(bign));

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

//Non primitive
let arr = [10, 20, 30];
console.log(arr, " - ", typeof(arr));

let obj = {
    user : "Reet",
    account_num: 1234567890,
    balance: 89839891823,
};
console.log(obj, " - ", typeof(obj));

let fun = function(){
    console.log("Hello I am function");
    return 10;
};
fun();
console.log(fun());
console.log(typeof(fun));

//Type Conversion
//to number 
let acc_balance = "10";
console.log(acc_balance, typeof(acc_balance));
let num = Number(acc_balance);
console.log(num, typeof(num));

let x = null;
console.log(x, Number(x));

x = undefined;
console.log(x, Number(x));

//to string
let ab = 3423;
ab  = String(ab);
console.log(ab, typeof(ab));
console.log(null, String(null));
console.log(undefined, String(undefined));

//to boolean
let abc = 3423;
abc  = Boolean(abc);
console.log(abc, typeof(abc));
console.log(null, Boolean(null));
console.log(undefined, Boolean(undefined));

let a1 = 10;
let str1 = "10";
console.log(a1 == str1);

//=== type check then value check
console.log(a1 === str1);

let ac1 = 123;
let ac2 = "123";
let ac3 = 123;
console.log(ac1 == ac2 == ac3);

let abc1 = 123;
let abc2 = "123";
let abc3 = 1;
console.log(abc1 == abc2 == abc3);
