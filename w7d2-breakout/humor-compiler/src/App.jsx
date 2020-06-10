import React, { useState } from 'react';
import MoodList from './MoodList'
import MoodForm from './MoodForm'
import './App.css';

function App() {
  const [moods, setMoods] = useState({ "😩": 1 })

  const updateMoods = (mood) => {
    const newMoods = { ...moods }

    if (newMoods[mood]) {
      newMoods[mood]++
    } else {
      newMoods[mood] = 1
    }

    setMoods(newMoods)
  }
  return (
    <div className="App">
      <MoodForm updateMoods={updateMoods} />
      <MoodList moods={moods} />
    </div>
  );
}

export default App;
