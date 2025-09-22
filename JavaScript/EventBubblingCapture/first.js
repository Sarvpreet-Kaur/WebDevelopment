// const pink = document.getElementById('Pink');
// const blue = document.getElementById('Blue');
// const yellow = document.getElementById('Yellow');
// const green = document.getElementById('Green');
// const purple = document.getElementById('Purple');

// const body = document.body;

// pink.addEventListener('click', ()=>{
//     body.style.backgroundColor = "#FFD1DC";
// });
// blue.addEventListener('click', ()=>{
//     body.style.backgroundColor = "#A7C7E7";
// });
// yellow.addEventListener('click', ()=>{
//     body.style.backgroundColor = "#FFFACD"
// });
// green.addEventListener('click', ()=>{
//     body.style.backgroundColor = "#B5EAD7";
// });
// purple.addEventListener('click', ()=>{
//     body.style.backgroundColor = "#D5B8FF";
// });

// const buttons = document.querySelectorAll('button');

// buttons.forEach((button)=>{
//     const body  = document.body;
//     button.addEventListener('click', ()=>{
//         const col = window.getComputedStyle(button).backgroundColor;
//         body.style.backgroundColor = col;
//     });
// });

const root = document.getElementById('root');

root.addEventListener('click', (event)=>{
    console.log(event.target);
    col  = window.getComputedStyle(event.target).backgroundColor;
    console.log(col);

    if(event.target.tagName === 'BUTTON')
    document.body.style.backgroundColor = col;
})
