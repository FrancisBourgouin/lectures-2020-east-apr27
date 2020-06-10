import React from 'react';
import axios from 'axios'
import CityForm from './CityForm'
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import CurrentWeather from './CurrentWeather';


// API CALL : https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}
// TOKEN : 09fd719b4b698ec0260e424f83378e3d

function App() {
  const [currentCity, setCurrentCity] = useState('Montréal')
  const [weather, setWeather] = useState()
  const params = { q: currentCity, appid: "09fd719b4b698ec0260e424f83378e3d" }

  const fetchWeather = () => {
    axios
      .get('https://api.openweathermap.org/data/2.5/weather', { params })
      .then(res => console.log(res, typeof res))
      .catch(err => setWeather(null))
      .finally(() => console.log('It\'s finally done'))
  }

  useEffect(() => {
    if (currentCity) {
      axios
        .get('https://api.openweathermap.org/data/2.5/weather', { params })
        .then(res => setWeather(res.data))
        .catch(err => setWeather(null))
        .finally(() => console.log('It\'s finally done'))

    }
  }, [currentCity])

  useEffect(() => {
    const logTarget = e => console.log(e.target)
    document.addEventListener('click', logTarget)

    return () => document.removeEventListener('click', logTarget)
  })


  useEffect(() => {
    // Execute potentially sideffecty code

    // return : a cleanup function that will make sure that the next rerender will not interfere
  }, ['A', 'LIST', 'OF', 'VARIABLES', 'TO LOOK AT']) // This list will retrigger the callback of the useEffect if they are changed

  return (
    <div className="App">
      <h1>Can I go outside ?</h1>
      <CityForm setCurrentCity={setCurrentCity} />
      <button onClick={fetchWeather}>FETCH WEATHER</button>
      {weather && <CurrentWeather weather={weather} currentCity={currentCity} />}
    </div>
  );
}

export default App;
