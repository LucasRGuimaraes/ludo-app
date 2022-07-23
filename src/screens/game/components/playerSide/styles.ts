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
  player1: {
    rotate: "0deg",
    top: "0",
    left: "0"
  },
  player2: {
    rotate: "90deg",
    top: "-75px",
    left: "375px"
  },
  player3: {
    rotate: "180deg",
    top: "300px",
    left: "450px"
  },
  player4: {
    rotate: "-90deg",
    top: "375px",
    left: "75px"
  },
}

export const PlayerSide = styled.div<IStyle>`
  width: 300px;
  height: 450px;
  transform: rotate(${({ position }) => allPositions[position].rotate});
  position: absolute;
  top: ${({ position }) => allPositions[position].top};
  left: ${({ position }) => allPositions[position].left};
`;

export const PlayerBase = styled.div<IStyle>`
  width: 100%;
  height: 300px;
  background-color: ${({ color }) => allColors[color]};
  border: 1px solid black;
  border-radius: 20px 0 0 0;
  padding: 35px;

  div {
    width: 230px;
    height: 230px;
    background-color: white;
    border: 1px solid black;
    border-radius: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-items: center;

    div {
      border: none;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: #d9d9d9;
    }
  }
`;

export const PlayerSideBoard = styled.div`
  width: 100%;
  height: 150px;
`;

export const FirstRow = styled.div<IStyle>`
  width: 100%;
  height: 50px;
  background-color: white;
  display: flex;
  flex-direction: row;

  div {
    border: 1px solid black;
    width: 50px;
    height: 100%;
  }

  div:nth-child(2) {
    background-color: ${({ color }) => allColors[color]};
  }
`;

export const SecondRow = styled.div<IStyle>`
  width: 100%;
  height: 50px;
  background-color: white;
  display: flex;
  flex-direction: row;

  div {
    border: 1px solid black;
    width: 50px;
    height: 100%;
    background-color: ${({ color }) => allColors[color]};
  }

  div:nth-child(1) {
    background-color: white;
  }
`;

export const ThirdRow = styled.div`
  width: 100%;
  height: 50px;
  background-color: white;
  display: flex;
  flex-direction: row;

  div {
    border: 1px solid black;
    width: 50px;
    height: 100%;
  }
`;
