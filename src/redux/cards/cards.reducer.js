

import cards from './cardsData'
import CardsActionTypes from './cards.types';
import { revealCard, generateCards, resetDeck, hideAll, setCardsToMatched } from './cards.utils';


const INITIAL_STATE = {
  cardsActive: [],
  cards: []
};

const cardsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CardsActionTypes.REVEAL_CARD:
      return {
        ...state,
          cards: revealCard(state.cards, action.payload)
      };
    case CardsActionTypes.CREATE_DECK:
      return {
        ...state,
          cards: generateCards(state.cards)
      };
    case CardsActionTypes.RESET_DECK:
      return {
        ...state,
          cards: resetDeck(state.cards)
      };
    case CardsActionTypes.HIDE_ALL:
      return {
        ...state,
          cards: hideAll(state.cards)
      };
    case CardsActionTypes.ADD_CARD_ACTIVE:
      return {
        ...state,
          cardsActive: [...state.cardsActive, action.payload]
      };
    case CardsActionTypes.RESET_CARDS_ACTIVE:
      return {
        ...state,
          cardsActive: []
      };
    case CardsActionTypes.SET_CARDS_TO_MATCHED:
      return {
        ...state,
          cardsActive: [],
          cards:setCardsToMatched(state.cards, action.payload)
      };
    default:
      return state;
  }
};

export default cardsReducer;
