import React, { useState } from 'react';
// import './App.css';
import { AlphaTeam } from './Data.js'
import TeamList from "./Components/TeamList";
import styled from "styled-components";
import Create from "./Components/Create";

const Title = styled.div`
  background-color: gray;
  width: 30%;
  color: white;
  padding: 5px 0px 5px 7%;
  margin: 20px auto 0px auto;
  border-radius: 10px;
`;

const App = () => {
  const [team] = useState(AlphaTeam);
  return (
      <div>
        <Title>
          <h1>React Team</h1>
        </Title>
        <div>
          <Create/>
          <TeamList data={team} />
        </div>
      </div>
  );
};

export default App;
