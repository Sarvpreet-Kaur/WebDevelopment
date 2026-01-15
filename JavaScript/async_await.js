// cart = ['pizza', 'limca', 'garlic bread']

// function PlaceOrder(cart){
//     console.log("Talking to Donimooo....");

//     const pr = new Promise(function(resolve, reject){
//         setTimeout(()=>{
//             const foodAvail = true;
//             if(foodAvail) {
//                 console.log("Order Placed successfully");
//                 const order = {orderId: 123, food: cart, restaurant: "Donimooo", location: "Knp"};
//                 resolve(order);
//             }
//             else{
//                 reject("OUT OF STOCK");
//             }
            
//         }, 2000);
//     });

//     return pr;
// }

// function PreparingOrder(order){
//     console.log("Pizza preparation started....");

//     const pr = new Promise(function(resolve, reject){
//         setTimeout(()=>{
//             console.log("Your Pizza is ready");
//             const foodDetails = {token: 5, location: order.location, restaurant: order.restaurant};
//             resolve(foodDetails);
//         }, 5000);
//     })
//     return pr;
// }

// function PickUpOrder(foodDetails){
//     console.log("Reaching the Donimooo....");
//     const pr = new Promise(function(resolve, reject){
//         setTimeout(()=>{
//             console.log("Order is picked up");
//             const dropLocation = foodDetails.location; 
//             resolve(dropLocation);
//         }, 2000);
//     });
//     return pr;
// }

// function Delivery(){
//     console.log("Order on the way....");

//     setTimeout(()=>{
//         console.log("Order delivered successfully");
//     }, 4000);
// }

// //creating promise
// // PlaceOrder(cart)
// // .then(order=>PreparingOrder(order))
// // .then(foodDetails=>PickUpOrder(foodDetails))
// // .then(location=>Delivery(location))
// // .catch(error=>console.log(`Couldn't deliver due to ${error}`));

// //can not call await directly 
// // const order =await PlaceOrder(cart);
// // const foodDetails = await PreparingOrder(order);
// // const dropLocation = await PickUpOrder(foodDetails);
// // Delivery(dropLocation);

// async function Food(cart) {
//     const order = await PlaceOrder(cart);
//     const foodDetails = await PreparingOrder(order);
//     const dropLocation = await PickUpOrder(foodDetails);
//     Delivery(dropLocation);
// }
// Food(cart);




// const p1 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("First resolved");
//     },5000);
// });
// const p2 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("Second resolved");
//     },5000);
// });

// p1.then((response)=>console.log(response));


//Will print together as the promise is resolved
// async function greet(){
//     const data1 = await p1;
//     console.log(data1);

//     const data2 = await p1;
//     console.log(data2);
// }
// greet();


//Will print together as they work in parallel
// async function greet(){
//     const data1 = await p1;
//     console.log(data1);

//     const data2 = await p2;
//     console.log(data2);
// }
// greet();

function test1(){
    const p1 = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("First resolved");
        },5000);
    });
    return p1;
}

function test2(){
    const p2 = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Second resolved");
        },5000);
    });
    return p2;
}

//Will print after a gap of 5 sec 5 sec as they will only be started when the function call is made
async function greet(){
    const data1 = await test1();
    console.log(data1);

    const data2 = await test2();
    console.log(data2);
}
greet();
