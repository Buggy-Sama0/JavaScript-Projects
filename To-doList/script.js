
const input=document.getElementById("input");
const list=document.getElementById("list-Task");
let itemArray=localStorage.getItem("items")?
JSON.parse(localStorage.getItem("items")):[];

itemArray.forEach(addTask);

function addTask(text) {
    let li=document.createElement("li");
    li.innerHTML=text;     
    list.appendChild(li);

    
    let button=document.createElement("button");
    button.innerHTML="X";
    li.appendChild(button);

    button.onclick=function() {
        li.remove();
    }


}


submit=()=> {
    if (input.value!=="") {
        itemArray.push(input.value);
        localStorage.setItem("items",JSON.stringify(itemArray));
        addTask(input.value);

    } else {window.alert("Task is empty");}

    input.value="";  
}

clearAll=()=>{
    localStorage.clear();
    list.innerHTML="";
    itemArray=[];

}

/*

list.addEventListener("click", function(e) {
    if (e.target.tagName==="BUTTON") {
        localStorage.clear();
        e.target.parentElement.remove();
    }
});
 */