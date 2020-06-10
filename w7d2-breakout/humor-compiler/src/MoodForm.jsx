import React, { useState } from 'react'

const MoodForm = props => {
  const [formValue, setFormValue] = useState("")

  const { updateMoods } = props

  const handleSubmit = (event) => {
    event.preventDefault()
    updateMoods(formValue)
    setFormValue("")
  }

  return (
    <section>
      <h1>Mood Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your mood"
          value={formValue}
          onChange={event => setFormValue(event.target.value)}
        />
        <input type="submit" />
      </form>
    </section>
  )
}

export default MoodForm