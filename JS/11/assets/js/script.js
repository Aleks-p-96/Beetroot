'use strict'

document.addEventListener('DOMContentLoaded', () => {
    let cities = document.getElementsByClassName('temperature');
    
    for (let city of cities) {
        if ((getCookie(`${city.id}`))) {
            insertWeatherData(city);
        } else {
            setCookie(city,city.dataset.lat,city.dataset.long);
        }
    }
})



function insertWeatherData (city) {
    city.innerText = `${getCookie(city.id)}°C `;
}

function setCookie (city,lat,long) {

    axios(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=49915ee986b2e565633ef5115e7b62c1`)
        .then (res => {
            let temp = (res.data.main.temp - 273.15).toFixed(2);
            document.cookie = `${city.id} = ${temp}; max-age = 7200`;
            insertWeatherData(city);
        })
}

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}