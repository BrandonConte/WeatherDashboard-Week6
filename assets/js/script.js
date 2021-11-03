var apiKey = "1c8cb45144f4f62ad69f578a7c3ac3cf"
var query1 = "https://api.openweathermap.org/data/2.5/weather?q=";
var query2 = "https://api.openweathermap.org/data/2.5/onecall?lat=";
var exclude = "&exclude=minutely,hourly,alerts&units=imperial";

var cities = document.getElementById('cities')
var searchButton = document.getElementById('search');

function renderWeather() {
    let forecastEl = document.getElementById("forecast");
    let rowEl = document.createElement('div');

    rowEl.classList = 'row';
    forecastEl.appendChild(rowEl);

}