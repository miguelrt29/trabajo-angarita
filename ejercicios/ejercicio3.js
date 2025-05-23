const fetch = require('node-fetch');

async function fetchJsonSafe(url) {
  try {
    const res = await fetch(url);
    const text = await res.text();
    try {
      return JSON.parse(text);
    } catch {
      // No es JSON válido, devolver null para manejar después
      return null;
    }
  } catch {
    return null;
  }
}

async function obtenerClima() {
  const api1 = fetchJsonSafe('https://api.open-meteo.com/v1/forecast?latitude=6.25184&longitude=-75.56359&current_weather=truehttps://api.met.no/weatherapi/locationforecast/2.0/compact?lat=6.25184&lon=-75.56359')
    .then(data => data ? `Open-Meteo: ${data.current_weather.temperature}°C` : null);

  const api2 = fetchJsonSafe('https://wttr.in/Medellin?format=j1')
    .then(data => data ? `Wttr.in: ${data.current_condition[0].temp_C}°C` : null);



  try {
    // Promise.race no puede ignorar valores null, filtramos resultados no nulos
    const resultado = await Promise.race([
      api1.catch(() => null),
      api2.catch(() => null),
    ]);

    if (resultado) {
      console.log(`Temperatura más rápida recibida: ${resultado}`);
    } else {
      console.log('No se pudo obtener la temperatura de ninguna API');
    }
  } catch (err) {
    console.log("Error al obtener el clima:", err);
  }
}
 
obtenerClima();
