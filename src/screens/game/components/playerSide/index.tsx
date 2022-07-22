import React from 'react';
import * as Styles from './styles';
import { IProps } from './types';

const PlayerSide: React.FC<IProps> = ({ colors }) => {
  
  return (
    <Styles.PlayerSide color={colors}>
      <Styles.PlayerBase color={colors}>
        <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </Styles.PlayerBase>
      <Styles.PlayerSideBoard>
        <Styles.FirstRow color={colors}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </Styles.FirstRow>
        <Styles.SecondRow color={colors}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </Styles.SecondRow>
        <Styles.ThirdRow>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </Styles.ThirdRow>
      </Styles.PlayerSideBoard>
    </Styles.PlayerSide>
  );
}

export default PlayerSide;