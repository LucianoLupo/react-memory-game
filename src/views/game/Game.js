import React from 'react'
import CardsGrid from '../../components/cardsGrid/CardsGrid';
import Players from '../../components/players/Players';
import Timer from '../../components/timer/Timer';
import CurrentPlayer from '../../components/currentPlayer/CurrentPlayer';
import ResetGameButton from '../../components/resetGameButton/ResetGameButton';

import { GameContainer, HeaderContainer, ResetButtonContainer,Header } from './game.styles';

export default function Game() {
    return (
        <GameContainer>
            <HeaderContainer>
                <Header>
                    <CurrentPlayer/>
                    <Timer/>
                </Header>
            </HeaderContainer>
            <CardsGrid/>
            <Players/>
            <ResetButtonContainer>
                <ResetGameButton/> 
            </ResetButtonContainer>
            
        </GameContainer>
    )
}
