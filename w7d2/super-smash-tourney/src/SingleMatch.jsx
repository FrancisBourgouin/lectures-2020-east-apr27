import React from 'react'

export const SingleMatch = (props) => {
  const { declareWinner, matchNumber } = props
  return (
    <ul>
      {!props.winner && <li onClick={() => declareWinner(matchNumber, props.player1)}>Player1: {props.player1}</li>}
      {!props.winner && <li onClick={() => declareWinner(matchNumber, props.player2)}>Player2: {props.player2}</li>}

      {props.winner &&
        <>
          <li >Player1: {props.player1}</li>
          <li >Player2: {props.player2}</li>
        </>
      }

      <li>Winner: {props.winner ? props.winner : "No winner yet!"}</li>
    </ul>
  )
}