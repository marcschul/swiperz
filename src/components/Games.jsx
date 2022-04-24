import React from 'react'
import JoinGame from './JoinGame'
import NewGame from './NewGame'

export default function Games(props) {
  const setAppState = props.setAppState;
  const setGameState = props.setGameState;
  const gameState = props.gameState;
  const appState = props.appState;


  return (
    <div className='flex-col text-3xl text-slate-200'>
      Games
      <hr></hr>
      <div className='flex justify-around'>          
        <NewGame 
          gameState={gameState}
          setGameState={setGameState}
          appState={appState}
          setAppState={setAppState}
        />
        <JoinGame />
      </div>
    </div>
  )
}
