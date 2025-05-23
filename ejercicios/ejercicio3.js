const fetch = require('node-fetch');

async function obtenerClima() {
  const api1 = fetch('https://api.open-meteo.com/v1/forecast?latitude=6.25184&longitude=-75.56359&current_weather=true')
    .then(res => res.json())
    .then(data => `Open-Meteo: ${data.current_weather.temperature}°C`)
    .catch(() => Promise.reject());

  const api2 = fetch('https://goweather.herokuapp.com/weather/Medellin')
    .then(res => res.json())
    .then(data => `GoWeather: ${data.temperature}`)
    .catch(() => Promise.reject());

  Promise.race([api1, api2])
    .then(console.log)
    .catch(() => console.log('No se pudo obtener la temperatura'));
}

obtenerClima();

