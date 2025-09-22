function hello(fun){
    console.log("Hello  I am name");
    fun();
}

// function greet(){
//     console.log("Hello I am callback");
// }

// hello(greet);

hello(
    function greet(){
    console.log("Hello I am callback");
}
);

hello( ()=> console.log("I AM CALL BACK "));
