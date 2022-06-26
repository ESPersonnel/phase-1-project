# Phase 1 Project: Skye Weather


    Author: Wycliffe Ndiba

    Languages: HTML, CSS & Javascript

## Description

A web application that displays the current weather for a user-defined location.

This application uses the OpenWeatherMap API to retrieve the current weather.

## Setup

### Live Link:
[Skye Weather](https://skye-weather-espersonnel.vercel.app/)

### Setup
Install Vercel CLI:

    npm install -g vercel

Run Vercel CLI:

    vercel dev

## Deliverables

Some of the deliverables of this project are:

✅ Display the current weather of a city.

✅ The user can input a city name and the application will display the current weather.

✅ Some of the information displayed is:

    ✔ The current temperature.
    ✔ The current weather condition.
    ✔ The current humidity.
    ✔ The current wind speed.
    ✔ The day's maximum/minimum temperature.
    ... The day's date.

### Bonus Deliverables

- The application should show a loading indicator while the weather is being retrieved.
- The application should be able to display an error message if the user enters an invalid city name.
- The application should display weather data for the next 5 days.
- The application should be able to display the current weather for multiple cities at the same time.
- The application should show weather conditions that happened in the past.


## Progress

- The application can search for a city in the search bar.
- The user can either use the Enter key or the search button provided.
- The application can fetch data from the openweathermap API. (Free version)
- The application fetches new background images from Unsplash API.
- The application displays:
    - the city's name
    - temperature in °C
    - an icon describing the condition of the weather
    - the description of the weather (cloudy, sunny)
    - the day's humidity
    - the wind speed.
- Currently working on getting the date and time to function.

## Screenshots

### GIF of the application

<img src="./src/gifs/Project-Preview.gif" width="600px">

Screenshot showing the features that currently work.

<img src="./src/images/screenshots/day-current-forecast-1.png" width="600px">


## Known Bugs
> Bug 1

The Date and Time feature is currently not working.

The application does not display the current time for a city that is searched.

It instead, displays the device's current time.

> Bug 2

The application is not fully responsive to small screens.

## Rollback
- Rolling back the 5 day forecast till I can understand the logic behind it.

<img src="./src/images/screenshots/day-current-future-forecast.png" width="600px">


## License
- [License](./LICENSE)

