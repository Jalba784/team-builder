import React, { useState } from 'react';
// import './App.css';
import { AlphaTeam } from './Data.js'


const App = () => {
  const [team, setTeam] = useState(AlphaTeam);
  console.log(team);
  return (
      <div>
        <p>React</p>
        <div>{team.map((member, index) => member.name)}</div>
      </div>
  );
};

export default App;
