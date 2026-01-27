const form = document.querySelector('form');

// form.addEventListener('click', (event)=>{
//     // console.log(event.target);
//     // console.log(event.target.id);
//     console.log(event.target.value);

// });

// form.addEventListener('input', (event)=>{
//     // console.log(event.target);
//     // console.log(event.target.id);
//     console.log(event.target.value);

// });

// form.addEventListener('change', (event)=>{
//     console.log(event.target.value);
// });

/* focus: does not bubble, so it needs to be directly
    attached to individual input elements

    focusin: Bubbles, so it can be attached to the form 
    element for event delegation
*/

// form.addEventListener('focus', (event)=>{
//     console.log(event.target.value);
// });

// form.addEventListener('focusin', (event)=>{
//     console.log(event.target.value);
//     //Prints  its current value
// });

// blur - do not bubbles, focusout - bubbles
// form.addEventListener('focusout', (event)=>{
//     console.log(event.target.value);
//     //when focus shifts from curr element to other then prev. one gets present
// });

// form.addEventListener('dbclick', ()=>{
//     console.log("Double Click");
// });

// form.addEventListener('submit', ()=>{
//     console.log("Submitted");
// });

// form.addEventListener('reset', ()=>{
//     console.log("Reset");
// });

// form.addEventListener('submit', (event)=>{
//     event.preventDefault();  

//     let uname = document.getElementById('first');
//     console.log(uname.value);

//     let lname = document.getElementById('second');
//     console.log(lname.value);

//     let age = document.getElementById('third');
//     console.log(age.value);
// });

form.addEventListener('submit', ()=>{
    
    const data = new FormData(form);

    for(let [key, val] of data.entries()){
        console.log(key, val);
    }
});