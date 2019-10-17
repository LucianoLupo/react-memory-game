import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useSpring } from 'react-spring';

import { CardContainer,CardBoxContainer } from './card.styles';
import { revealCard, addCardActive, setCardsToMatched } from '../../redux/cards/cards.actions';
import { resetTimer } from '../../redux/timer/timer.actions';



const Card = ({ card:{ idToMatch, hidden, uid }, reveal,addCardActive, cardsActive  }) => {

    const { transform, opacity, zIndex } = useSpring({
        opacity: hidden ? 1 : 0,
        transform: `perspective(600px) rotateY(${hidden ? 180 : 0}deg)`,
        zIndex: hidden ? 1 : 0,
        config: { mass: 5, tension: 500, friction: 80 }
      })
  
    const handleCardClick = (uid) => {
        if(cardsActive.length < 2 && hidden){
            reveal(uid)
            addCardActive({idToMatch:idToMatch, uid:uid});
        }
    }
    
    return (
            <CardBoxContainer>
                <CardContainer 
                style={{ opacity: opacity.interpolate(o => 1 - o),zIndex: zIndex.interpolate(o => 1 - o), transform }} >
                    <h2> {idToMatch} </h2>
                </CardContainer>
                <CardContainer onClick={() => handleCardClick(uid)} style={{ opacity, transform: transform.interpolate(t => `${t}`) }}>
                    <h2 style={{ transform:'rotateY(180deg)'}}> ? </h2>
                </CardContainer>
            </CardBoxContainer>
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
  

  