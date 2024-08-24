




const image=["bird.jpg","cat.jpg","dog.jpg"];
const cards=document.getElementsByTagName("img");
let selectedImages=[];
let matchedPairs=0;
let failedAttempts=0


function flipCard() {

    if (this.src.includes("jpg")) return; // Prevent flipping already flipped cards
    let random=Math.floor(Math.random()*(image.length));
    this.src=image[random];
    this.style.backgroundColor="white";
    this.style.border="none";
    selectedImages.push(this);

    if (selectedImages.length==2) {
        checkMatch();
    }

}

function checkMatch() {
    if (selectedImages[0].src===selectedImages[1].src) {
        matchedPairs++;
        selectedImages=[];
        document.getElementById("score").innerHTML=""+matchedPairs;

    } else {
        failedAttempts++
        selectedImages=[];
        document.getElementById("attempt").innerHTML=""+failedAttempts; 
              
    }

    checkReset();
}

function Reset() {
    setTimeout(() => {
        for (let card of cards){
            card.src = ""; // Reset image
            card.style.backgroundColor = "green";
            card.style.border="green";

            // setting all the stats to reset

            matchedPairs=0;
            failedAttempts=0;

            document.getElementById("score").innerHTML=""+matchedPairs;
            document.getElementById("attempt").innerHTML=""+failedAttempts; 



        };
    }, 2000); 
}

function checkReset() {
    if (matchedPairs==3 || failedAttempts==3 || failedAttempts+matchedPairs==3) {
        Reset();
    } 
}


for (let card of cards) {
   
    card.addEventListener("click",flipCard);

}











