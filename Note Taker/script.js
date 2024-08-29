
let numOfNotes=0;
const x=document.getElementById("input");
const notes= document.getElementById("list");

let notesStorage=localStorage.getItem("Notes")
                ? JSON.parse(localStorage.getItem("Notes"))
                : [];


notesStorage.forEach(addNotes);


function addNotes(note) {
    numOfNotes++;
    let msg=document.createElement("li");    
    msg.innerHTML="Note "+numOfNotes+"<br><br>"+note+"<br><br>";

    notes.appendChild(msg);

    let button=document.createElement("button");
    button.innerHTML="Remove";
    button.style.backgroundColor="#0788ee";
    button.style.padding="10px"
    button.style.borderRadius="5px"
    button.style.color="white";
    msg.appendChild(button);

    button.addEventListener("click",function() {
        if(localStorage.getItem("Notes")!==null) {
            msg.remove();
            removeNote(note);            
        }
    })
}

removeNote=(note)=>{
    const index=notesStorage.indexOf(note);
    if (index!==-1) {
        notesStorage.splice(index,1);
        localStorage.setItem("Notes",JSON.stringify(notesStorage));   
    }    
}


SubmitNotes=()=> {
    
    if (x.value!==null) {
        notesStorage.push(x.value);
        localStorage.setItem("Notes",JSON.stringify(notesStorage));
        addNotes(x.value);
    } else {window.alert("Task is empty");}

    x.value="";

}

    


