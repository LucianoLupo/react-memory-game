import React from 'react'
import ResetGameButton from '../../components/resetGameButton/ResetGameButton';

 const GameOver = ({players}) => {
    const winner = players[0].counter === players[1].counter ? null : 
    (players[0].counter > players[1].counter ? players[0] : players[1]) 
    return (
        <div>
            <div>
                {winner ? `The Winner is ${winner.name} with ${winner.counter} points` : `we have an empat`}
            </div>
            <ResetGameButton/>
        </div>
    )
}

export default GameOver
