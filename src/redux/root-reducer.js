import { combineReducers } from 'redux';
import playersReducer from './players/players.reducer';
import cardsReducer from './cards/cards.reducer';


const rootReducer = combineReducers({
  players: playersReducer,
  cards: cardsReducer,

});
export default rootReducer;
