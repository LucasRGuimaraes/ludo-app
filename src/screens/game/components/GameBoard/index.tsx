import { Board, FirstRow, PlayerBase, PlayerSide, PlayerSideBoard, SecondRow, ThirdRow } from "./styles";

export default function GameBoard () {

    return (
        <Board>
            <PlayerSide>
                <PlayerBase>
                    <div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </PlayerBase>
                <PlayerSideBoard>
                    <FirstRow>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </FirstRow>
                    <SecondRow>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </SecondRow>
                    <ThirdRow>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </ThirdRow>
                </PlayerSideBoard>
            </PlayerSide>
        </Board>
    )
}