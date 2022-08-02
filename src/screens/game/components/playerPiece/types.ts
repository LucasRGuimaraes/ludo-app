export interface IProps {
    color: IColors;
    position: IPositions;
}

export type IPositions = {
    top: number;
    left: number;
    right: number;
    bottom: number;
};

export type IColors = 'red' | 'green' | 'yellow' | 'blue';

export type IStyle = {
    color: IColors;
    position: IPositions;
}