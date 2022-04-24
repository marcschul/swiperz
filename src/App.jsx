import Header from "./components/Header";
import Grid from "./components/Board/Grid";
import Footer from "./components/Footer";
import Games from "./components/Games";
import { useState } from 'react';
import useCheckWinner from "./hooks/useCheckWinner";

function App() {

  const [appState, setAppState] = useState({
    player1: 'Player1',
    player2: 'Player2',
    currentPlayer: 0,
    gameOver: false,
    message: 'SWIPERZ',
  });

  const [gameState, setGameState] = useState({
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
  
  useCheckWinner(gameState, setAppState);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-6 rounded-lg text-center xl:p-8">
        <Header 
          currentPlayer={appState.currentPlayer}
          message={appState.message}
        />
        {appState.currentPlayer !== 0 ? <Grid 
          gameState={gameState}
          setGameState={setGameState}
          appState={appState}
          setAppState={setAppState}
        /> : 
        <Games 
          setAppState={setAppState}
        />}

          <Footer />
      </div>
    </div>
  );
}

export default App;
