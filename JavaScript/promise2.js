// cart = ['pizza', 'limca', 'garlic bread']

// function PlaceOrder(cart, callback){
//     console.log("Talking to Donimooo....");

//     setTimeout(()=>{
//         console.log("Order Placed successfully");
//         const order = {orderId: 123, food: cart, restaurant: "Donimooo", location: "Knp"};
//         // callback(order);
//     }, 2000);
// }

// function PreparingOrder(order, callback){
//     console.log("Pizza preparation started....");

//     setTimeout(()=>{
//         console.log("Your Pizza is ready");
//         const foodDetails = {token: 5, location: order.location, restaurant: order.restaurant};
//         // callback(foodDetails);
//     }, 5000);
// }

// function PickUpOrder(callback){
//     console.log("Reaching the Donimooo....");

//     setTimeout(()=>{
//         console.log("Order is picked up");
//         const dropLocation = foodDetails.location; 
//         // callback(dropLocation);
//     }, 2000);
// }

// function Delivery(){
//     console.log("Order on the way....");

//     setTimeout(()=>{
//         console.log("Order delivered successfully");
//     }, 4000);
// }

// PlaceOrder(cart, (order)=>{
//     PreparingOrder(order, (foodDetails)=>{
//         PickUpOrder(foodDetails, (dropLocation)=>{
//             Delivery(dropLocation);
//         });
//     });
// });

//Using Promise

cart = ['pizza', 'limca', 'garlic bread']

function PlaceOrder(cart){
    console.log("Talking to Donimooo....");

    const pr = new Promise(function(resolve, reject){
        setTimeout(()=>{
            const foodAvail = false;
            if(foodAvail) {
                console.log("Order Placed successfully");
                const order = {orderId: 123, food: cart, restaurant: "Donimooo", location: "Knp"};
                resolve(order);
            }
            else{
                reject("OUT OF STOCK");
            }
            
        }, 2000);
    });

    return pr;
}

function PreparingOrder(order){
    console.log("Pizza preparation started....");

    const pr = new Promise(function(resolve, reject){
        setTimeout(()=>{
            console.log("Your Pizza is ready");
            const foodDetails = {token: 5, location: order.location, restaurant: order.restaurant};
            resolve(foodDetails);
        }, 5000);
    })
    return pr;
}

function PickUpOrder(foodDetails){
    console.log("Reaching the Donimooo....");
    const pr = new Promise(function(resolve, reject){
        setTimeout(()=>{
            console.log("Order is picked up");
            const dropLocation = foodDetails.location; 
            resolve(dropLocation);
        }, 2000);
    });
    return pr;
}

function Delivery(){
    console.log("Order on the way....");

    setTimeout(()=>{
        console.log("Order delivered successfully");
    }, 4000);
}

//creating promise
PlaceOrder(cart)
.then(order=>PreparingOrder(order))
.then(foodDetails=>PickUpOrder(foodDetails))
.then(location=>Delivery(location))
.catch(error=>console.log(`Couldn't deliver due to ${error}`))


//CREATING PROMISE SYNTAX
// const pre = new Promise(function(resolve, reject){

// })
// return pre;