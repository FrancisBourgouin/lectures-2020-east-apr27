import React from 'react'

const CurrentWeather = props => {
  const { weather, currentCity } = props
  const tempInCelsius = Math.round((weather.main.temp - 273) * 100) / 100
  return (
    <section>
      <h1>Current weather for {currentCity}</h1>
      <p>Outside it looks like {weather.weather[0].description}</p>
      <p>With temperatures of {tempInCelsius}C</p>
      <p>{tempInCelsius < 40 && tempInCelsius > 10 ? "Yup" : "Nope"}</p>
    </section>
  )
}

export default CurrentWeather