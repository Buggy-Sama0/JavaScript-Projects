
getText("text.txt");

async function getText(file) {
    let myObj=await fetch(file);
    let myText=await myObj.text();

    document.getElementById("demo").innerHTML=myText;
    

}