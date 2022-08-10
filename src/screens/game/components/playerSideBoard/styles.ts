import { IStyle, ICases } from './types';
import colors from '@layout/colors';
import styled from 'styled-components';

const allColors = {
  red: colors.boardColors.red,
  green: colors.boardColors.green,
  yellow: colors.boardColors.yellow,
  blue: colors.boardColors.blue,
};

export const PlayerSideBoard = styled.div`
  width: 100%;
  height: calc(100% / 3);
`;

export const FirstRow = styled.div<IStyle>`
  width: 100%;
  height: calc(100% / 3);
  background-color: white;
  display: flex;
  flex-direction: row;

  div {
    border: 0.5px solid black;
    width: calc(100% / 3);
  }

  div:nth-child(2) {
    background-color: ${({ color }) => allColors[color]};
  }
`;

export const SecondRow = styled.div<IStyle>`
  width: 100%;
  height: calc(100% / 3);
  background-color: white;
  display: flex;
  flex-direction: row;

  div {
    border: 0.5px solid black;
    width: calc(100% / 3);
    height: 100%;
    background-color: ${({ color }) => allColors[color]};
  }

  div:nth-child(1) {
    background-color: white;
  }
`;

export const ThirdRow = styled.div`
  width: 100%;
  height: calc(100% / 3);
  background-color: white;
  display: flex;
  flex-direction: row;
`;

export const Case = styled.div<ICases>`
  border: 0.5px solid black;
  width: calc(100% / 3);
  height: 101%;

  background-color: ${({ isThirdCase }) => (isThirdCase ? '#CEC9C1' : 'white')};
`;
