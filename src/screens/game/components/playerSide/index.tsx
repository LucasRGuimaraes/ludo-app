import React from 'react';
import * as Styles from './styles';
import { IProps } from './types';

const PlayerSide: React.FC<IProps> = ({ colors, positions }) => {
  
  return (
    <Styles.PlayerSide color={colors} position={positions}>
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
      <Styles.PlayerWinPlace color={colors}>
        <div className="triangle"></div>
        <div className="lineOne"></div>
        <div className="lineTwo"></div>
        <div className="lineThree"></div>
      </Styles.PlayerWinPlace>
    </Styles.PlayerSide>
  );
}

export default PlayerSide;