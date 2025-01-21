function searchCity(event) {
  event.preventDefault();
  let input = document.querySelector("#city-input");
  let cityElement = document.querySelector("#current-city");

  let cityName = input.value;
  cityElement.innerHTML = cityName;

  getWeather(cityName);
}

function getWeather(city) {
  let apiKey = "8t7b43fadd5ba0704f357ba3a35e30o0";
  let apiUrl = `"https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayTemperature);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", searchCity);
