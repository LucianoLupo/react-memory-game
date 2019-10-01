import React from 'react'
import CardsGrid from '../../components/cardsGrid/CardsGrid';
import Players from '../../components/players/Players';
import Timer from '../../components/timer/Timer';
import CurrentPlayer from '../../components/currentPlayer/CurrentPlayer';
import ResetGameButton from '../../components/resetGameButton/ResetGameButton';

export default function Game() {
    return (
        <div>
            <Timer/>
            <CurrentPlayer/>
            <CardsGrid/>
            <Players/>
            <ResetGameButton/>
            
        </div>
    )
}
