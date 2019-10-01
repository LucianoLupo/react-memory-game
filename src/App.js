import React from 'react';
import { connect } from 'react-redux';
import { nextPlayer } from './redux/players/players.actions';

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

const mapDispatchToProps = dispatch => ({
  nextPlayer: () => dispatch(nextPlayer())

});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);


