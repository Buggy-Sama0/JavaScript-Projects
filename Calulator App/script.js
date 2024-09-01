

const operands=document.getElementsByClassName("operands")
const display=document.getElementById("display-board");
const restart=document.getElementById("restartButton");
const operators=document.getElementsByClassName("operator");



// The event for displaying operands
for(let operand of operands) {
    operand.addEventListener("click",function() {
        let para=document.createElement("p");
        para.innerHTML=this.innerHTML;
        para.style.color="white";
        para.style.fontSize="1.9em";
        para.style.fontWeight="bolder";
  
        

        display.appendChild(para);
    })
}

// The event for displaying operators
for(let operator of operators) {
    operator.addEventListener("click",function() {
        let para=document.createElement("p");
        para.innerHTML=this.innerHTML;
        para.style.color="rgb(193, 30, 30)";
        para.style.fontSize="1.9em";
        para.style.fontWeight="bolder";
  
        display.appendChild(para);
    })
}


// The event for clearing all the data from display
restart.addEventListener("click",function() {
    display.textContent="";
})




