export interface IProps {
  color: IColors;
}

export type ICases = {
  isThirdCase?: boolean;
};

export type IRenderRowsCases = {
  isThird: boolean;
};

export type IColors = 'red' | 'green' | 'yellow' | 'blue';

export type IStyle = {
  color: IColors;
};
