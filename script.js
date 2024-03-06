$(document).ready(function () {
    var apiKey = '8e3a9ccd65f4f2139ea820af873a57c6';

    $('#searchButton').click(function () {
        var city = $('#cityInput').val();

        if (city) {
            fetchWeather(city);
        } else {
            alert('Please enter a city name.');
        }
    });

    function fetchWeather(city) {
        var apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

        $.get(apiUrl)
            .done(function (data) {
                displayForecast(data);
            })
            .fail(function () {
                alert('Failed to fetch weather data.');
            });
    }

    function displayForecast(data) {
        $('#weatherForecast').empty();

        data.list.forEach(function (forecast) {
            var date = dayjs.unix(forecast.dt).format('YYYY-MM-DD HH:mm');
            var temperature = forecast.main.temp;
            var description = forecast.weather[0].description;
           
            var humidity = response.list[((i + 1) * 8) - 1].main.humidity;
            var iconcode = response.list[((i + 1) * 8) - 1].weather[0].icon;
            var iconurl = "https://openweathermap.org/img/wn/" + iconcode + ".png";
            
            var forecastHtml = `<div>
                <p>Date: ${date}</p>
                <p>Temperature: ${temperature}°C</p>
                <p>Description: ${description}</p>
                <p>

            </div>`;

            $('#weatherForecast').append(forecastHtml);
        });
    }
});