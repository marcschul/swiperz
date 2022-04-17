import Node from "./Node"

export default function Grid(props) {

  const GRID_ROW_LENGTH = 7;
  const GRID_COL_LENGTH = 7;

  const grid = [];
  
  for (let row = 0; row < GRID_ROW_LENGTH; row++) {

    const currentRow = [];
    for (let col = 0; col < GRID_COL_LENGTH; col++) {
      currentRow.push(<Node state={`${props.gameState.board[row][col]}`}/>);
    }
    grid.push(currentRow);

  }

  return (
      <table className="flex justify-center text-slate-300">
        <tbody>
          {grid.map((item, index) => {
            return (
              <tr key={`${index}`} className="max-h-[20px]">
                
                {/* LEFT BUTTON */}
                <td key={`${index + '0'}`} 
                    className="font-paint text-slate-700 text-4xl p-0 m-0">
                    <button 
                    onClick={() => {
                    for (let i = 0; i < props.gameState.board[index].length; i++) {
                      if (!props.gameState.board[index][i]) {
                        const newBoard = [...props.gameState.board];
                        newBoard[index][i] = props.gameState.currentPlayer;

                        let newPlayer;
                        if (props.gameState.currentPlayer === 1) {
                          newPlayer = 2;
                        }
                        if (props.gameState.currentPlayer === 2) {
                          newPlayer = 1;
                        }
                        
                        props.setGameState(prevState => ({
                          ...prevState,
                          board: newBoard,
                          currentPlayer: newPlayer
                        }))
                        break;
                      }
                    }
                    console.log(props.gameState)
                  }}>+
                  </button>
                  </td>

                {/* ROW */}
                <td key={`${index + '1'}`} >{item[0]}</td>
                <td key={`${index + '2'}`} >{item[1]}</td>
                <td key={`${index + '3'}`} >{item[2]}</td>
                <td key={`${index + '4'}`} >{item[3]}</td>
                <td key={`${index + '5'}`} >{item[4]}</td>
                <td key={`${index + '6'}`} >{item[5]}</td>
                <td key={`${index + '7'}`} >{item[6]}</td>


                {/* RIGHT BUTTON */}
                <td key={`${index + '9'}`} 
                    className="font-paint text-slate-700 text-4xl p-0 m-0">
                    <button 
                    onClick={() => {
                    for (let i = props.gameState.board[index].length - 1; i >= 0; i--) {
                      if (!props.gameState.board[index][i]) {
                        const newBoard = [...props.gameState.board];
                        newBoard[index][i] = props.gameState.currentPlayer;

                        let newPlayer;
                        if (props.gameState.currentPlayer === 1) {
                          newPlayer = 2;
                        }
                        if (props.gameState.currentPlayer === 2) {
                          newPlayer = 1;
                        }
                        
                        props.setGameState(prevState => ({
                          ...prevState,
                          board: newBoard,
                          currentPlayer: newPlayer
                        }))
                        break;
                      }
                    }
                    console.log(props.gameState)
                  }}>+
                  </button>
                  </td>

              </tr>
            );
          })}
        </tbody>
      </table>
  );
}
