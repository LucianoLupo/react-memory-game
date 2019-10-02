import styled from 'styled-components';
import { animated } from 'react-spring';

export const CardContainer = styled(animated.div)`
width:80px;
left:-40px;
height: 90px;
top:-45px;
position:absolute;
background-color: aqua;
box-shadow: 0px 6px 31px -13px rgba(0,0,0,0.75);
text-align:center;
cursor:pointer

`

export const CardBoxContainer = styled.div`
position:relative;
transition: transform 150ms ease;


&:hover {
    transform: scale(1.1);
}
`