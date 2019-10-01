
import CardsActionTypes from './cards.types';
import {  generateCards } from './cards.utils';


const INITIAL_STATE = {
  cardsActive: [],
  cards: []
};

const cardsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CardsActionTypes.CREATE_DECK:
      return {
        ...state,
          cards: generateCards(state.cards)
      };
    default:
      return state;
  }
};

export default cardsReducer;
