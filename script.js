let wind = document.querySelector("#wind");
let con = document.querySelector("#condition");
let rain = document.querySelector("#rainChance");
let city = document.querySelector("#search-info");

let show = document.querySelector("#showCity");


city.addEventListener("input", () => {

    show.innerText = city.value;
    async function getInfo() {
        try {
            const data = await fetch(`https://api.weatherapi.com/v1/current.json?key=ecc61101ce8b41cd84c145623261810&q=${city.value}&aqi=no`);
            const weather = await data.json();
            return weather;
        } catch (err) {
           alert("Opps!! something went wrong")
        }
    }
    getInfo()
        .then((val) => {
            wind.innerText = `${val.current.wind_kph} km/h`;
            con.innerText = `${val.current.condition.text}`;
            rain.innerText = `${val.current.will_it_rain}%`;
        })
})


