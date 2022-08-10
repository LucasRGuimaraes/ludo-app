import * as Styles from './styles';
import { IProps, IRenderRowsCases } from './types';

const PlayerSideBoard: React.FC<IProps> = ({ color }) => {
  const RenderRowsCases: React.FC<IRenderRowsCases> = ({ isThird }) => {
    return (
      <>
        {Array.from(Array(6).keys()).map((item) =>
          item === 2 && isThird ? <Styles.Case key={item} isThirdCase={true} /> : <Styles.Case key={item} />,
        )}
      </>
    );
  };

  return (
    <Styles.PlayerSideBoard>
      <Styles.FirstRow color={color}>
        <RenderRowsCases isThird={false}></RenderRowsCases>
      </Styles.FirstRow>

      <Styles.SecondRow color={color}>
        <RenderRowsCases isThird={false}></RenderRowsCases>
      </Styles.SecondRow>

      <Styles.ThirdRow>
        <RenderRowsCases isThird={true}></RenderRowsCases>
      </Styles.ThirdRow>
    </Styles.PlayerSideBoard>
  );
};

export default PlayerSideBoard;
