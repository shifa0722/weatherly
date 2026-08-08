/* ================================
   WEATHER DATA
================================ */

var weatherData = {

    Mumbai: {
        temperature: 29,
        condition: "Partly Cloudy",
        icon: "🌤️",
        humidity: "72%",
        wind: "14 km/h",
        feels: "31°C",
        rain: "35%"
    },

    Pune: {
        temperature: 27,
        condition: "Cloudy",
        icon: "☁️",
        humidity: "68%",
        wind: "11 km/h",
        feels: "28°C",
        rain: "40%"
    },

    Delhi: {
        temperature: 34,
        condition: "Sunny",
        icon: "☀️",
        humidity: "42%",
        wind: "10 km/h",
        feels: "36°C",
        rain: "10%"
    },

    Bengaluru: {
        temperature: 25,
        condition: "Rainy",
        icon: "🌧️",
        humidity: "79%",
        wind: "16 km/h",
        feels: "26°C",
        rain: "65%"
    },

    Nashik: {
        temperature: 26,
        condition: "Light Rain",
        icon: "🌦️",
        humidity: "70%",
        wind: "12 km/h",
        feels: "27°C",
        rain: "55%"
    }

};



var checkButton = document.getElementById("checkWeather");

if (checkButton) {

    checkButton.addEventListener("click", function () {

        var city = document.getElementById("citySelect").value;

        var data = weatherData[city];

        document.getElementById("cityName").innerHTML = city;
        document.getElementById("temperature").innerHTML = data.temperature;
        document.getElementById("condition").innerHTML = data.condition;
        document.getElementById("weatherIcon").innerHTML = data.icon;

        document.getElementById("humidity").innerHTML = data.humidity;
        document.getElementById("wind").innerHTML = data.wind;
        document.getElementById("feels").innerHTML = data.feels;
        document.getElementById("rain").innerHTML = data.rain;

    });

}



var forecastData = [

    {
        day: "Monday",
        date: "10 Aug",
        icon: "🌦️",
        temperature: "27°C",
        condition: "Light Rain"
    },

    {
        day: "Tuesday",
        date: "11 Aug",
        icon: "🌧️",
        temperature: "26°C",
        condition: "Rainy"
    },

    {
        day: "Wednesday",
        date: "12 Aug",
        icon: "☁️",
        temperature: "28°C",
        condition: "Cloudy"
    },

    {
        day: "Thursday",
        date: "13 Aug",
        icon: "🌤️",
        temperature: "29°C",
        condition: "Partly Cloudy"
    },

    {
        day: "Friday",
        date: "14 Aug",
        icon: "☀️",
        temperature: "30°C",
        condition: "Sunny"
    },

    {
        day: "Saturday",
        date: "15 Aug",
        icon: "🌦️",
        temperature: "28°C",
        condition: "Light Rain"
    },

    {
        day: "Sunday",
        date: "16 Aug",
        icon: "☁️",
        temperature: "27°C",
        condition: "Cloudy"
    }

];




var forecastGrid = document.getElementById("forecastGrid");

if (forecastGrid) {

    for (var i = 0; i < forecastData.length; i++) {

        var forecast = forecastData[i];

        forecastGrid.innerHTML +=

            '<div class="forecast-card">' +

            '<div class="forecast-day">' +
            forecast.day +
            '</div>' +

            '<div class="forecast-date">' +
            forecast.date +
            '</div>' +

            '<div class="forecast-icon">' +
            forecast.icon +
            '</div>' +

            '<div class="forecast-temperature">' +
            forecast.temperature +
            '</div>' +

            '<p>' +
            forecast.condition +
            '</p>' +

            '</div>';
    }

}




var tips = [

    "Always check the weather before leaving home.",

    "Carry an umbrella when rain is expected.",

    "Drink enough water during hot weather.",

    "Wear comfortable clothes on warm days.",

    "Keep electronic devices protected during rain.",

    "Avoid outdoor activities during severe storms."

];


var tipButton = document.getElementById("tipButton");

if (tipButton) {

    tipButton.addEventListener("click", function () {

        var randomNumber =
            Math.floor(Math.random() * tips.length);

        document.getElementById("randomTip").innerHTML =
            tips[randomNumber];

    });

}




var contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        var name =
            document.getElementById("userName").value;

        var email =
            document.getElementById("userEmail").value;

        var message =
            document.getElementById("userMessage").value;


        if (name == "" || email == "" || message == "") {

            document.getElementById("formMessage").innerHTML =
                "Please fill in all the fields.";

        }

        else {

            document.getElementById("formMessage").innerHTML =
                "Thank you, " + name + "! Your message has been received.";

            document.getElementById("contactForm").reset();

        }

    });

}