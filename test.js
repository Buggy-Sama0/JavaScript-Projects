
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


fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log(error);
})