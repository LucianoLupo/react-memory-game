import React, { useEffect } from 'react'
import { connect } from 'react-redux';

import { createDeck } from '../../redux/cards/cards.actions';
import Card from '../card/Card';

import { CardsRow } from './cardsGrid.styles';

function CardsGrid({ cardsRedux, create }) {

    const toMatrix = (arr, width) => 
    arr.reduce((rows, key, index) => (index % width === 0 ? rows.push([key]) 
      : rows[rows.length-1].push(key)) && rows, []);

    

    useEffect(() => {
        create();
    }, [])
    const cards = toMatrix(cardsRedux.cards, 4)


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

    };
};

const mapDispatchToProps = dispatch => ({
    create: () => dispatch(createDeck()),
  });
  

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(CardsGrid);
  

  