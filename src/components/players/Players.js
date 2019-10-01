import React from 'react'
import { connect } from 'react-redux';
import { nextPlayer } from '../../redux/players/players.actions';
import PlayerData from '../playerData/PlayerData';

const Players = ({ players }) => {
    console.log(players.players)
    return (
        <div>
            <PlayerData player={players.players[0]}/>
            <PlayerData player={players.players[1]}/>
        </div>
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
  

  