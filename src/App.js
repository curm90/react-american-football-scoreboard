//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import TopRow from './TopRow';
import BottomRow from "./BottomRow";
import Buttons from './Buttons'


function App(props) {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const [quarter, setQuarter] = useState(1);

  const onQuarterChange = () => {
    setQuarter(quarter + 1)
  }

  const currentQuarter = quarter;

  const teamScore = (teamName, pointsScored) => {
    if (teamName === 'home') {
      setHomeScore(homeScore + pointsScored)
    } else {
      setAwayScore(awayScore + pointsScored)
    }
  }

  return (
    <div className="container">
      <section className="scoreboard">
        <TopRow 
          homeScore={homeScore}   
          awayScore={awayScore}
        />
        <BottomRow
          quarter={currentQuarter} 
        />
      </section>
      <Buttons 
        teamScore={teamScore}
        onQuarterChange={onQuarterChange}
      />
    </div>
  );
}

export default App;
