import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { extractPertinentData } from "./helpers"
import './App.css';

function App() {
  const [commits, setCommits] = useState([])

  useEffect(() => {
    axios
      .get("https://api.github.com/repos/FrancisBourgouin/lectures-2020-east-apr27/commits")
      .then(res => setCommits(res.data))
      .catch(err => {
        console.log(err)
        setCommits([])
      })
  }, [])

  const listOfCommits = commits.map(commit => {
    const data = extractPertinentData(commit)

    return <li>{data.message} on {data.date} by {data.authorName} & {data.committerName}</li>
  })
  return (
    <div className="App">
      <h1>Github commit fetcher!</h1>
      <h2>List of stuff</h2>
      <ul>
        {listOfCommits}
      </ul>
    </div>
  );
}

export default App;
