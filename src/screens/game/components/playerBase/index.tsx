import React from 'react';
import * as Styles from './styles';
import { IProps } from './types';

const PlayerBase: React.FC<IProps> = ({ color }) => {
  return (
    <Styles.PlayerBase color={color}>
      <div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Styles.PlayerBase>
  );
};

export default PlayerBase;
