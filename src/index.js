let weather = {
    'apiKey': '834b35552fcfb0c0071704a4c517816d',
    'apiUrl': function(){
        fetch(`https://api.openweathermap.org/data/3.0/`)
    }.then((response) => response.json())
    .then((data) => console.log(data))
}