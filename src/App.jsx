import Header from "./components/Header";
import Grid from "./components/Board/Grid";
import Footer from "./components/Footer";
import Games from "./components/Games";
import useCheckWinner from "./hooks/useCheckWinner";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [appState, setAppState] = useState({
    player1: "Player1",
    player2: "Player2",
    currentPlayer: 0,
    gameOver: false,
    message: "SWIPERZ",
  });

  const [gameState, setGameState] = useState({
    board: [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
    ],
  });

  useCheckWinner(gameState, setAppState);

  useEffect(() => {
    const getUpdate = async () => {
      axios.get("/games").then((response) => {
        setAppState((prevState) => ({
          ...prevState,
          player1: response.data[1],
          player2: response.data[2],
          currentPlayer: JSON.parse(response.data[3]),
          gameOver: JSON.parse(response.data[4]),
          message: response.data[5],
        }));
        setGameState((prevState) => ({
          ...prevState,
          board: response.data[6],
        }));
      });
    };

    getUpdate();

    const reqInterval = setInterval(() => {
      getUpdate();
    }, 1000);

    return () => {
      clearInterval(reqInterval);
    };
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-6 rounded-lg text-center xl:p-8">
        <Header
          currentPlayer={appState.currentPlayer}
          message={appState.message}
        />
        {appState.currentPlayer !== 0 ? (
          <Grid
            gameState={gameState}
            setGameState={setGameState}
            appState={appState}
            setAppState={setAppState}
          />
        ) : (
          <Games
            gameState={gameState}
            setGameState={setGameState}
            appState={appState}
            setAppState={setAppState}
          />
        )}

        <Footer />
      </div>
    </div>
  );
}

export default App;
