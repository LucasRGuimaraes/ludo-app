export interface IProps {
    firstName: string;
    secondName: string;
    positions: IPositions;
}

export type IPositions = 'top' | 'bottom'

export type IStyle = {
    position: IPositions;
}