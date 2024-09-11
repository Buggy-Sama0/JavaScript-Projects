

const operands=document.getElementsByClassName("operands")
const display=document.getElementById("display-board");
const restart=document.getElementById("restartButton");
const operators=document.getElementsByClassName("operator");
const output=document.getElementById("outputButton");
const backspace=document.getElementById("deleteButton");

let operandValue=[];
let selectedOperator = null;

// The event for displaying operands
for(let operand of operands) {
    operand.addEventListener("click",function() {
        let para=document.createElement("p");
        para.innerHTML=this.innerHTML;
        operandValue.push(Number(this.innerHTML));
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
        selectedOperator=this.innerHTML;
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

// The event for clearing elaement
backspace.addEventListener("click",function() {
    display.removeChild(display.lastElementChild);
    operandValue.pop();
})




// Computing arithmetic expressions
compute=()=>{
    if (operandValue.length<2) return;

    let result;

    switch(selectedOperator) {
        case "+":
            result=0;
            for (let i=0;i<operandValue.length;i++) {
                result+=operandValue[i];
            }
            break;

        case "*":
            result=1;
            for (let i=0;i<operandValue.length;i++) {
                result*=operandValue[i];
            }
            break;
        case "-":
            result=operandValue[0];
            for (let i=1;i<operandValue.length;i++) {
                result-=operandValue[i];                
            }
            break;

        case "/":
            result=operandValue[0];
            for (let i=1;i<operandValue.length;i++) {
                result/=operandValue[i];
            }                
            break;

        default:
            break;
    }
    operandValue=[];
    return result;
}


// Displaying output
output.addEventListener("click",function() {

        if (operandValue!==null && selectedOperator!==null) {
            const result=compute();
            display.textContent="";
            let para=document.createElement("p");
            para.innerHTML="<br>"+result;
            para.style.color="white";
            para.style.fontSize="1.9em";
            para.style.fontWeight="bolder";
            display.appendChild(para); 
        }
  
    }
)









