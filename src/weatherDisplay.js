import React from 'react';
import './weatherDisplay.css'
import { useState } from 'react';
import axios from 'axios';

const WeatherDisplay = ({ weatherData, onCityChange }) => {
    const [selectedCity, setSelectedCity] = useState('');
    const [cityWeatherData, setCityWeatherData] = useState(null);
  
    const handleCityChange = (event) => {
      setSelectedCity(event.target.value);
    };
  
    const handleGetWeather = async () => {
      try {
        const response = await axios.get(
          'https://api.openweathermap.org/data/2.5/weather',
          {
            params: {
              q: selectedCity,
              appid: '26f4304ceb956e65efd40e8be32d44d8',
            },
          }
        );
  
        setCityWeatherData(response.data);
        onCityChange(response.data);
      } catch (error) {
        console.error('Error fetching weather data:', error.message);
      }
    };
  
    return (
      <div className="weather-display">
        <div className="city-select">
          <label htmlFor="city">Select City: </label>
          <div>
                <select id="city" value={selectedCity} onChange={handleCityChange}>
                    <option value="Sousse">Sousse</option>
                    <option value="Monastir">Monastir</option>
                    <option value="Hammamet">Hammamet</option>
                    <option value="Gafsa">Gafsa</option>
                    <option value="Djerba">Djerba</option>
                    <option value="Gabes">Gabes</option>
                    <option value="Ariana">Ariana</option>

                </select>
                <button onClick={handleGetWeather}>Add another city</button>
           </div>
        </div>
        <div className='weather-cards'>
        {weatherData && (
          <div className="weather-info">
            <h2 className="city-name">Weather in {weatherData.name}</h2>
            <p className="temperature">Temperature: {(weatherData.main.temp - 273).toFixed(1)} Celsus</p>
            <p className="humidity">Humidity: {weatherData.main.humidity} %</p>
            <p className="wind">Wind's speed: {weatherData.wind.speed} Meter/sec</p>
            <p className="weather-description">Weather: {weatherData.weather[0].description}</p>
          </div>
        )}
        {cityWeatherData && (
          <div className="weather-info">
            <h2 className="city-name">Weather in {cityWeatherData.name}</h2>
            <p className="temperature">Temperature: {(cityWeatherData.main.temp - 273).toFixed(1)} Celsus</p>
            <p className="humidity">Humidity: {weatherData.main.humidity} %</p>
            <p className="wind">Wind's speed: {weatherData.wind.speed} Meter/sec</p>
            <p className="weather-description">Weather: {cityWeatherData.weather[0].description}</p>
          </div>
        )}
        </div>
      </div>
    );
  };
  


export default WeatherDisplay;
