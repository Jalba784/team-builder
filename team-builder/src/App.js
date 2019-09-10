import React, { useState } from 'react';
// import './App.css';
import { AlphaTeam } from './Data.js'
import TeamList from "./Components/TeamList";


const App = () => {
  const [team] = useState(AlphaTeam);
  console.log(team);
  return (
      <div>
        <p>React</p>
        <div>
          <TeamList data={team} />
        </div>
      </div>
  );
};

export default App;
