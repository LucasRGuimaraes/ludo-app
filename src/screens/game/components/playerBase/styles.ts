import { IStyle } from './types';
import colors from '@layout/colors';
import styled from 'styled-components';

const allColors = {
    red: colors.boardColors.red,
    green: colors.boardColors.green,
    yellow: colors.boardColors.yellow,
    blue: colors.boardColors.blue,
  };

export const PlayerBase = styled.div<IStyle>`
  width: 100%;
  height: calc((100% / 3) * 2);
  background-color: ${({ color }) => allColors[color]};
  border: 0.5px solid black;
  border-radius: 20px 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div {
    width: 75%;
    height: 75%;
    background-color: white;
    border: 0.5px solid black;
    border-radius: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-items: center;

    div {
      border: none;
      width: 45%;
      height: 45%;
      border-radius: 50%;
      background-color: #d9d9d9;
    }
  }
`;