import React from 'react'
import './index.css';
import { useState } from 'react';

import SnakeGame from './components/SnakeGame';

const App = () => {
  const [gameMode, setGameMode] = useState(false);
  return (
    <div className="bg">
      {gameMode ? <SnakeGame onAbort={() => setGameMode(false)} /> : <div className="form-container">
        <p className="header-font">The Snake Game</p>
        <div className="game-rules">
          <p className="rule-text">1. Use your cursor keys: up, left, right, and down.</p>
          <p className="rule-text">2. Don't run the snake into the wall, or his own tail: you die.</p>
          <p className="rule-text">3. Eat the colored fruit to gain points.</p>
          <p className="rule-text">4. Your will get each point for each fruit taken</p>
          <p className="rule-text">5. Your score will be shown on the top right of your screen</p>
        </div>
        <button type="button" className="btn btn-success start-button" onClick={() => setGameMode(true)}>Start Game</button>
      </div>}
    </div>
  )
}

export default App;
