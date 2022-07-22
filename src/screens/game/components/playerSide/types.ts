export interface IProps {
    colors: IColors;
}

export type IColors = 'red' | 'green' | 'yellow' | 'blue';

export type IStyle = {
    color: IColors;
}