const button = document.querySelector('button');
button.addEventListener('click', ()=>{
    //Read the data

    const firstNum = Number(document.getElementById('first').value);
    const secNum = Number(document.getElementById('second').value);
    const ans = firstNum + secNum;

    const print = document.getElementById('result');
    if(isNaN(firstNum) || isNaN(secNum)){
        print.innerHTML = " Invalid Input"
    }
    else print.innerHTML = "Result: " + ans;
});