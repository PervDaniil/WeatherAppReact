const JSON = require('../apikey.json');
const APIKEY = JSON.APIKEY;



export async function getLatAndLonByCity(city) {
    const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${APIKEY}`);
    const data = await response.json();
    return data;
}


export async function getWeatherForecast(city) {
    const cityData = await getLatAndLonByCity(city);


    if (cityData) {
        const lat = cityData[0].lat;
        const lon = cityData[0].lon;

        const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=metric`);
        const data = await response.json();
        return data;
    }
}