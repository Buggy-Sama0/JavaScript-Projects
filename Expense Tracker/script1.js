





addExpense=()=> {


    var table=document.getElementById("TABLE");
    var title=document.getElementById("input1");
    var date=document.getElementById("input2");
    var amt=document.getElementById("input3");

    var desciptionRow=document.getElementById("emptyBox");
    if (desciptionRow) {
        table.deleteRow(desciptionRow.rowIndex);
    }


    
    var row=table.insertRow(1);
    var cell=row.insertCell();
    cell.innerHTML=title.value;

    cell=row.insertCell();
    cell.innerHTML=date.value;
        
    cell=row.insertCell();
    cell.innerHTML="$"+amt.value;

    
    let button=document.createElement("button");
    button.innerHTML="X";
    button.onclick = function() {
        table.deleteRow(row.rowIndex);
    };

    cell=row.insertCell();
    cell.appendChild(button);
    

        
    title.value="";
    date.value="";
    amt.value="";


}


