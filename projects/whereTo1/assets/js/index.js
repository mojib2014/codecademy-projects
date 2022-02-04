const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// Selecting DOM Elements
const $weatherContainer = $(".weather-div");
const $weatherSection = $(".weather-section");
const $inputField = $("#city");
const $venueContainer = $(".venues-div");
const $submitBtn = $("#submit");
const $weatherForm = $("#weather-form");
const $cityName = $(".city-name");
const $alert = $(".alert");

// AJAX Work
// Fetching Weather from open weather API
const weatherUrl = "https://api.openweathermap.org/data/2.5/weather";

const getWeather = async () => {
  try {
    const city = $inputField.val();
    const endpoint = `${weatherUrl}?q=${city}&appid=${weatherAppID}`;
    const response = await fetch(endpoint);
    return await response.json();
  } catch (err) {
    const error = `<p class="error">Error: ${err}(City Not Found)</p>`;
    $alert.append(error);
    return;
  }
};

// AJAX Work
// Fetching Venue by calling foursquare API
const foursquareUrl = "https://api.foursquare.com/v2/venues/explore";
const foursquarePhotoUrl =
  "https://api.foursquare.com/v2/venues/VENUE_ID/photos";

const getVenue = async () => {
  try {
    const city = $inputField.val();
    const urlToFetch = `${foursquareUrl}?near=${city}&limit=10&client_id=${travelClientId}&client_secret=${travelClientSecret}&v=20210214`;
    const response = await fetch(urlToFetch);
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    }
  } catch (err) {
    return;
  }
};

const renderWeather = async () => {
  try {
    const weather = await getWeather();
    const weatherContent = createWeatherHtml(weather);
    $weatherContainer.append(weatherContent);
  } catch (err) {
    const error = `<p class="error">Error Weather: ${err}(City Not Found)</p>`;
    $alert.append(error);
    return;
  }
};

const renderVenue = async () => {
  try {
    const venues = await getVenue();
    const venueContent = createVenueHtml(venues);
    $venueContainer.append(venueContent);
  } catch (err) {
    const error = `<p class="error">Error Venue: ${err.message}(City Not Found)</p>`;
    $alert.append(error);
    return;
  }
};

const executeSearch = async (event) => {
  event.preventDefault();

  $weatherContainer.empty();
  $venueContainer.empty();
  const weather = await getWeather();
  $cityName.append(`<h1>${weather.name}</h1><span>Current Weather</span>`);
  renderWeather();
  renderVenue();
  return false;
};

$submitBtn.click(executeSearch);
