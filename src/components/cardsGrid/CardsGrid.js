import React, { useEffect } from 'react'
import Card from '../card/Card';
import { CardsRow } from './cardsGrid.styles';

function CardsGrid() {

    const cards = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16],[17,18,19,20]] 

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
  export default CardsGrid;
  

  