import * as Styles from "./styles";
import PlayerBoard from "../playerBoard";

export default function GameBoard () {

    return (
        <Styles.Board>
            <PlayerBoard colors="red" positions="top-left"/>
            <PlayerBoard colors="green" positions="top-right"/>
            <PlayerBoard colors="blue" positions="bottom-right"/>
            <PlayerBoard colors="yellow" positions="bottom-left"/>
        </Styles.Board>
    )
}