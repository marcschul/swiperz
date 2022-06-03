import React from "react";
import NewGame from "./NewGame";

export default function Games(props) {
  const setAppState = props.setAppState;
  const setGameState = props.setGameState;
  const gameState = props.gameState;
  const appState = props.appState;

  return (
    <div className="flex-col text-3xl text-slate-200">
      Please wait
      <hr></hr>
      <div className="flex justify-around">
        {appState.currentPlayer === 0 ? (
          <h1>Loading game...</h1>
        ) : (
          <NewGame
            gameState={gameState}
            setGameState={setGameState}
            appState={appState}
            setAppState={setAppState}
          />
        )}
      </div>
    </div>
  );
}
