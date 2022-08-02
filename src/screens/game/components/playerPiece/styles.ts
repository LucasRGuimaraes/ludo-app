import colors from '@layout/colors';
import { IStyle } from './types';
import styled from 'styled-components';

const allColors = {
    red: colors.pieceColors.red,
    green: colors.pieceColors.green,
    yellow: colors.pieceColors.yellow,
    blue: colors.pieceColors.blue,
  };


export const PlayerPice = styled.div<IStyle>`
    height: 15px;
    width: 15px;
    border-radius: 50%;
    background-color: ${({ color }) => allColors[color]};
    position: absolute;
    z-index: 9999;
    top: ${({ position }) => position.top}px;
    left: ${({ position }) => position.left}px;
    right: ${({ position }) => position.right}px;
    bottom: ${({ position }) => position.bottom}px;
    border: 1.5px solid black;

    transition: 1s ease;
`