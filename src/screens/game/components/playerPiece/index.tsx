import * as Styles from './styles';
import { IProps } from './types';

const PlayerPiece: React.FC<IProps> = ({ color, position }) => {
  return <Styles.PlayerPice color={color} position={position} />;
};

export default PlayerPiece;
