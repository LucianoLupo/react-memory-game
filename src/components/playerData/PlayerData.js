import React from 'react'
const PlayersData = ({player}) => {
    return (
        <div>
            {player.name} 
            Counter:{player.counter}
        </div>
    )
}

export default PlayersData;
