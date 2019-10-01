import { combineReducers } from 'redux';
import playersReducer from './players/players.reducer';
import cardsReducer from './cards/cards.reducer';
import timerReducer from './timer/timer.reducer';



const rootReducer = combineReducers({
  players: playersReducer,
  cards: cardsReducer,
  timer: timerReducer,


});
export default rootReducer;
