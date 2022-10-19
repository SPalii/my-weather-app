let currentTime = new Date();

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let day = days[currentTime.getDay()];
let month = months[currentTime.getMonth()];
let date = currentTime.getDate();
let hours = currentTime.getHours();
let minutes = currentTime.getMinutes();

let dayToday = document.querySelector("#day");
let dateToday = document.querySelector("#date");
let hoursToday = document.querySelector("#hours");

dayToday.innerHTML = `${day}`;
dateToday.innerHTML = ` ${date} ${month}`;
//hoursToday.innerHTML = `${hours}:${minutes}`;
hoursToday.innerHTML = currentTime.toLocaleTimeString();


function showTemperature(response) {
   document.querySelector("#city").innerHTML = response.data.name;
   document.querySelector("#temperature").innerHTML = Math.round(response.data.main.temp);
   document.querySelector("#humidity").innerHTML = response.data.main.humidity;
   document.querySelector("#wind").innerHTML = Math.round(response.data.wind.speed);
}
function submitting(event) {
   event.preventDefault();
   let cityInput = document.querySelector("#input-city");
   let city = cityInput.value;
   let units = "metric";
   let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=e91d8831d4722ffce7b07417a253b9dc&units=${units} `;

   axios.get(apiUrl).then(showTemperature);
}
let formSearch = document.querySelector("#form-search");
formSearch.addEventListener("submit", submitting);
//
function findLocation(position) {
   let lat = position.coords.latitude;
   let lon = position.coords.longitude;
   let apiKey = "e91d8831d4722ffce7b07417a253b9dc";
   let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
   axios.get(apiUrl).then(showTemperature);
}

function showCurrentPosition(event) {
   event.preventDefault();
   navigator.geolocation.getCurrentPosition(findLocation);
}

let currentButton = document.querySelector("#current-button");
currentButton.addEventListener("click", showCurrentPosition);






