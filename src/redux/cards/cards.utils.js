import cardsData from './cardsData';

import _ from 'lodash';

export const shuffleCards = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

export const generateCards = (cards) => {
    let generatedCards = [];
    let cardsRepetition = 2
    if (cards.length === 0){
        cardsData.forEach(card => {
            let i = 0
            for (i; i < cardsRepetition ; i++) {
                let uid =  _.uniqueId('id_');    
                let newCard = {...card, uid: uid }
                generatedCards.push(newCard) 
             }
    
        });
    } else {
        generatedCards = cards
    }

    return shuffleCards(generatedCards);

}

export const resetDeck = (cards) => {
    return shuffleCards(cards.map(card => { return {...card, hidden: true, matched: false }} ));
}


export const revealCard = (cards, uid) => {
      return cards.map(card =>
        card.uid === uid
          ? { ...card, hidden: false }
          : card
      );
  };
  

export const hideAll = (cards) => {
    return cards.map(card =>
        !card.matched
          ? { ...card, hidden: true }
          : card
      );
}

export const setCardsToMatched = (cards, id) => {
    return cards.map(card =>
        card.idToMatch === id
          ? { ...card, hidden: false, matched: true }
          : card
      );
}