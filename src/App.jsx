import Header from "./components/Header";
import Grid from "./components/Board/Grid";
import Footer from "./components/Footer";
import { useState } from 'react';
import useCheckWinner from "./hooks/useCheckWinner";

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
  
  useCheckWinner(gameState);

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
