import { IStyle } from './../playersInfo/types';
import { endianness } from 'os';
import styled from 'styled-components';


const allPositions = {
    top: "flex-end",
    bottom: "flex-start"
}

export const PlayersInfo = styled.div`
    width: 325px;
    display: flex;
    align-items: center;
    margin-block: 5px;
    gap: 40px;
`

export const PlayerHeader = styled.div<IStyle>`
    width: 50%;
    display: flex;
    align-items: ${({ position }) => allPositions[position]};
    justify-content: center;
    gap: 5px;
    padding-inline: 20px;

    .playerName {
        font-size: 1.3rem;
        color: white;
    }

    .dice {
        width: 35px;
        height: 35px;
        background-color: white;
        border-radius: 4px;
        border: .5px solid black;
    }
`