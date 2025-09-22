function PlaceOrder(callback){
    console.log("Talking to Donimooo....");

    setTimeout(()=>{
        console.log("Order Placed successfully");
        callback();
    }, 2000);
}

function PreparingOrder(callback){
    console.log("Pizza preparation started....");

    setTimeout(()=>{
        console.log("Your Pizza is ready");
        callback();
    }, 5000);
}

function PickUpOrder(callback){
    console.log("Reaching the Donimooo....");

    setTimeout(()=>{
        console.log("Order is picked up");
        callback();
    }, 2000);
}

function Delivery(){
    console.log("Order on the way....");

    setTimeout(()=>{
        console.log("Order delivered successfully");
    }, 4000);
}

PlaceOrder(()=>{
    PreparingOrder(()=>{
        PickUpOrder(()=>{
            Delivery();
        });
    });
});

