const city_input = document.getElementById('city-input')
const weather_type = document.getElementById('weather-type')
const tempDiv = document.getElementById('temp')
const min_temp = document.getElementById('min-temp')
const max_temp = document.getElementById('max-temp')
const city_name = document.getElementById('city-name')

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '45a999ec3amshc9449df81928a7cp19a593jsn6b7ba9066ec5',
    'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
  }
}

city_input.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    getWeatherData(city_input.value)
  }
})

const getWeatherData = (city) => {
  const URL = `https://yahoo-weather5.p.rapidapi.com/weather?location=${city}&format=json&u=f`;
  fetch(URL, options)
    .then(response => response.json())
    .then(data => {
      showWeatherData(data)
    })
    .catch(err => console.error(err));
}

const searchCity = () => {
  const city = city_input.value;
  getWeatherData(city)
}

const showWeatherData = (weatherData) => {

  weather_type.innerText = weatherData.current_observation.condition.text
  tempDiv.innerText = Math.floor((weatherData.current_observation.condition.temperature - 32) * 5 / 9)
  min_temp.innerText = Math.floor((weatherData.forecasts[0].low - 32) * 5 / 9)
  max_temp.innerText = Math.floor((weatherData.forecasts[0].high - 32) * 5 / 9)
  city_name.innerText = weatherData.location.city

}
