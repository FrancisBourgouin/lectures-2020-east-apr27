import React from 'react'

const Players = (props) => {
  const { playerList } = props
  const listOfNames = playerList.map(player => <li>{player.name}</li>)
  return (
    <div>
      <h1>Players</h1>
      <ul>
        {listOfNames}
      </ul>
    </div>
  )
}

export default Players