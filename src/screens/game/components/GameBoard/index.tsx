import * as Styles from "./styles";
import PlayerSide from "../playerSide";

export default function GameBoard () {

    return (
        <Styles.Board>
            <PlayerSide />
            <PlayerSide />
            <PlayerSide />
            <PlayerSide />
        </Styles.Board>
    )
}