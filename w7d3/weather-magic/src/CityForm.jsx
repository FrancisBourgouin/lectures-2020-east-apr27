import React from 'react'
import { useState } from 'react'

const CityForm = props => {
  const [cityInput, setCityInput] = useState("")

  const handleSubmit = e => {
    e.preventDefault()
    props.setCurrentCity(cityInput)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="city"
        placeholder="Where are you?"
        value={cityInput}
        onChange={e => setCityInput(e.target.value)}
      />
    </form>
  )
}

export default CityForm