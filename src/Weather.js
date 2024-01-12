import React, { useState } from 'react';
import axios from 'axios';
import WeatherDisplay from './weatherDisplay';


function Weather(){

  const [weatherData, setWeatherData] = useState(null);
  
  const appStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  };
  const allStyle= {
    backgroundColor: '#f5f5f5'
  }
  const buttonStyles = {
    backgroundColor: '#4caf50',
    color: 'white',
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '20px',
  };

  const getWeather = async () => {
    try {
      const response = await axios.get(
        'https://api.openweathermap.org/data/2.5/weather',
        {
          params: {
            q: 'Nabeul',
            appid: '26f4304ceb956e65efd40e8be32d44d8',
          },
        }
      );

      setWeatherData(response.data);
    } catch (error) {
      console.error('Erreur lors de la récupération des données météorologiques :', error.message);
    }
  };
return(

<div className="App" style={allStyle}>
      <div style={appStyles}>
        <h1>Weather Application</h1>
        <button onClick={getWeather} style={buttonStyles}>Get Weather</button>
      </div>
      <WeatherDisplay weatherData={weatherData} />
    </div>

)
}

export default Weather;
