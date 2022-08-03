function displayWeatherForecast(city) {
  const weatherForecastEndpoint = getForecastWeatherEndpoint(city);

  fetch(weatherForecastEndpoint)
    .then((response) => response.json())
    .then((data) => {
      const { list } = data;
      const weatherForecast = document.querySelector(".weather-forecast");
      weatherForecast.innerHTML = ``;
      list.forEach((forecast) => {
        const { dt, main, weather } = forecast;
        const hour = getHours(dt);
        const day = getDay(dt);
        const iconUrl = getIconUrl(weather[0].icon);
        const temperature = Math.round(main.temp);
        const realFeel = Math.round(main.feels_like);
        const weatherDescription = weather[0].description;
        weatherForecast.innerHTML += `
        <div class="d-flex justify-content-between">
            <p>${day}, ${hour}</p>
            <img src="${iconUrl}" />
            <p>${temperature}°C</p>
            <p>${weatherDescription}</p>
            <p>Real Feel: ${realFeel}°C</p>
        </div>`;
      });
    });
}
