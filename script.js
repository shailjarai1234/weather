async function getWeather() {
    const apiKey = '4dcbeeb5543c2ba57d73fc0988b14f9b';
    const city = document.getElementById('cityInput').value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      
      if (data.cod === '404') {
        document.getElementById('weatherInfo').innerHTML = 'city not found';
      } else {
        const weatherInfo = `
          <h2>${data.name}, ${data.sys.country}</h2>
          <p>${data.weather[0].main}</p>
          <p>Temperature: ${data.main.temp}°C</p>
          <p>Humidity: ${data.main.humidity}%</p>
          <p>Wind Speed: ${data.wind.speed} m/s</p>
        `;
        document.getElementById('weatherInfo').innerHTML = weatherInfo;
      }
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  }
  