import CardsActionTypes from './cards.types';



export const revealCard = (card) => ({
  type: CardsActionTypes.REVEAL_CARD,
  payload: card
});

export const createDeck = () => ({
  type: CardsActionTypes.CREATE_DECK,
});

export const resetDeck = () => ({
    type: CardsActionTypes.RESET_DECK,
});

export const hideAll = () => ({
  type: CardsActionTypes.HIDE_ALL,
});

export const addCardActive = (card) => ({
  type: CardsActionTypes.ADD_CARD_ACTIVE,
  payload:card
});

export const resetCardsActive = () => ({
  type: CardsActionTypes.RESET_CARDS_ACTIVE,
});

export const setCardsToMatched = (id) => ({
  type: CardsActionTypes.SET_CARDS_TO_MATCHED,
  payload:id
});
