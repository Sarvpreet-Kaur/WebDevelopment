document.getElementById('searchBtn').addEventListener('click', () => {
    const place = document.getElementById('cityInput').value.trim();

    // Reset error display
    document.getElementById('error').style.display = "none";

    if (place === "") {
    document.getElementById('error').style.display = "block";
    document.getElementById('error').innerText = "⚠️ Please enter a city name.";
    document.getElementById('weatherInfo').style.display = "none";
    return;
    }

    function updateWeather(data) {
    document.getElementById('weatherInfo').style.display = "block";

    document.getElementById("cityName").innerText =
        data.location.name + ", " + data.location.country;
    document.getElementById("temperature").innerText =
        data.current.temp_c + "°C";
    document.getElementById("description").innerText =
        data.current.condition.text;
    document.getElementById("wind").innerText =
        "Wind: " + data.current.wind_kph + " km/h";
    document.getElementById("humidity").innerText =
        "Humidity: " + data.current.humidity + "%";
    document.getElementById("feelsLike").innerText =
        "Feels like: " + data.current.feelslike_c + "°C";
    }

    fetch(`https://api.weatherapi.com/v1/current.json?key=018ad09cd13c42cd806111743250709&q=${place}&aqi=yes`)
    .then(response => {
        if (!response.ok) throw new Error("Invalid response");
        return response.json();
    })
    .then(data => {
        if (data.error) {
        document.getElementById('error').style.display = "block";
        document.getElementById('error').innerText = "❌ " + data.error.message;
        document.getElementById('weatherInfo').style.display = "none";
        } else {
        document.getElementById('error').style.display = "none";
        updateWeather(data);
        }
    })
    .catch(err => {
        console.error(err);
        document.getElementById('error').style.display = "block";
        document.getElementById('error').innerText = "❌ Unable to fetch weather data.";
        document.getElementById('weatherInfo').style.display = "none";
    });
});

