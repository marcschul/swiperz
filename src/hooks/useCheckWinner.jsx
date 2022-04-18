import { useEffect } from 'react';

const checkHorizontal = function (gameState) {
  const board = gameState.board;
  for (let r = 0; r < 7; r++) {
    for (let c = 0; c < 7; c++) {
      if (board[r][c]) {
        if (board[r][c] === board[r][c + 1] && 
            board[r][c] === board[r][c + 2] &&
            board[r][c] === board[r][c + 3]) {
          const winner = board[r][c];
          console.log(`player ${winner} horizontal winner`)    
          return winner;
        }
      }
    }
  }
}

const checkVertical = function (gameState) {
  const board = gameState.board;
  for (let r = 3; r < 7; r++) {
    for (let c = 0; c < 7; c++) {
      if (board[r][c]) {
        if (board[r][c] === board[r - 1][c] &&
            board[r][c] === board[r - 2][c] &&
            board[r][c] === board[r - 3][c]) {
          const winner = board[r][c];
          console.log(`player ${winner} vertical winner`)    
          return winner;    
        }
      }
    }
  }
}

const checkDiagonalRight = function (gameState) {
  const board = gameState.board;
  for (let r = 3; r < 7; r++) {
    for (let c = 0; c < 7; c++) {
      if (board[r][c]) {
        if (board[r][c] === board[r - 1][c + 1] &&
            board[r][c] === board[r - 2][c + 2] &&
            board[r][c] === board[r - 3][c + 3]) {
          const winner = board[r][c];
          console.log(`player ${winner} DiagonalRight winner`)    
          return winner;
        }
      }
    }
  }
}

const checkDiagonalLeft = function (gameState) {
  const board = gameState.board;
  for (let r = 3; r < 7; r++) {
    for (let c = 0; c < 7; c++) {
      if (board[r][c]) {
        if (board[r][c] === board[r - 1][c - 1] &&
            board[r][c] === board[r - 2][c - 2] &&
            board[r][c] === board[r - 3][c - 3]) {
          const winner = board[r][c];
          console.log(`player ${winner} DiagonalLeft winner`)    
          return winner;
        }
      }
    }
  }
}

const checkDraw = function (gameState) {
  const board = gameState.board;
  for (let r = 0; r < 7; r++) {
    for (let c = 0; c < 7; c++) {
      if (board[r][c] === 0) {
        return null;
      }
    }
  }
  console.log(`Draw Match`) 
}
export default function useCheckWinner(gameState) {

  useEffect(() => {
    // call pathfinding algorithm here to check for winner
    console.log(checkHorizontal(gameState));
    console.log(checkVertical(gameState));
    console.log(checkDiagonalRight(gameState));
    console.log(checkDiagonalLeft(gameState));
    console.log(checkDraw(gameState));
  }, [gameState])

}