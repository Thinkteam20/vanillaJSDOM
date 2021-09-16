const API_KEY = "d0e38245594291970a52dbacce2ef23d";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  // console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weatherApi span:nth-child(1)");
      const city = document.querySelector("#weatherApi span:nth-child(2)");
      const temp = document.querySelector("#weatherApi span:nth-child(3)");
      // const temp = document.querySelector("weatherApi span:third-child");
      // console.log(data.name, data.weather[0].main);
      // const name = data.name;
      // const weather = data.weather[0].main;
      // const tempC = data.main.temp;
      // console.log(data.main.temp);
      weather.innerText = data.weather[0].main;
      city.innerText = data.name;
      temp.innerText = data.main.temp;
    });
}
function onGeoError() {
  alert(" Can't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
