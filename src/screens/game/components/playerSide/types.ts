export interface IProps {
    colors: IColors;
    positions?: IPositions;
}

export type IColors = 'red' | 'green' | 'yellow' | 'blue';
export type IPositions = 'player1' | 'player2' | 'player3' | 'player4';

export type IStyle = {
    color: IColors;
    position?: IPositions;
}