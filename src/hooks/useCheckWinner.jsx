import { useEffect } from 'react';

const checkHorizontal = function (gameState, setAppState) {
  const board = gameState.board;
  for (let r = 0; r < 7; r++) {
    for (let c = 0; c < 7; c++) {
      if (board[r][c]) {
        if (board[r][c] === board[r][c + 1] && 
            board[r][c] === board[r][c + 2] &&
            board[r][c] === board[r][c + 3]) {
          const winner = board[r][c];
          console.log(`player ${winner} horizontal winner`)
          setAppState(prevState => ({
            ...prevState,
            message: `Player ${winner}`,
            currentPlayer: winner
          }))
          return winner;
        }
      }
    }
  }
}

const checkVertical = function (gameState, setAppState) {
  const board = gameState.board;
  for (let r = 3; r < 7; r++) {
    for (let c = 0; c < 7; c++) {
      if (board[r][c]) {
        if (board[r][c] === board[r - 1][c] &&
            board[r][c] === board[r - 2][c] &&
            board[r][c] === board[r - 3][c]) {
          const winner = board[r][c];
          console.log(`player ${winner} vertical winner`)    
          setAppState(prevState => ({
            ...prevState,
            message: `Player ${winner}`,
            currentPlayer: winner
          }))
          return winner;   
        }
      }
    }
  }
}

const checkDiagonalRight = function (gameState, setAppState) {
  const board = gameState.board;
  for (let r = 3; r < 7; r++) {
    for (let c = 0; c < 7; c++) {
      if (board[r][c]) {
        if (board[r][c] === board[r - 1][c + 1] &&
            board[r][c] === board[r - 2][c + 2] &&
            board[r][c] === board[r - 3][c + 3]) {
          const winner = board[r][c];
          console.log(`player ${winner} DiagonalRight winner`)    
          setAppState(prevState => ({
            ...prevState,
            message: `Player ${winner}`,
            currentPlayer: winner
          }))
          return winner;
        }
      }
    }
  }
}

const checkDiagonalLeft = function (gameState, setAppState) {
  const board = gameState.board;
  for (let r = 3; r < 7; r++) {
    for (let c = 0; c < 7; c++) {
      if (board[r][c]) {
        if (board[r][c] === board[r - 1][c - 1] &&
            board[r][c] === board[r - 2][c - 2] &&
            board[r][c] === board[r - 3][c - 3]) {
          const winner = board[r][c];
          console.log(`player ${winner} DiagonalLeft winner`)    
          setAppState(prevState => ({
            ...prevState,
            message: `Player ${winner}`,
            currentPlayer: winner
          }))
          return winner;
        }
      }
    }
  }
}

const checkDraw = function (gameState, setAppState) {
  const board = gameState.board;
  for (let r = 0; r < 7; r++) {
    for (let c = 0; c < 7; c++) {
      if (board[r][c] === 0) {
        return null;
      }
    }
  }
  console.log(`Draw Match`)
  setAppState(prevState => ({
    ...prevState,
    message: `No One`,
    currentPlayer: 'no one'
  }))
}
export default function useCheckWinner(gameState, setAppState) {

  // setGameState(prevState => ({
  //   ...prevState,
  //   message: 'Player Wins'
  // }))

  useEffect(() => {
    // call pathfinding algorithms here to check for winner
    console.log(checkHorizontal(gameState, setAppState));
    console.log(checkVertical(gameState, setAppState));
    console.log(checkDiagonalRight(gameState, setAppState));
    console.log(checkDiagonalLeft(gameState, setAppState));
    console.log(checkDraw(gameState, setAppState));    
  }, [gameState])

}