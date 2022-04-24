import axios from 'axios';
import { useNavigate } from "react-router-dom";


export default function NewGame(props) {

  const navigate = useNavigate()
  
  const setGameState = props.setGameState;
  const setAppState = props.setAppState;

  return (
    <div>
      <button onClick={() => {
        localStorage.setItem('player1', 1)
        
        axios.post('/games', {})
        .then(function (response) {
          const gameId = response.data[0]
          navigate(`game/${gameId}`);
          setAppState(prevState => ({
            ...prevState,
            player1: response.data[1],
            player2: response.data[2],
            currentPlayer: JSON.parse(response.data[3]),
            gameOver: JSON.parse(response.data[4]),
            message: response.data[5],
          }));
          setGameState(prevState => ({
            ...prevState,
            board: response.data[6],
          }));
        })
        .catch(function (error) {
          console.log(error);
        });
      }}>New</button>
    </div>
  )
}
