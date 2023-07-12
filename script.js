let apiKey = 'd54fd4c977cbc6eaf2350839aea99eb3';
let input = document.getElementById('inputCity');
let btn = document.getElementById('btn');
let icon = document.querySelector('.icon');
let weatherArea = document.querySelector('.weatherArea'); 
let temp = document.querySelector('.temperature'); 
let description = document.querySelector('.description');

btn.addEventListener('click', () => {
    let city = input.value;
    getWeather(city);
})

function getWeather(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);
        
        let iconCode = data.weather[0].icon;
        icon.innerHTML=`<img src="http://openweathermap.org/img/wn/${iconCode}.png" alt="Weather Icon"/>`

        let cityName = data.name;
        let countryName = data.sys.country;
        weatherArea.innerHTML = `${cityName}, ${countryName}`;

        let cityTemp = data.main.temp - 273.15;
        temp.innerHTML = `${cityTemp.toFixed(2)}&degC`;               //  C = K - 273.15

        let cityDescription = data.weather[0].description;
        description.innerHTML = `${cityDescription}`;
    })
}