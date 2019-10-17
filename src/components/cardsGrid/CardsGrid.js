import React, { useEffect } from 'react'
import { connect } from 'react-redux';

import { createDeck, setCardsToMatched, hideAll, resetCardsActive } from '../../redux/cards/cards.actions';
import { resetTimer } from '../../redux/timer/timer.actions';
import { nextPlayer, addPoint } from '../../redux/players/players.actions';
import Card from '../card/Card';

import { CardsRow, CardsContainer } from './cardsGrid.styles';

function CardsGrid({cardsRedux, cardsActive, create, hideAll, resetCardsActive ,setCardsToMatched, resetTimer, nextPlayer, addPoint, activePlayer}) {

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
            addPoint(activePlayer);
            resetTimer();
        }else {
            setTimeout(() => {
                hideAll();
                resetTimer();
                nextPlayer();
            },400)
        }
        resetCardsActive();
    }



    return (
        <CardsContainer>
            {
                cards.map((row, key) => (
                <CardsRow key={key}>
                {
                    row.map(card => (<Card key={card.uid} card={card} />))
                }
                </CardsRow>
                ))
            }
        </CardsContainer>
    )
}
      
const mapStateToProps = (state) => {
    return { cardsRedux: state.cards,
             cardsActive: state.cards.cardsActive,
             activePlayer: state.players.active
    };
};

const mapDispatchToProps = dispatch => ({
    create: () => dispatch(createDeck()),
    setCardsToMatched: (id) => dispatch(setCardsToMatched(id)),
    resetTimer: () => dispatch(resetTimer()),
    resetCardsActive: () => dispatch(resetCardsActive()),
    hideAll: () => dispatch(hideAll()),
    nextPlayer: () => dispatch(nextPlayer()),
    addPoint: (id) => dispatch(addPoint(id)),

  });
  

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(CardsGrid);
  

  