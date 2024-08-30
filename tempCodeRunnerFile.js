let myObj={
    name:"buggy",
    age:49
}

localStorage.setItem("user",JSON.stringify(myObj));

let data=JSON.parse(localStorage.getItem("user"));

console.log(data);