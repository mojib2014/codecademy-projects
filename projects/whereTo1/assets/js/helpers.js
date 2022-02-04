// Weather helpers
const createWeatherHtml = (weather) => {
  return `<h2 class="date">${
    weekDays[new Date().getDay()]
  } <span>${new Date().toLocaleDateString()}</span></h2>
    <img class="weather-icon" src="https://openweathermap.org/img/wn/${
      weather.weather[0].icon
    }@2x.png">
        <p>Temperature: ${kelvinToFahrenheit(weather.main.temp)}&deg;F</p>
        <p>Condition: ${weather.weather[0].description}</p>
        <p>Feels Like: ${weather.main.feels_like}</p>
        <p>Humidity: ${weather.main.humidity}</p>
        <p>Pressure: ${weather.main.pressure}</p>
        <h2>Wind</h2>
        <p>Degree: ${weather.wind.deg}&deg;</p>
        <p>Speed: ${meterToMiles(weather.wind.speed)} M/S</p>
        `;
};

// Converting kelvin to fahrenhieht
const kelvinToFahrenheit = (k) => (((k - 273.15) * 9) / 5 + 32).toFixed(0);

// Converting meters to miles
const meterToMiles = (meter) => (meter * 0.00062137).toFixed(2);
// Four Square (Venues) helpers
const createVenueHtml = (venues) => {
  items = venues.response.groups[0].items;
  const result = items.map((item) => {
    const venue = item.venue.categories[0];
    const location = item.venue.location;
    const { prefix, suffix } = venue.icon;
    const { name } = venue;
    const { address, city, country } = location;
    return `
        <div class="card">
            <h2>Name: ${name}</h2>
            <img alt="${name} icon" src="${prefix}${suffix}">
            <address>Address: <a href="https://maps.google.com/?q=${address},${city},${country}">${address}, ${city}, ${country}</a></address>
        </div>
    `;
  });
  return result;
};

// After 7 Seconds hide the alert(error message);
setTimeout(function () {
  $alert.fadeOut();
}, 7000);
