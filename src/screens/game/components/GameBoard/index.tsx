import * as Styles from "./styles";
import PlayerSide from "../playerSide";

export default function GameBoard () {

    return (
        <Styles.Board>
            <PlayerSide colors="red" />
            <PlayerSide colors="green" />
            <PlayerSide colors="blue" />
            <PlayerSide colors="yellow" />
        </Styles.Board>
    )
}