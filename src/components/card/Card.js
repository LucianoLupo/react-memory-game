import React from 'react';
import { connect } from 'react-redux';

import { CardContainer } from './card.styles';
import { revealCard, addCardActive, setCardsToMatched } from '../../redux/cards/cards.actions';
import { resetTimer } from '../../redux/timer/timer.actions';



const Card = ({ card:{ idToMatch, hidden, uid }, reveal,addCardActive, cardsActive  }) => {


    const handleCardClick = (uid) => {
        if(cardsActive.length < 2 && hidden){
            reveal(uid)
            addCardActive({idToMatch:idToMatch, uid:uid});

        }

    }
    
    return (
        <CardContainer onClick={() => handleCardClick(uid)}>
           { hidden  ? <h2></h2> :
            <h2>img {idToMatch} </h2>}
        </CardContainer>
    )
}


const mapStateToProps = (state) => {
    return {
             cardsActive: state.cards.cardsActive
    };
};

const mapDispatchToProps = dispatch => ({
    reveal: (uid) =>  dispatch(revealCard(uid)),
    addCardActive: (card) => dispatch(addCardActive(card)),
    setCardsToMatched: (id) => dispatch(setCardsToMatched(id)),
    resetTimer: () => dispatch(resetTimer()),

  });
  

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Card);
  

  