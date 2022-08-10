import React, { useState } from 'react';
import PlayersHeader from '../playersHeader';
import * as Styles from './styles';
import { IProps } from './types';

const PlayersInfo: React.FC<IProps> = ({ firstName, secondName, positions }) => {
  return (
    <Styles.PlayersInfo>
      <PlayersHeader playerName={firstName} positions={positions} flexDirection="first"></PlayersHeader>
      <PlayersHeader playerName={secondName} positions={positions} flexDirection="second"></PlayersHeader>
    </Styles.PlayersInfo>
  );
};

export default PlayersInfo;
