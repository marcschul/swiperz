import React from 'react';
import axios from 'axios';


export default function NewGame(props) {
  
  const setAppState = props.setAppState;

  return (
    <div>
      <button onClick={() => {
        localStorage.setItem('player1', 1)
        setAppState(prevState => ({
          ...prevState,
          currentPlayer: 1
        }));


      }}>New</button>
    </div>
  )
}
