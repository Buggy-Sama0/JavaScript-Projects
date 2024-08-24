
const x=document.getElementById("input");
const list=document.getElementById("list-Task");

submit=()=> {
    if (x.value!=="") {
        let li=document.createElement("li")
        li.innerHTML=x.value;
        list.appendChild(li);

        let button=document.createElement("button");
        button.innerHTML="X";
        li.appendChild(button);

        

    } else {window.alert("Task is empty");}

    x.value="";  
}

list.addEventListener("click", function(e) {
    if (e.target.tagName==="BUTTON") {
        e.target.parentElement.remove();
    }
});
 