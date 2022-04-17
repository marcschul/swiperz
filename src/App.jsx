import Header from "./components/Header";
import Grid from "./components/Board/Grid";
import Footer from "./components/Footer";
import { useState, useEffect } from 'react';

function App() {

  const [gameState, setGameState] = useState({
    player1: 'Player1',
    player2: 'Player2',
    currentPlayer: 1,
    gameOver: false,
    message: '',
    board: [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0]
    ]
  });

  const checkWinner = function (gameState) {
    const board = gameState.board;
    let results = false;


    for (const row of board) {

      let nodeState = row[0];
      // console.log(row[0])
      for (const node of row) {
        // if node 4x, winner
        
        if (nodeState === node) {
          console.log('true')
        }
      }
    }
    return results;
  }

  useEffect(() => {
    // call pathfinding algorithm here to check for winner
    checkWinner(gameState);
  }, [gameState])
  

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-6 rounded-lg text-center xl:p-8">
        <Header 
          currentPlayer={gameState.currentPlayer}
        />
        <Grid 
          gameState={gameState}
          setGameState={setGameState}
        />
        <Footer />
      </div>
    </div>
  );
}

export default App;
