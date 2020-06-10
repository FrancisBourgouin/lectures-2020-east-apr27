import React, { useState } from 'react';
import './App.css';
import Players from './Players'
import { Matches } from './Matches'


// Smash tourney manager
// Players, Matches, Results

const playerListSource = [
  {
    name: "Princeton",
    main: "Falco"
  },
  {
    name: "Ben",
    main: "Marth"
  },
  {
    name: "Andrew",
    main: "Kirby"
  },
  {
    name: "Michael",
    main: "Link"
  },
  {
    name: "Francis",
    main: "Inkling"
  }
]
// stage, rounds, players, winner


const matchListSource = [
  {
    player1: "Princeton",
    player2: "Andrew",
    winner: "Princeton"
  },
  {
    player1: "Ben",
    player2: "Michael",
    winner: ""
  },
  {
    player1: "Francis",
    player2: "Princeton",
    winner: ""
  }
]


function App() {
  const [playerList, setPlayerList] = useState(playerListSource)
  const [matchList, setMatchList] = useState(matchListSource)

  // const resultOfTheUseStateHook = useState(playerListSource)

  // resultOfTheUseStateHook[0] //values
  // resultOfTheUseStateHook[1] //function to change the values
  const addSecretPlayer = () => {
    // players.push({ name: "Little Chicken", main: "Little Mac" })
    // console.log(players)
    const newPlayerList = [...playerList, { name: "Little Chicken", main: "Little Mac" }]
    // newPlayerList.push({ name: "Little Chicken", main: "Little Mac" })
    setPlayerList(newPlayerList)
  }

  const declareWinner = (matchNumber, name) => {
    const updatedMatchList = [...matchList]
    updatedMatchList[matchNumber].winner = name
    setMatchList(updatedMatchList)
  }
  return (
    <div className="App">
      <h1 onClick={addSecretPlayer}>Super Smash Tourney Manager Thing</h1>
      <Players playerList={playerList} />
      <Matches matchList={matchList} declareWinner={declareWinner} />
      {/* <Matches {...{matchList, playerList, }} /> */}
    </div>
  );
}

export default App;



const notTheUseStateHookButKinda = (value) => {
  let internalValue = value

  const changeInternalValue = (newValue) => {
    internalValue = newValue
  }

  return [internalValue, changeInternalValue]
}

const purePop = arr => arr.map((item, index) => {
  if (index !== arr.length - 1) {
    return item
  }
})

const anotherPurePop = arr => {
  const newArr = [...arr].pop()
  return newArr
}