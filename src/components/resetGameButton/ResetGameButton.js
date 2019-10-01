import React from 'react'
import { connect } from 'react-redux';

import { resetDeck } from '../../redux/cards/cards.actions';
import { resetPlayers } from '../../redux/players/players.actions';
import { resetTimer } from '../../redux/timer/timer.actions';


import { ButtonContainer } from './resetGameButton.styles';

function ResetGameButton( { resetDeck, resetPlayers, resetTimer } ) {

    const handleClick = (e) => {
        e.preventDefault();
        resetPlayers();
        resetTimer();
        resetDeck();
    }

    return (
        <ButtonContainer onClick={handleClick}>
            <h3>Reset Game!</h3>
        </ButtonContainer>
    )
}


const mapDispatchToProps = dispatch => ({
    resetDeck: () => dispatch(resetDeck()),
    resetPlayers: () => dispatch(resetPlayers()),
    resetTimer: () => dispatch(resetTimer()),

  });
  

  export default connect(
    null,
    mapDispatchToProps
  )(ResetGameButton);
  

  