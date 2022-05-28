import Node from "./Node";
import axios from "axios";
import { useEffect } from "react";

export default function Grid(props) {
  const GRID_ROW_LENGTH = 7;
  const GRID_COL_LENGTH = 7;

  const currentPlayer = props.appState.currentPlayer;
  const board = props.gameState.board;
  const gameOver = props.appState.gameOver;
  const gameState = props.gameState;
  const appState = props.appState;

  useEffect(() => {
    axios
      .put("/games", {
        gameState,
        appState,
      })
      .catch((error) => {
        console.log(error);
      });
  }, [gameState, appState]);

  const grid = [];

  for (let row = 0; row < GRID_ROW_LENGTH; row++) {
    const currentRow = [];
    for (let col = 0; col < GRID_COL_LENGTH; col++) {
      currentRow.push(<Node state={`${board[row][col]}`} />);
    }
    grid.push(currentRow);
  }

  return (
    <table className="flex justify-center text-slate-300">
      <tbody>
        {grid.map((item, index) => {
          return (
            <tr key={`${index}`} className="max-h-[20px]">
              {/* LEFT BUTTON */}
              <td
                key={`${index + "0"}`}
                className={
                  currentPlayer === 1
                    ? "font-paint text-slate-700 text-4xl p-0 m-0 hover:text-red-500 xl:text-7xl"
                    : "font-paint text-slate-700 text-4xl p-0 m-0 hover:text-green-500 xl:text-7xl"
                }
              >
                <button
                  onClick={() => {
                    if (gameOver) return;

                    for (let i = 0; i < board[index].length; i++) {
                      if (!board[index][i]) {
                        const newBoard = [...board];
                        newBoard[index][i] = currentPlayer;

                        // const newPlayer = currentPlayer === 1 ? 2 : 1;
                        let newPlayer;
                        if (currentPlayer === 1) {
                          newPlayer = 2;
                        }
                        if (currentPlayer === 2) {
                          newPlayer = 1;
                        }

                        props.setGameState((prevState) => ({
                          ...prevState,
                          board: newBoard,
                        }));

                        props.setAppState((prevState) => ({
                          ...prevState,
                          currentPlayer: newPlayer,
                        }));

                        break;
                      }
                    }
                  }}
                >
                  +
                </button>
              </td>

              {/* ROWS */}
              <td key={`${index + "1"}`}>{item[0]}</td>
              <td key={`${index + "2"}`}>{item[1]}</td>
              <td key={`${index + "3"}`}>{item[2]}</td>
              <td key={`${index + "4"}`}>{item[3]}</td>
              <td key={`${index + "5"}`}>{item[4]}</td>
              <td key={`${index + "6"}`}>{item[5]}</td>
              <td key={`${index + "7"}`}>{item[6]}</td>

              {/* RIGHT BUTTON */}
              <td
                key={`${index + "9"}`}
                className={
                  currentPlayer === 1
                    ? "font-paint text-slate-700 text-4xl p-0 m-0 hover:text-red-500 xl:text-7xl"
                    : "font-paint text-slate-700 text-4xl p-0 m-0 hover:text-green-500 xl:text-7xl"
                }
              >
                <button
                  onClick={() => {
                    if (gameOver) return;

                    for (let i = board[index].length - 1; i >= 0; i--) {
                      if (!board[index][i]) {
                        const newBoard = [...board];
                        newBoard[index][i] = currentPlayer;

                        let newPlayer;
                        if (currentPlayer === 1) {
                          newPlayer = 2;
                        }
                        if (currentPlayer === 2) {
                          newPlayer = 1;
                        }

                        props.setGameState((prevState) => ({
                          ...prevState,
                          board: newBoard,
                        }));

                        props.setAppState((prevState) => ({
                          ...prevState,
                          currentPlayer: newPlayer,
                        }));
                        break;
                      }
                    }
                  }}
                >
                  +
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
