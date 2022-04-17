import Header from "./components/Header";
import Grid from "./components/Board/Grid";
import {useState} from 'react'

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

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-6 rounded-lg text-center">
        <Header 
          player1={gameState.player1}
          player2={gameState.player2}
        />
        <Grid 
          gameState={gameState}
          setGameState={setGameState}
        />
      </div>
    </div>
  );
}

export default App;
