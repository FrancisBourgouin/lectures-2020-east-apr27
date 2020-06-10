import React from 'react'

const MoodList = props => {

  const moodItems = Object.keys(props.moods).map(mood => {
    return (<ul>
      <li>{mood}</li>
      <li>{props.moods[mood]}</li>
    </ul>)
  })

  return (
    <section>
      <h1>Mood List</h1>
      {moodItems}
    </section>
  )
}

export default MoodList