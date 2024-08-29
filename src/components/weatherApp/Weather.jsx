import React, { useState } from 'react';
import './Weather.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const WeatherApp = () => {
  const apiKey = '5f34bd6932f39815a077c0663a1d8d2d';
  const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric';
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);

  const fetchWeatherInfo = async () => {
    try {
      let result = await fetch(`${apiUrl}&q=${city}&appid=${apiKey}`);
      let jsonResult = await result.json();
      if (jsonResult.cod !== 200) {
        throw new Error(jsonResult.message);
      }
      const info = {
        city: jsonResult.name,
        feels_like: jsonResult.main.feels_like,
        temp: jsonResult.main.temp,
        wind_speed: jsonResult.wind.speed,
        humidity: jsonResult.main.humidity,
        weather: jsonResult.weather[0].main,
      };
      return info;
    } catch (error) {
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCity("");
    setError(false);
    try {
      const info = await fetchWeatherInfo();
      setWeatherInfo(info);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <>
      <img
        src="./public/clouds.jpg"
        className="bg-img"
        alt="Background"
      />
      
      <h2>Weather App</h2> 
      <form onSubmit={handleSubmit}>
        <Box
          component="form"
          sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
          noValidate
          autoComplete="off"
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        >
          <TextField id="outlined-basic" label="CITY" variant="filled" />
        </Box>
        <button type="submit">Get Weather</button>
      </form>

      {error && <p className="error">City not found. Please try again.</p>}

      {weatherInfo && (
        <div className="weather-info-container">
          <div className="weather-info">
            <h2>{weatherInfo.city}</h2>
            <p>Temperature: {weatherInfo.temp} °C</p>
            <p>Feels Like: {weatherInfo.feels_like} °C</p>
            <p>Weather: {weatherInfo.weather}</p>
            <p>Wind Speed: {weatherInfo.wind_speed} m/s</p>
            <p>Humidity: {weatherInfo.humidity}%</p>
          </div>
          <img className="weather-info-img" src="./public/clouds.jpg" alt="Weather" />
        </div>
      )}
    </>
  );
}

export default WeatherApp;
