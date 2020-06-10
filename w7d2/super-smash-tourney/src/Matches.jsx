import React from 'react'
import { SingleMatch } from './SingleMatch'

export const Matches = (props) => {
  const { matchList, declareWinner } = props

  const parsedMatches = matchList.map((match, index) => {
    return (
      <SingleMatch
        player1={match.player1}
        player2={match.player2}
        winner={match.winner}
        declareWinner={declareWinner}
        matchNumber={index}
      />
    )
  })
  return (
    <div>
      <h1>Matches</h1>
      {parsedMatches}
    </div>
  )
}