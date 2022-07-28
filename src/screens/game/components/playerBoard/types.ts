export interface IProps {
    colors: IColors;
    positions: IPositions;
}

export type IColors = 'red' | 'green' | 'yellow' | 'blue';
export type IPositions = 'top-left' | 'top-right' | 'bottom-right' | 'bottom-left';

export type IStyle = {
    color: IColors;
    position?: IPositions;
}