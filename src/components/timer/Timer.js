import React from 'react';
import { TimerContainer } from './timer.styles';

const Timer = () => {

  const time = 10 
  return (
        <TimerContainer>
            <h1>{time}s</h1>
        </TimerContainer>
  );
};

export default Timer;


