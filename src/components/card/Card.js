import React from 'react';
import { connect } from 'react-redux';

import { CardContainer } from './card.styles';


const Card = ({card:{ idToMatch }}) => {

    return (
        <CardContainer>
            <h2>img {idToMatch} </h2>
        </CardContainer>
    )
}


const mapStateToProps = (state) => {
    return {
        state:state
    };
};

  

  export default connect(
    mapStateToProps
  )(Card);
  
