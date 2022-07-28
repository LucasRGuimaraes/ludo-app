import styled from "styled-components";
import { IStyle } from "./types";
import colors from "@layout/colors";

const allColors = {
  red: colors.boardColors.red,
  green: colors.boardColors.green,
  yellow: colors.boardColors.yellow,
  blue: colors.boardColors.blue,
};

const allPositions = {
  "top-left": {
    rotate: "0deg",
    top: "0",
    left: "0"
  },
  "top-right": {
    rotate: "90deg",
    top: "-10%",
    left: "50%"
  },
  "bottom-right": {
    rotate: "180deg",
    top: "40%",
    left: "60%"
  },
  "bottom-left": {
    rotate: "-90deg",
    top: "50%",
    left: "10%"
  },
}

export const PlayerBoard = styled.div<IStyle>`
  width: 40%;
  height: 60%;
  transform: rotate(${({ position }) => allPositions[position].rotate});
  position: absolute;
  top: ${({ position }) => allPositions[position].top};
  left: ${({ position }) => allPositions[position].left};
`;

export const PlayerSideBoard = styled.div`
  width: 100%;
  height: calc(100% / 3);
`;

export const FirstRow = styled.div<IStyle>`
  width: 100%;
  height: calc(100% / 3);
  background-color: white;
  display: flex;
  flex-direction: row;

  div {
    border: .5px solid black;
    width: calc(100% / 3);
  }

  div:nth-child(2) {
    background-color: ${({ color }) => allColors[color]};
  }
`;

export const SecondRow = styled.div<IStyle>`
  width: 100%;
  height: calc(100% / 3);
  background-color: white;
  display: flex;
  flex-direction: row;

  div {
    border: .5px solid black;
    width: calc(100% / 3);
    height: 100%;
    background-color: ${({ color }) => allColors[color]};
  }

  div:nth-child(1) {
    background-color: white;
  }
`;

export const ThirdRow = styled.div`
  width: 100%;
  height: calc(100% / 3);
  background-color: white;
  display: flex;
  flex-direction: row;

  div {
    border: .5px solid black;
    width: calc(100% / 3);
    height: 101%;
  }
`;

export const PlayerWinPlace = styled.div<IStyle>`
  
  width: 50%;
  height: calc(100% / 3);
  position: absolute;
  top: calc((100% / 3) * 2);
  left: 100%;

  .triangle {
    border: calc(65px / 2) solid transparent;
    border-left: calc(65px / 2) solid ${({ color }) => allColors[color]};
  }

  .lineOne {
    width: .5px;
    height: 100%;
    background: #000;
    position: absolute;
    top: 0px;
  }

  .lineTwo {
    width: .5px;
    height: calc(70% + 1px);
    background: #000;
    transform: rotate(45deg);
    position: absolute;
    top: calc(40% - 1px);
    left: 25%;
  }

  .lineThree {
    width: .5px;
    height: calc(70% + 1px);
    background: #000;
    transform: rotate(-45deg);
    position: absolute;
    top: -10%;
    left: 25%;
  }
`