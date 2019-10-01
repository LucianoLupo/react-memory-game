import React from 'react';
import { connect } from 'react-redux';

const CurrentPlayer= ({ playerActive, players }) => {
    return (
        <div>
            Current Player: {players[playerActive].name}
        </div>
    )
}

      
const mapStateToProps = (state) => {
    return { playerActive: state.players.active,
             players:  state.players.players
    };
};

  

  export default connect(
    mapStateToProps
  )(CurrentPlayer);
  

  