
let numOfNotes=0;

addNote=()=> {
    const x=document.getElementById("input");
    const notes= document.getElementById("list");

    numOfNotes++;

    let msg=document.createElement("li");    
    msg.innerHTML="Note "+numOfNotes+"<br><br>"+x.value+"<br><br>";

    notes.appendChild(msg);

    

    let button=document.createElement("button");
    button.innerHTML="View detail";
    button.style.backgroundColor="#0788ee";
    button.style.padding="10px"
    button.style.borderRadius="5px"
    button.style.color="white";
    msg.appendChild(button);

    x.value="";

}