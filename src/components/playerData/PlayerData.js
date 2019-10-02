import React from 'react'
import { PlayersDataContainer } from './playerData.styles'

const PlayersData = ({player}) => {
    return (
        <PlayersDataContainer>
            <h1> {player.name} </h1>
             
            <h3> Points: {player.counter} </h3>
        </PlayersDataContainer>
    )
}

export default PlayersData;
