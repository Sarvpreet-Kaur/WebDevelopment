const gr = document.getElementById('grand');
const pr = document.getElementById('parent');
const child = document.getElementById('child');

//By default bubbling
//addEventListener (event, callBack, capture)

// child.addEventListener('click', ()=>{
//     console.log("child clicked");
// }, false);

// pr.addEventListener('click', ()=>{
//     console.log("parent clicked");
// }, false);

// gr.addEventListener('click', ()=>{
//     console.log("grand clicked");
// }, false);

child.addEventListener('click', ()=>{
    console.log("child clicked");
}, false);

pr.addEventListener('click', (event)=>{
    console.log("parent clicked");
    event.stopPropagation();

}, false);

gr.addEventListener('click', ()=>{
    console.log("grand clicked");
}, false);
