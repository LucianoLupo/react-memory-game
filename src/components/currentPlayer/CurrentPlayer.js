import React from 'react';
import { connect } from 'react-redux';
import { CurrentPlayerContainer } from './currentPlayer.styles';

const CurrentPlayer= ({ playerActive, players }) => {
    return (
        <CurrentPlayerContainer>
            <h3>Current Player: </h3>
            <h1>{players[playerActive].name} </h1>
        </CurrentPlayerContainer>
    )
}

      
const mapStateToProps = (state) => {
    return { playerActive: state.players.active,
             players:  state.players.players
    };
};

  

  export default connect(
    mapStateToProps
  )(CurrentPlayer);
  

  