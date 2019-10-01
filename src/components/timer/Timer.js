import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { TimerContainer } from './timer.styles';
import { nextPlayer } from '../../redux/players/players.actions';
import { resetTimer, decreaseTime } from '../../redux/timer/timer.actions';
import { hideAll, resetCardsActive } from '../../redux/cards/cards.actions';


const Timer = ({ nextPlayer, time, decreaseTime, resetTimer, hideAll, resetCardsActive }) => {

  function reset() {
    resetTimer();
  }

  useEffect(() => {
    let interval = null;
    if ( time > 0) {
      interval = setInterval(() => {
        decreaseTime();
      }, 1000);
    } else if ( time === 0) {
      clearInterval(interval);
      hideAll();
      resetCardsActive();
      nextPlayer();
      reset();
    }
    return () => clearInterval(interval);
  }, [time]);

  return (
        <TimerContainer>
            <h1>{time}s</h1>
        </TimerContainer>
  );
};

const mapStateToProps = (state) => {
  return { time: state.timer.time };
};

const mapDispatchToProps = dispatch => ({
  nextPlayer: () => dispatch(nextPlayer()),
  resetTimer: () => dispatch(resetTimer()),
  decreaseTime: () => dispatch(decreaseTime()),
  hideAll: () => dispatch(hideAll()),
  resetCardsActive: () => dispatch(resetCardsActive()),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Timer);


