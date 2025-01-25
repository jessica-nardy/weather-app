function refreshWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#current-city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let humidity = response.data.temperature.humidity;
  let windElement = document.querySelector("#wind-speed");
  let wind = response.data.wind.speed;
  let iconElement = document.querySelector("#icon");
  let timeElement = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);

  temperatureElement.innerHTML = Math.round(temperature);
  cityElement.innerHTML = response.data.city;
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = `${humidity}%`;
  windElement.innerHTML = `${wind}km/h`;
  iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="app-icon" />`;
  timeElement.innerHTML = formatDate(date);
}

function formatDate(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thrusday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  if (minutes < 10) minutes = `0${minutes}`;

  if (hours < 10) hours = `0${hours}`;

  return `${day}, ${hours}:${minutes}`;
}

function searchCity(city) {
  let apiKey = "8t7b43fadd5ba0704f357ba3a35e30o0";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(refreshWeather);
}

function handleSearch(event) {
  event.preventDefault();
  let input = document.querySelector("#city-input");

  searchCity(input.value);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSearch);

searchCity("Porto");
