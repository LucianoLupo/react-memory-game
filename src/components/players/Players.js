import React from 'react'
import { connect } from 'react-redux';
import { nextPlayer } from '../../redux/players/players.actions';
import PlayerData from '../playerData/PlayerData';
import { PlayersContainer } from './players.styles';
const Players = ({ players }) => {
    return (
        <PlayersContainer>
            <PlayerData player={players.players[0]}/>
            <PlayerData player={players.players[1]}/>
        </PlayersContainer>
    )
}


      
const mapStateToProps = (state) => {
    return { players: state.players,
    };
};

const mapDispatchToProps = dispatch => ({
    nextPlayer: () => dispatch(nextPlayer())

  });
  

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Players);
  

  