const pastelColors = [
  "#FFD1DC", // Pastel Pink
  "#A7C7E7", // Baby Blue
  "#B5EAD7", // Mint Green
  "#E6E6FA", // Lavender
  "#FFDAB9", // Peach
  "#FFFACD", // Pastel Yellow
  "#D5B8FF", // Lilac
  "#C1E1C1", // Pale Mint
  "#B0E0E6", // Powder Blue
  "#FFD1B3", // Pastel Coral
  "#E0B0FF", // Mauve
  "#B2FFFF"  // Pastel Aqua
];

const hellos = [
    "Hello",
    "Hola",
    "Bonjour",
    "Hallo",
    "Ciao",
    "Ola",
    "Privet",
    "Marhaba",
    "Namaste",
    "Konnichiwa",
    "Ni Hao",
    "Annyeonghaseyo",
    "Yia Sou",
    "Selam",
    "Shalom",
    "Habari",
    "Sveiki",
    "Hei",
    "Hej",
    "Hallo"
];

document.body.addEventListener('click', (event)=>{
    const circle = document.createElement('div');
    circle.className = 'circle';
    circle.textContent = "Hii";
    document.body.appendChild(circle);

    let color = Math.floor(Math.random()*12);
    circle.style.backgroundColor = pastelColors[color];

    let hello = Math.floor(Math.random()*hellos.length);
    circle.innerHTML = hellos[hello];

    const x = event.clientX;
    const y = event.clientY;

    circle.style.left = `${x-25}px`;
    circle.style.top = `${y-25}px`

    setTimeout(()=>{
        circle.remove();
    }, 5000);
});