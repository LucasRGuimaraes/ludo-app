import styled from 'styled-components';
import { IStyle } from './types';

const allPositions = {
  'top-left': {
    rotate: '0deg',
    top: '0',
    left: '0',
  },
  'top-right': {
    rotate: '90deg',
    top: '-10%',
    left: '50%',
  },
  'bottom-right': {
    rotate: '180deg',
    top: '40%',
    left: '60%',
  },
  'bottom-left': {
    rotate: '-90deg',
    top: '50%',
    left: '10%',
  },
};

export const PlayerBoard = styled.div<IStyle>`
  width: 40%;
  height: 60%;
  transform: rotate(${({ position }) => allPositions[position].rotate});
  position: absolute;
  top: ${({ position }) => allPositions[position].top};
  left: ${({ position }) => allPositions[position].left};
`;
