import * as Styles from "./styles";
import PlayerBoard from "../playerBoard";
import PlayerPiece from "../playerPiece";
import { useState } from "react";

export default function GameBoard() {
  const [position, setPosition] = useState({
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  });

  function randomPosition() {
    const top = Math.floor(Math.random() * 300) + 1;
    const left = Math.floor(Math.random() * 300) + 1;
    const right = Math.floor(Math.random() * 300) + 1;
    const bottom = Math.floor(Math.random() * 300) + 1;

    setPosition({ top, left, right, bottom });
  }

  return (
    <>
      <div onClick={randomPosition}>AAAAAA</div>
      <Styles.Board>
        <PlayerPiece color="red" position={position} />

        <PlayerBoard colors="red" positions="top-left" />
        <PlayerBoard colors="green" positions="top-right" />
        <PlayerBoard colors="blue" positions="bottom-right" />
        <PlayerBoard colors="yellow" positions="bottom-left" />
      </Styles.Board>
    </>
  );
}
