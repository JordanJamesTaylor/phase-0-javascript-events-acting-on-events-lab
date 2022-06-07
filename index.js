// Your code here

document.addEventListener("keydown", function(event){
    console.log(event)
});

document.addEventListener("keydown", function(e){
    if (e.key === "ArrowLeft"){
        moveDodgerLeft();
    }else if(e.key === "ArrowRight"){
        moveDodgerRight();
    }
});

function moveDodgerLeft(){
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    
    if(left > 0){
        dodger.style.left = `${left - 1}px`;
    };
};                 

function moveDodgerRight(){
    const rightNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(rightNumbers, 10);

    if(left < 360){
        dodger.style.left = `${left + 1}px`;
    };
};