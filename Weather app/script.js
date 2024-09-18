
const form=document.querySelector("form");
const msg=document.getElementById("message");
const input=document.getElementById("CityInput");
const list=document.getElementById("cityList");

form.addEventListener("submit",e=> {
    e.preventDefault();
    const inputVal=input.value;
    getData();

})

const apiKey = "31df6234a119c468a67a3d56fe8bd3ff";
const inputVal = input.value;

async function getData() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;

    try {
        const response=await fetch(url);
        const data=await response.json();
        // do stuff with the data
        const {main, name, sys,weather}=data;
        const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0].icon}.svg`;
        const li=document.createElement("li");
        li.classList.add("city");

        const markup = `
        <h2 class="city-name" data-name="${name},${sys.country}">
          <span>${name}</span>
          <sup>${sys.country}</sup>
        </h2>
        <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
        <figure>
          <img class="city-icon" src="${icon}" alt="${weather[0].description}">
          <figcaption>${weather[0].description}</figcaption>
        </figure>`;
        li.innerHTML=markup;
        list.appendChild(li);
    
    }
    catch(error) {
        msg.textContent="Please search for a valid city";
    }    

    msg.textContent="";
    form.reset();
    input.focus();
}









