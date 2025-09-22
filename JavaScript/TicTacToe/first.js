let turn = '0';
const board = document.querySelector('.board');
const imgLeft = document.getElementById('tic1');
const imgRight = document.getElementById('tic2');

let winner = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
]

let b_array = new Array(9).fill('E'); 

function winning(b_array){
    for(let [index0, index1, index2] of winner){
        if(b_array[index0]!='E' && b_array[index0]===b_array[index1] && b_array[index1]===b_array[index2]){
            return true;
        }
    }
    return false;
}

const setImageSizes = (turn) => {
    if (turn === '0') {
        // Expand left image, shrink right image
        imgLeft.style.width = "350px";
        imgLeft.style.height = "550px";
        imgRight.style.width = "500px";
        imgRight.style.height = "500px";

    } else if (turn === 'X') {
        // Expand right image, shrink left image
        imgLeft.style.width = "300px";
        imgLeft.style.height = "500px";
        imgRight.style.width = "550px";
        imgRight.style.height = "550px";
    }
};
const win = document.getElementById('Winner');
let total = 0;
const result = (event)=>{
    const ele = event.target;
    if(b_array[ele.id] === 'E'){
        total++;
        if(turn === '0'){
            ele.innerHTML = '0';
            b_array[ele.id] = '0';
            turn = 'X';

            if(winning(b_array)){
                board.removeEventListener('click', result);
                win.innerHTML = "Winner : 0";
                return;
            }

            setImageSizes('X');
        }
        
        else if(turn === 'X'){
            ele.innerHTML = 'X';
            b_array[ele.id] = 'X';
            turn = '0'; 

            

            if(winning(b_array)){
                
                board.removeEventListener('click', result);
                win.innerHTML = "Winner : X";
                return;
            }

            setImageSizes('0');
        }  
    }
    if(total === 9){
        total = 0;
        win.innerHTML = "DRAW";

    }
}


board.addEventListener('click', result);

const reset = document.getElementById('reset');
reset.addEventListener('click', ()=>{
    total = 0;
    turn = '0';
    win.innerHTML = "";

    const cell = document.getElementsByClassName('cell');
    Array.from(cell).forEach(element => {
        element.innerHTML = "";
        
    });
    b_array = new Array(9).fill('E');
    board.addEventListener('click', result);

    imgLeft.style.width = "300px";
    imgLeft.style.height = "500px";
    imgRight.style.width = "500px";
    imgRight.style.height = "500px";

});

