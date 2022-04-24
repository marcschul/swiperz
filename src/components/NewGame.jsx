import {useEffect, useState} from 'react';
import axios from 'axios';

export default function NewGame(props) {
  
  const setAppState = props.setAppState;
  const setGameState = props.setGameState;
  const gameState = props.gameState;
  const appState = props.appState;

  // const [newGame, setNewGame] = useState(false);

  // useEffect(() => {
  //   axios.post('/games', {
  //     gameState,
  //     appState
  //   })
  //   .then(function (response) {
  //     console.log('axios response...',response);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
  //   console.log('newGame', newGame)
  // }, [newGame])
  

  return (
    <div>
      <button onClick={() => {
        localStorage.setItem('player1', 1)
        // setNewGame(!newGame)
        setAppState(prevState => ({
          ...prevState,
          currentPlayer: 1
        }));

        axios.post('/games', {
          gameState,
          appState
        })
        .then(function (response) {
          console.log('axios response...',response);
        })
        .catch(function (error) {
          console.log(error);
        });
      }}>New</button>
    </div>
  )
}
