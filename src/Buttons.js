import React from 'react';

const Buttons = (props) => {
  return (
    <section className="buttons">
      <div className="homeButtons">
        <button 
          className="homeButtons__touchdown"
          onClick={() => props.teamScore('home', 7)}
          >
          Home Touchdown
        </button>
        <button 
          className="homeButtons__fieldGoal"
          onClick={() => props.teamScore('home', 3)}
          >
          Home Field Goal
        </button>
      </div>
      <div className="awayButtons">
        <button 
          className="awayButtons__touchdown"
          onClick={() => props.teamScore('away', 7)}
          >
          Away Touchdown
        </button>
        <button 
          className="awayButtons__fieldGoal"
          onClick={() => props.teamScore('away', 3)}
          >
          Away Field Goal
        </button>
        <button 
        className="button"
        onClick={() => props.onQuarterChange()}
        >
        Next Quarter
        </button>
      </div>
    </section>
  )
}

export default Buttons;