import React from 'react'
import ResetGameButton from '../../components/resetGameButton/ResetGameButton';

import {GameOverContainer, TieContainer, ButtonBlock,WinnerContainer} from './gameOver.styles'; 
 const GameOver = ({players}) => {
    const winner = players[0].counter === players[1].counter ? null : 
    (players[0].counter > players[1].counter ? players[0] : players[1]) 
    return (
        <GameOverContainer>
            {winner ?
                
                <WinnerContainer>
                    <h3>The Winner is</h3>
                    <h1>{winner.name}</h1>
                    <h3>with</h3>
                    <h1>{winner.counter} points</h1>
                </WinnerContainer>
                 :
                <TieContainer style={{paddingTop:'100px'}}>
                <h1>We have a tie!</h1>
                </TieContainer>
            }
            <ButtonBlock>
               <ResetGameButton/>
            </ButtonBlock>
            
        </GameOverContainer>
    )
}

export default GameOver
