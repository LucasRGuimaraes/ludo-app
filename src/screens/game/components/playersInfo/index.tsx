import React from 'react';
import * as Styles from './styles';
import { IProps } from './types';

const PlayersInfo: React.FC<IProps> = ({ firstName, secondName, positions }) => {
    
    return (
        <Styles.PlayersInfo>
            <Styles.PlayerHeader position={positions}>
                <h3 className='playerName'>{firstName}</h3>
                <div className='dice'></div>
            </Styles.PlayerHeader>
            <Styles.PlayerHeader position={positions}>
                <div className='dice'></div>
                <h3 className='playerName'>{secondName}</h3>
            </Styles.PlayerHeader>
        </Styles.PlayersInfo>
    )
}

export default PlayersInfo