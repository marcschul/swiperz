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
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false]
    ]
  });

  return (
    <div className="bg-slate-500 text-slate-300 flex-col text-center mx-auto md:container md:mx-auto xl:mt-20 rounded-lg xl:w-[900px] p-10 bg-gradient-to-r from-cyan-500 to-blue-500">
      <Header 
        player1={gameState.player1}
        player2={gameState.player2}
      />
      <Grid 
        gameState={gameState}
        setGameState={setGameState}
      />
    </div>
  );
}

export default App;
