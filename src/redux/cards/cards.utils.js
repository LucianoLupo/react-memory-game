import cardsData from './cardsData';

import _ from 'lodash';

const shuffleCards = (array) => {
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
