import React from 'react'

const WeatherDisplay = ({ weatherData }) => {
  if (!weatherData) return null;

  return (
    <div className='Display'>
      <h2>{weatherData.name}, {weatherData.sys.country}</h2>
      <p>{weatherData.weather[0].description}</p>
      <p>Temp: {weatherData.main.temp}°C</p>
      <p>Wind: {weatherData.wind.speed} m/s</p>
    </div>
  )
}

export default WeatherDisplay
