import { useState } from "react";
import { IProps } from "./types";
import * as Styles from './styles';


const PlayersHeader: React.FC<IProps> = ({ playerName, positions, flexDirection}) => {

    const [diceNumber, setDiceNumber] = useState(0)

    function rollDice () {
        const randomNumber = Math.floor(Math.random() * 6) + 1;
        setDiceNumber(randomNumber)
    }

    return (
        <Styles.PlayerHeader position={positions} flexDirection={flexDirection}>
            <Styles.PlayerName>{playerName}</Styles.PlayerName>
            <Styles.Dice onClick={rollDice}>{diceNumber}</Styles.Dice>
        </Styles.PlayerHeader>
    )
}

export default PlayersHeader