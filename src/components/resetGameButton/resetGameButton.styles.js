import styled from 'styled-components';


export const ButtonContainer = styled.div`
    width:100%;
    display:flex;
    justify-content:center;

`;




export const Button = styled.div`

    display: inline-block;
    border: none;
    border-radius: 50px;
    padding: 10px 45px;    
    margin: 0;
    text-decoration: none;
    background: rgba(204, 37, 37,1);
    color: #ffffff;
    font-family: sans-serif;
    cursor: pointer;
    text-align: center;
    transition: background 250ms ease-in-out, transform 150ms ease;
    -webkit-appearance: none;
    -moz-appearance: none;
    box-shadow: 0px 2px 33px -8px rgba(0,0,0,0.75);
    font-weight: bold;
    font-size: 12px;

    &:hover{
        background: rgba(0,150,219,1);
    }
    &:focus{
        outline: 0px solid #fff;
        outline-offset: -4px;
    }
    &:active {
        transform: scale(0.9);
    }
`;

