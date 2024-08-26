/*
const promiseOne=new Promise(function(resolve,reject) {
    setTimeout(()=>{
        console.log("Aysn is complemete");
        resolve();
    },1000)
})

promiseOne.then(()=>{
    console.log("now consumed");
})

new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Asyn task 2");
        resolve();
    },1000)
}).then(()=>{
    console.log("Asun 2 resolved");
})

const promiseThree=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({username:"buggy",
            email: "buggySama@gmail.com"
        })
    },1000)
})

promiseThree.then((user)=>{
    console.log(user);
})

const primiseFour=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error=false;
        if(!error) {
            resolve({username:"shanks",password:"oneHand"});
        } else {
            reject("Something went Wrong");
        }

    },1000)
})

primiseFour
.then((user)=>{
    console.log(user);
    return user.username;
})
.then((username)=>{
    console.log(username);
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>{
    console.log("Finally promise is either ");
})


const promiseFive=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error=false;
        if(!error) {
            resolve({username:"luffy",password:"stretchy"});
        } else {
            reject("ERROR: JS went wrong");
        }
    },1000)
})

async function consumePromiseFive(){
    try {
        const response= await promiseFive;
        console.log(response);
    } catch(error) {
        console.log(error);
    }
}

consumePromiseFive();

*/

/*
async function getAllUsers() {
    try {
        const response=await fetch("https://jsonplaceholder.typicode.com/users");
        const data= await response.json();
        console.log(data);
    } catch (error) {
        console.log("E: "+error);
    }
}

getAllUsers();*/

/*
fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
    return response.json();
}).then((data)=>{
    console.log(data);
})

const data={
    title:"This is the title",
    body:"this is post body",
    userId:2
}


fetch("https://jsonplaceholder.typicode.com/posts",{
    method:"POST",
    body: JSON.stringify(data),
    headers:{
        "Content-type":"application/json"
    }
}).then((res)=>res.json()).then((data)=>{console.log(data)})
*/


SetItem=()=>{
    let key=document.forms.key;
    let data=document.forms.data;


    if (key=="" || data=="") {
        alert("Input is empty");
    } else {
        localStorage.setItem(key,data);
    }

    ShowAll();
    
}

RemoveItem=()=>{

}



GetItem=()=>{
    let key=document.forms.key.value;
    localStorage.getItem(key);

    if(localStorage.getItem(key)==null) {
        alert("Not Found");
    }
}

Clear=()=>{
    localStorage.clear();
    ShowAll();
}

ClearInput=()=>{
    document.forms.demo.key.value = "";
	document.forms.demo.data.value = "";
}


ShowAll=()=>{
    const items=document.getElementById("list");

    for (let i=0;i<localStorage.length;i++) {
        let key=localStorage.key(i);
        let item=document.createElement("li");
        item.innerHTML=key+" : "+localStorage.getItem(key);
        items.appendChild(item);            
    }    
   
}