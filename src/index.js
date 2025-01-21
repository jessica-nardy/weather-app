function searchCity(event) {
  event.preventDefault();
  let input = document.querySelector("#city-input");
  let cityElement = document.querySelector("#current-city");

  cityElement.innerHTML = input.value;
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", searchCity);
