import React from 'react';
import { connect } from 'react-redux';

import './App.css';
import Game from './views/game/Game';
import GameOver from './views/gameOver/GameOver';

const App = ({players}) => {

  const gameOver = players[0].counter + players[1].counter === 10;
  return (
    gameOver ? <GameOver players={players} /> : <Game/>
  );
}
      
const mapStateToProps = (state) => {
  return { players: state.players.players,
  };
};

export default connect(
  mapStateToProps
)(App);


