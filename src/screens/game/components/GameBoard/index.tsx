import * as Styles from "./styles";
import PlayerSide from "../playerSide";

export default function GameBoard () {

    return (
        <Styles.Board>
            <PlayerSide colors="red" positions="player1"/>
            <PlayerSide colors="green" positions="player2"/>
            <PlayerSide colors="blue" positions="player4"/>
            <PlayerSide colors="yellow" positions="player3"/>
        </Styles.Board>
    )
}