var apiKey = "&cnt=5&appid=1c8cb45144f4f62ad69f578a7c3ac3cf";
var query1 = "https://api.openweathermap.org/data/2.5/weather?q=";
var query2 = "https://api.openweathermap.org/data/2.5/onecall?lat=";
var exclude = "&exclude=minutely,hourly,alerts&units=imperial";


var cities = document.getElementById('cities')
var searchButton = document.getElementById('search');

function renderWeather() {
    
}
// console.log(renderWeather);

function renderCity() {
    var citySearch = document.getElementById('citySearch').value;
    document.getElementById('city').innerText = citySearch + moment().format(' MM/DD/YY');
    console.log(citySearch);
    var forecastEl = document.getElementById('forecast');
        forecastEl.innerHTML = '';

    fetch(query1 + citySearch + apiKey)
    .then(function(response){
        return response.json();

    })
    .then(function(data) {
        console.log(data);
        var latitude = data.coord.lat;
        var longitude = data.coord.lon;
        fetch(query2 + latitude + '&lon=' + longitude + exclude + apiKey)
        .then(function(response){
            return response.json();
    })
    .then(function(data) {
        console.log(data);
        let forecastEl = document.getElementById("forecast");
        let rowEl = document.createElement('div');

    rowEl.classList = 'row';
    forecastEl.appendChild(rowEl);


        for (i=1;i<6;i++) {

            var temp = data.daily[i].temp.day;
            var wind = data.daily[i].wind_speed;
            var humidity = data.daily[i].humidity;
            var uvIndex = data.daily[i].uvi;
            var iconCode = data.daily[i].weather[0].icon;
            var iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png"; 
            var cardEl = document.createElement("div");
            var tempEl = document.createElement("div");
            var windEl = document.createElement("div");
            var humidityEl = document.createElement("div");
            var dateEl = document.createElement("div");
            var iconEl = document.createElement("div");
            var forecastContainerEl = document.createElement("div");
    
            cardEl.classList = "col-8 card";
            tempEl.classList = "mainStats";
            windEl.classList = "mainStats";
            humidityEl.classList = "mainStats";
            dateEl.classList = "mainStats";
            iconEl.classList = "mainStats";

            
            
            tempEl.textContent = "Temp: " + temp;
            windEl.textContent = "Wind: " + wind;
            humidityEl.textContent = "Humidity: " + humidity;
            dateEl.textContent = "Date: " + moment().add(i, 'days').format('MM/DD/YY');
            iconEl.textContent = "Icon: " + $('#wIcon').attr('src', iconUrl);
            
            var weatherId = data.daily[i].weather[0].id;
            var iconEl = document.createElement("span");
            
    
            if (weatherId > 800) {
                iconEl.innerHTML ='<i class="fas fa-cloud-sun fa-3x"></i>';
    
            } else if (weatherId === 800) {
                iconEl.innerHTML ='<i class="fas fa-sun fa-3x"></i>';
            } else if (weatherId > 700) {
                iconEl.innerHTML ='<i class="fas fa-smog"></i>';
            } else if (weatherId >= 600) {
                iconEl.innerHTML ='<i class="fas fa-snowflake"></i>';
            } else if (weatherId >= 500) {
                iconEl.innerHTML ='<i class="fas fa-cloud-showers-heavy"></i>';
            } else if (weatherId >= 300) {
                iconEl.innerHTML ='<i class="fas fa-cloud-rain"></i>';
            } else {
                iconEl.innerHTML ='<i class="fas fa-poo-storm"></i>';
            }
    
            forecastContainerEl.appendChild(iconEl);
    
            
            rowEl.appendChild(cardEl);
            cardEl.appendChild(tempEl);
            cardEl.appendChild(windEl);
            cardEl.appendChild(humidityEl);
            cardEl.appendChild(dateEl);
            cardEl.appendChild(iconEl);
    
        }
        
        document.getElementById('temperature').textContent = 'Temp: ' + temp + " F";
        document.getElementById('wind').textContent = 'Wind: ' + wind + ' MPH';
        document.getElementById('humidity').textContent = 'Humidity: ' + humidity + " %";
        document.getElementById('uvIndex').textContent = 'UV Index: ' + uvIndex;
        
    });
    renderWeather();
});

var savedCities = document.createElement('button');
savedCities.setAttribute('id', citySearch);
savedCities.className = 'search';
savedCities.textContent = citySearch;
cities.appendChild(savedCities);
document.getElementById('citySearch').value = '';
}

searchButton.addEventListener("click", renderCity);