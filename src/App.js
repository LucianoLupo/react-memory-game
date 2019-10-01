import React from 'react';
import Game from './views/game/Game';
import GameOver from './views/gameOver/GameOver';

import './App.css';

function App() {

  const gameOver = false;
  return (
    gameOver ? <GameOver /> : <Game/>

  );
}

export default App;
