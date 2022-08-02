export interface IProps {
    playerName: string;
    positions: IPositions;
    flexDirection: IDirections;
}

export type IPositions = 'top' | 'bottom'
export type IDirections = 'first' | 'second'

export type IStyle = {
    position: IPositions;
    flexDirection: IDirections;
}