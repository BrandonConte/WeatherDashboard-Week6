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

    for (i=0;i<5;i++) {
        var cardEl = document.createElement("div");
        var tempEl = document.createElement("div");
        var windEl = document.createElement("div");
        var humidityEl = document.createElement("div");
        var dateEl = document.createElement("div");
        var iconEl = document.createElement("div");

        cardEl.classList = "col-2 card";
        tempEl.classList = "key";
        windEl.classList = "key";
        humidityEl.classList = "key";
        dateEl.classList = "key";
        iconEl.classList = "key";
        
        tempEl.textContent = "Temp: ";
        windEl.textContent = "Wind: ";
        humidityEl.textContent = "Humidity: ";
        dateEl.textContent = "Date: ";
        iconEl.textContent = "Icon: ";

        rowEl.appendChild(cardEl);
        cardEl.appendChild(tempEl);
        cardEl.appendChild(windEl);
        cardEl.appendChild(humidityEl);
        cardEl.appendChild(dateEl);
        cardEl.appendChild(iconEl);

    }
}
console.log(renderWeather);