let wind = document.querySelector("#wind");
let rain = document.querySelector("#rain");
let humitity = document.querySelector("#humidity");
let btn = document.querySelector("#btn");
let search = document.querySelector("#search-info");
let show = document.querySelector("#showCity");

const london = "https://api.weatherapi.com/v1/current.json?key=ecc61101ce8b41cd84c145623261810&q=London&aqi=no";
const ktm = "https://api.weatherapi.com/v1/current.json?key=ecc61101ce8b41cd84c145623261810&q=Kathmandu&aqi=no";
const delhi = "https://api.weatherapi.com/v1/current.json?key=ecc61101ce8b41cd84c145623261810&q=New+delhi&aqi=no";
const dhaka = "https://api.weatherapi.com/v1/current.json?key=ecc61101ce8b41cd84c145623261810&q=Dhaka&aqi=no";

btn.addEventListener("click",() => {
    let city = search.value.toLowerCase().trim();
    if(city == ""){
        alert("Select a city first!!");
    }else{
        console.log(city);
        show.innerText = city;
       try{
        fetch(city)
        .then( (response) =>{
            return response.json();
        })
        .then((value) =>{
            console.log(value)
        })
    } catch(err){
        console.log("error");
    }
}
    })




