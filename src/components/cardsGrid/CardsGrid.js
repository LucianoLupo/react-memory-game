import React, { useEffect } from 'react'
import { connect } from 'react-redux';

import { createDeck, hideAll, resetCardsActive, setCardsToMatched } from '../../redux/cards/cards.actions';
import Card from '../card/Card';

import { CardsRow } from './cardsGrid.styles';

function CardsGrid({cardsRedux, cardsActive, create, hideAll, resetCardsActive ,setCardsToMatched}) {

    const toMatrix = (arr, width) => 
    arr.reduce((rows, key, index) => (index % width === 0 ? rows.push([key]) 
      : rows[rows.length-1].push(key)) && rows, []);

    

    useEffect(() => {
        create();
    }, [])
    const cards = toMatrix(cardsRedux.cards, 4)

    if( cardsActive.length === 2 ){
        if( cardsActive[0].idToMatch === cardsActive[1].idToMatch){
            setCardsToMatched(cardsActive[0].idToMatch);
        }else {
            setTimeout(() => {
                hideAll();
            },300)
        }
        resetCardsActive();
    }



    return (
        <div>
            {
                cards.map((row, key) => (
                <CardsRow key={key}>
                {
                    row.map(card => (<Card key={card.uid} card={card} />))
                }
                </CardsRow>
                ))
            }
        </div>
    )
}

      
const mapStateToProps = (state) => {
    return { cardsRedux: state.cards,
        cardsActive: state.cards.cardsActive,
};
};

const mapDispatchToProps = dispatch => ({
    create: () => dispatch(createDeck()),
    setCardsToMatched: (id) => dispatch(setCardsToMatched(id)),
    resetCardsActive: () => dispatch(resetCardsActive()),
    hideAll: () => dispatch(hideAll()),

  });
  
  

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(CardsGrid);
  

  