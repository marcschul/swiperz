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

      let nodeState;
      let nodeAccum = 0;
      for (const node of row) {
        // if node 4, winner
        // console.log('nodeState', nodeState)
        // console.log('node', node);
        if (nodeState === node && nodeState !== 0) {
          nodeAccum += 1;
        } else {
          nodeAccum = 0;
          nodeState = node;
        }
        console.log('nodeAccum', nodeAccum);
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
