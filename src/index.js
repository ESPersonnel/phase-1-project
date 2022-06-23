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
        console.log(name, icon, description, temp, humidity, speed);
        document.querySelector('.city').innerText = "Weather in " + name;
        document.querySelector('.icon').src = 'https://openweathermap.org/img/wn/'+ icon +'.png';
        document.querySelector('.description').innerText = description;
        document.querySelector('.temp').innerText = temp + "°C";
        document.querySelector('.humidity').innerText = "Humidity: " + humidity + "%";
        document.querySelector('.wind').innerText = "Wind Speed: " + speed + "km/h";
        document.querySelector('.weather').classList.remove("loading");
        document.body.style.backgroundImage = "url('https://source.unsplash.com/random/1920x1080?" + name + ",sky,landscape')";
        document.querySelector('.day-icon').src = 'https://openweathermap.org/img/wn/'+ icon +'@2x.png';
        document.querySelector('.day-description').innerText = description;
        document.querySelector('.day-temp').innerText = temp + "°C";
        document.querySelector('.day-humidity').innerText = "Humidity: " + humidity + "%";
        document.querySelector('.day-wind').innerText = "Wind Speed: " + speed + "km/h";
    },
    search: function(){
        this.fetchWeather(document.querySelector('.search-bar').value)
    }
}

document.querySelector(".search button").addEventListener("click", function() {
    weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function(event) {
    const searchBar = document.querySelector(".search-bar");
    if (event.keyCode === 13) {
        weather.search();
        searchBar.value = "";
    }
})

weather.fetchWeather("Nairobi")