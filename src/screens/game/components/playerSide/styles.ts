import styled from 'styled-components';

export const PlayerSide = styled.div`
    width: 300px;
    height: 450px;
`

export const PlayerBase = styled.div`
    width: 100%;
    height: 66.6%;
    background-color: ${({theme}) => theme.boardColors.red};
    border: 1px solid black;
    border-radius: 20px 0 0 0;
    padding: 35px;

    div {
        width: 230px;
        height: 230px;
        background-color: white;
        border: 1px solid black;
        border-radius: 20px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        justify-items: center;

        div {
            border: none;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background-color: #D9D9D9;
        }
    }
`

export const PlayerSideBoard = styled.div`
    width: 100%;
    height: 33.3%;
`

export const FirstRow = styled.div`
    width: 100%;
    height: 33.3%;
    background-color: white;
    display: flex;
    flex-direction: row;
    
    div {
        border: 1px solid black;
        width: 16.66%;
        height: 100%;
    }

    div:nth-child(2) {
        background-color: ${({theme}) => theme.boardColors.red};
    }
`

export const SecondRow = styled.div`
    width: 100%;
    height: 33.3%;
    background-color: white;
    display: flex;
    flex-direction: row;
    
    div {
        border: 1px solid black;
        width: 16.66%;
        height: 100%;
        background-color: ${({theme}) => theme.boardColors.red};
    }
    
    div:nth-child(1) {
        background-color: white;
    }
`

export const ThirdRow = styled.div`
    width: 100%;
    height: 33.3%;
    background-color: white;
    display: flex;
    flex-direction: row;
    
    div {
        border: 1px solid black;
        width: 16.66%;
        height: 100%;
    }
`