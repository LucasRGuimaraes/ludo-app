import React from 'react';
import PlayerBase from '../playerBase';
import PlayerSideBoard from '../playerSideBoard/';
import PlayerWinPlace from '../playerWinPlace';
import * as Styles from './styles';
import { IProps } from './types';

const PlayerBoard: React.FC<IProps> = ({ colors, positions }) => {
  return (
    <Styles.PlayerBoard color={colors} position={positions}>
      <PlayerBase color={colors} />
      <PlayerSideBoard color={colors} />
      <PlayerWinPlace color={colors} />
    </Styles.PlayerBoard>
  );
};

export default PlayerBoard;
