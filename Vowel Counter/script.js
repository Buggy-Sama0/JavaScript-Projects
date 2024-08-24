

const arr=["a","e","i","o","u"];


checkVowel=()=> {
    const x=document.getElementById("input").value;
    let vowels=0;

    for (let y of arr) {
        for (let str of x.toLowerCase()) {
            if (str===y) {
                vowels++;
            }
        }
    }   

    
    window.alert("There are "+vowels+ " characters.");
    x="";

    
}



