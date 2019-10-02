import styled from 'styled-components';


export const CardsRow = styled.div`
    z-index:1;
    display: flex;
    justify-content:space-evenly;
    background-color: transparent;
    max-width:600px;
    margin:0 auto;
    width: 450px;
`;

export const CardsContainer = styled.div`
    z-index:1;
    height:600px;
    width:100vw;
    position: absolute;
    display: flex;
    justify-content:space-evenly;
    flex-direction:column;
    background-color: transparent;
    margin:0 auto;
    top:10%;
`