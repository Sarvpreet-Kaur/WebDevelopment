function timing(){
    const timer = document.getElementById(`root`);

    const now = new Date();
    const ist = now.toLocaleTimeString();
    timer.innerHTML = ist;
}

setInterval(timing, 1000);

const timer = document.getElementById(`root`);
timer.style.display = "flex";
timer.style.justifyContent = " center";
timer.style.alignItems = "center";
timer.style.height = "100vh";
timer.style.fontSize = "100px"
