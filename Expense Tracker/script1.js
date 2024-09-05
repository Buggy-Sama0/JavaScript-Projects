

var table=document.getElementById("TABLE");
var title=document.getElementById("input1");
var date=document.getElementById("input2");
var amt=document.getElementById("input3");

let expenseStorage=localStorage.getItem("Expense")
                    ? JSON.parse(localStorage.getItem("Expense"))
                    : [];


// Display existing expenses on page load
expenseStorage.forEach(expense => addExpenses(expense.name, expense.date, expense.amount));
    
function addExpenses(nameOfProduct,expenseDate,amount) {

    var desciptionRow=document.getElementById("emptyBox");
    if (desciptionRow) {
        table.deleteRow(desciptionRow.rowIndex);
    }
  
    var row=table.insertRow(1);
    var cell=row.insertCell();
    cell.innerHTML=nameOfProduct;

    var cell=row.insertCell();
    cell.innerHTML=expenseDate;

    cell=row.insertCell();
    cell.innerHTML="$"+amount;
        
    
    let button=document.createElement("button");
    button.innerHTML="X";
    button.onclick = function() {
        table.deleteRow(row.rowIndex);
        removeExpense(nameOfProduct);
        
    };

    cell=row.insertCell();
    cell.appendChild(button);
}



removeExpense=(nameOfProduct)=>{
    const index=expenseStorage.findIndex(expense => expense.name === nameOfProduct);
    if (index!==-1) {
        expenseStorage.splice(index,3);
        localStorage.setItem("Expense",JSON.stringify(expenseStorage));
    }
    
}


displayExpense=()=>{
    if (title.value!=="" && date.value!=="" && amt.value!=="") {
        const expense={
            name: title.value,
            date: date.value,
            amount: amt.value
        };
        expenseStorage.push(expense);

        localStorage.setItem("Expense",JSON.stringify(expenseStorage));
        addExpenses(expense.name,expense.date,expense.amount);     
    } else {window.alert("Fill all the info");}

    title.value="";
    date.value="";
    amt.value="";

}


