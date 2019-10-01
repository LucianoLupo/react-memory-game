import { PlayersActionTypes } from './players.types';
import { addPoint } from './players.utils';
const INITIAL_STATE = {
  players: [
    {
      id:0,
      name:"Player 1",
      counter: 0,
      active:true
    },
    {
      id:1,
      name:"Player 2",
      counter: 0,
      active:false
    }
  ],
  active:0
};

const playerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PlayersActionTypes.RESET_PLAYERS:
      return {
        ...INITIAL_STATE
      };
    case PlayersActionTypes.ACTIVE_NEXT_PLAYER:
      return {
        ...state,
        active:(state.active + 1) % state.players.length
      };
    case PlayersActionTypes.ADD_POINT:
      return {
        ...state,
        players : addPoint(state.players, action.payload)
      };
    default:
      return state;
  }
};

export default playerReducer;

