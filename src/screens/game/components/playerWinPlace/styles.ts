import { IStyle } from './types';
import styled from 'styled-components';
import colors from '@layout/colors';

const allColors = {
  red: colors.boardColors.red,
  green: colors.boardColors.green,
  yellow: colors.boardColors.yellow,
  blue: colors.boardColors.blue,
};

export const PlayerWinPlace = styled.div<IStyle>`
  width: 50%;
  height: calc(100% / 3);
  position: absolute;
  top: calc((100% / 3) * 2);
  left: 100%;

  .triangle {
    border: calc(65px / 2) solid transparent;
    border-left: calc(65px / 2) solid ${({ color }) => allColors[color]};
  }

  .lineOne {
    width: 0.5px;
    height: 100%;
    background: #000;
    position: absolute;
    top: 0px;
  }

  .lineTwo {
    width: 0.5px;
    height: calc(70% + 1px);
    background: #000;
    transform: rotate(45deg);
    position: absolute;
    top: calc(40% - 1px);
    left: 25%;
  }

  .lineThree {
    width: 0.5px;
    height: calc(70% + 1px);
    background: #000;
    transform: rotate(-45deg);
    position: absolute;
    top: -10%;
    left: 25%;
  }
`;
