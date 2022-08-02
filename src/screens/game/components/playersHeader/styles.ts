import { IStyle } from './types';
import styled from 'styled-components';


const allPositions = {
    top: "flex-end",
    bottom: "flex-start"
}

const allDirections = {
    first: "row",
    second: "row-reverse"
}


export const PlayerHeader = styled.div<IStyle>`
width: 50%;
display: flex;
flex-direction: ${({ flexDirection }) => allDirections[flexDirection]};
align-items: ${({ position }) => allPositions[position]};
justify-content: center;
gap: 5px;
padding-inline: 20px;
`

export const PlayerName = styled.h3`
font-size: 1.3rem;
color: white;
`

export const Dice = styled.div`
width: 35px;
height: 35px;
background-color: white;
border-radius: 4px;
border: .5px solid black;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
font-size: 1.5rem;
font-weight: bold;
`