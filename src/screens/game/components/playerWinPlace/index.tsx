import { IProps } from './types';
import * as Styles from './styles';

const PlayerWinPlace: React.FC<IProps> = ({ color }) => {
  return (
    <Styles.PlayerWinPlace color={color}>
      <div className="triangle"></div>
      <div className="lineOne"></div>
      <div className="lineTwo"></div>
      <div className="lineThree"></div>
    </Styles.PlayerWinPlace>
  );
};

export default PlayerWinPlace;
