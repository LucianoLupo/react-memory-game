import { PlayersActionTypes } from './players.types';

export const resetPlayers = () => ({
  type: PlayersActionTypes.RESET_PLAYERS,
});

export const nextPlayer = userId => ({
  type: PlayersActionTypes.ACTIVE_NEXT_PLAYER,
  payload: userId
});

export const addPoint = userId => ({
  type: PlayersActionTypes.ADD_POINT,
  payload: userId
});