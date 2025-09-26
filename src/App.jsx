import React, { useEffect, useState } from 'react'
import DataInput from './components/cityInput'
import WeatherDisplay from './components/weatherDisplay'
import Header from './components/Header'
import Footer from './components/Footer'
const App = () => {
  const [city,setCity]=useState('')
  const [country,setCountry]=useState('')
  const [lat,setLat]=useState(null)
  const [lon,setLon]=useState(null)
  const [weather, setWeather]= useState(null)
  const apikey= import.meta.env.VITE_WEATHER_API_KEY
  function handleCity(i){ setCity(i);}
  function handleCountry(i){ setCountry(i)}
  useEffect(()=>{
    if (!city || !country) return;
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&limit=1&appid=${apikey}`)
    .then(response =>{
      return response.json()
    })
    .then( data=>{
      if (data.length==0){
        console.error('City Not Found')
      }
      console.log(data)
      setLat(data[0].lat);
      setLon(data[0].lon);
    })
    .catch((err) => console.error(err));
  },[city, country, apikey])
  useEffect(()=>{
    if (!lat || !lon) return;
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}&units=metric`)
    .then(response =>{
      return response.json()
    })
    .then( data=>{
      console.log(data)
      setWeather(data)
    })
    .catch((err) => console.error(err));
  },[lat, lon, apikey])

  return (
    <div className='Main'>
      <Header/>
      <div className="mainpage">
      <DataInput inputCity={handleCity} inputCountry={handleCountry}/>
      <WeatherDisplay  weatherData={weather}/>
      </div>
      <Footer/>
    </div>
  )
}

export default App