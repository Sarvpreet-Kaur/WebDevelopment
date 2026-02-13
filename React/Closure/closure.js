// let b  = 20;

// function greet(){
//     let a = 10;
//     console.log(a);
//     console.log(b);
// }

// greet()
//a cannot be printed outside the function as it is not in that scope 

function greet(){
    let a = 20;

    function meet(){
        console.log(a);
    }
    return meet;
}

//Reference of meet is returned
const closure = greet();
closure() //prints a