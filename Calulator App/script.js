

const operands=document.getElementsByClassName("operands")
const display=document.getElementById("display-board");


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







