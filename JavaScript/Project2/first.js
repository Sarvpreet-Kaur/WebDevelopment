function quotes(positiveQuotes){
    let num = Math.floor(Math.random()*(20));
    const currQuote = positiveQuotes[num];
    const ele = document.getElementById('quote');
    ele.innerHTML = currQuote;
}

const positiveQuotes = [
    "Keep your face always toward the sunshine—and shadows will fall behind you. – Walt Whitman",
    "The best way to get started is to quit talking and begin doing. – Walt Disney",
    "Happiness is not by chance, but by choice. – Jim Rohn",
    "Every day may not be good, but there’s something good in every day. – Alice Morse Earle",
    "Do what you can, with what you have, where you are. – Theodore Roosevelt",
    "It always seems impossible until it’s done. – Nelson Mandela",
    "Start where you are. Use what you have. Do what you can. – Arthur Ashe",
    "Positive anything is better than negative nothing. – Elbert Hubbard",
    "Believe you can and you’re halfway there. – Theodore Roosevelt",
    "Happiness is not something ready made. It comes from your own actions. – Dalai Lama",
    "With the new day comes new strength and new thoughts. – Eleanor Roosevelt",
    "The only limit to our realization of tomorrow will be our doubts of today. – Franklin D. Roosevelt",
    "Try to be a rainbow in someone’s cloud. – Maya Angelou",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
    "Act as if what you do makes a difference. It does. – William James",
    "Opportunities don’t happen, you create them. – Chris Grosser",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us. – Ralph Waldo Emerson",
    "Happiness is the highest form of health. – Dalai Lama",
    "Choose to be optimistic, it feels better. – Dalai Lama",
    "The only way to do great work is to love what you do. – Steve Jobs"
];

const text = document.getElementById("quote");
//quotes();
//setInterval(() => quotes(positiveQuotes), 5000);

//Different events
/*
click, dbclick, mouseover, mousemove
 */

const button = document.querySelector('button');
button.addEventListener('click', (event)=>{
    console.log(event);
    console.log(event.target)
    console.log(event.type)
    console.log(event.clientX)
    console.log(event.clientY)
    quotes(positiveQuotes)
});

//Keyboard events - keydown, keyup
// document.addEventListener('keyup', (event)=>{
//     //console.log(event);
//     console.log(event.key);
//     if(event.key == "Enter") quotes(positiveQuotes)
// });