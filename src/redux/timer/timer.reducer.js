import { TimerActionTypes } from './timer.types';
const INITIAL_STATE = {
  time:10
};

const timerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TimerActionTypes.RESET_TIMER:
      return {
        ...INITIAL_STATE
      };
      case TimerActionTypes.DECREASE_TIME:
        return {
          ...state,
          time: state.time > 0 ? state.time - 1 : 0
        };
    default:
      return state;
  }
};

export default timerReducer;

