let weather = {
    apiKey: '834b35552fcfb0c0071704a4c517816d',
    fetchWeather: function(city){
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apiKey}`
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data))
    },
    displayWeather: function(data){
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        const { time } = data.dt;
        console.log(name, icon, description, temp, humidity, speed, time);
        document.querySelector('.city').innerText = "Weather in " + name;
        document.querySelector('.icon').src = 'https://openweathermap.org/img/wn/'+ icon +'@2x.png';
        document.querySelector('.description').innerText = description;
        document.querySelector('.temp').innerText = Math.round(temp) + "°C";
        document.querySelector('.humidity').innerText = "Humidity: " + humidity + "%";
        document.querySelector('.wind').innerText = "Wind Speed: " + Math.round(speed) + "km/h";
        document.querySelector('.weather').classList.remove("loading");
        document.querySelector('.time').innerText = new Date().toLocaleTimeString();
        document.querySelector('.date').innerText = new Date().toLocaleDateString();
        // Converting epoch time to human readable time
        // document.querySelector('.time').innerText = "Time: " + new Date(time).toLocaleTimeString();
        // document.querySelector('.date').innerText = "Date: " + new Date(time).toLocaleDateString();
        document.body.style.backgroundImage = "url('https://source.unsplash.com/random/1920x1080?" + name + ",sky,landscape')";
    },
    search: function(){
        this.fetchWeather(document.querySelector('.search-bar').value)
    }
}

// Event Listener for search button
document.querySelector(".search button").addEventListener("click", function() {
    weather.search();
});

// Function for the enter key to search
document.querySelector(".search-bar").addEventListener("keyup", function(event) {
    const searchBar = document.querySelector(".search-bar");
    if (event.keyCode === 13) {
        weather.search();
        // Clear search bar text
        searchBar.value = "";
    }
})

// Default search
weather.fetchWeather("Nairobi")

// Five Day Forecast API call
// https://api.openweathermap.org/data/2.5/forecast?q=Nairobi&units=metric&appid=834b35552fcfb0c0071704a4c517816d

let forecast = {
    apiKey: '834b35552fcfb0c0071704a4c517816d',
    fetchForecast: function(city){
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${weather.apiKey}`)
        .then((response) => response.json())
        .then((data) => this.displayForecast(data))
    },
    displayForecast: function(data){
        const { name } = data;
        const { icon, description } = data.weather;
        const { temp, humidity, temp_min, temp_max } = data.main;
        const { speed, deg } = data.wind;
        const { time } = data.dt;
        console.log(name, icon, description, temp, humidity, temp_min, temp_max, speed, deg, time);
        document.querySelector('.fore-place').innerText = name;
        document.querySelector('.fore-temp').innerText = Math.round(temp) + "°C";
        document.querySelector('.fore-icon').src = 'https://openweathermap.org/img/wn/'+ icon +'@2x.png';
        document.querySelector('.fore-description').innerText = description;
        document.querySelector('.fore-humidity').innerText = "Humidity: " + humidity + "%";
        document.querySelector('.fore-wind').innerText = "Wind Speed: " + speed + "km/h";
        document.querySelector('.fore-wind_dir').innerText = "Wind Direction: " + deg + "°";
        document.querySelector('.fore-temp_min').innerText = "Min Temp: " + Math.round(temp_min) + "°C";
        document.querySelector('.fore-temp_max').innerText = "Max Temp: " + Math.round(temp_max) + "°C";
        document.querySelector('.fore-time').innerText = new Date().toLocaleTimeString();
        document.querySelector('.fore-date').innerText = new Date().toLocaleDateString('en-UK', {weekday: 'long'});
    }
}

forecast.fetchForecast("Nairobi")

