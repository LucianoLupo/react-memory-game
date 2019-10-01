import { TimerActionTypes } from './timer.types';

export const resetTimer = () => ({
  type: TimerActionTypes.RESET_TIMER,
});

export const decreaseTime = () => ({
  type: TimerActionTypes.DECREASE_TIME,
});
