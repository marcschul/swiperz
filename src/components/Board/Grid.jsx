import Node from "./Node"

export default function Grid(props) {

  const GRID_ROW_LENGTH = 7;
  const GRID_COL_LENGTH = 7;

  const grid = [];
  
  for (let row = 0; row < GRID_ROW_LENGTH; row++) {
    const currentRow = [];
    for (let col = 0; col < GRID_COL_LENGTH; col++) {
      currentRow.push(<Node />);
    }
      grid.push(currentRow);
  }

  return (
    <div className="flex justify-center">
      <table>
        <tbody className="m-">
          {grid.map((item, index) => {
            return (
              <tr key={`${index}`}>
                
                {/* LEFT BUTTON */}
                <td key={`${index + '0'}`} 
                    className="border-2" onClick={() => {
                    for (let i = 0; i < props.gameState.board[index].length; i++) {
                      if (!props.gameState.board[index][i]) {
                        const newBoard = [...props.gameState.board];
                        newBoard[index][i] = true;
                        props.setGameState(prevState => ({
                          ...prevState,
                          board: newBoard
                        }))
                        break;
                      }
                    }
                    console.log(props.gameState)
                  }}>L-button</td>

                {/* ROW */}
                <td key={`${index + '1'}`} >{item[1]}</td>
                <td key={`${index + '2'}`} >{item[2]}</td>
                <td key={`${index + '3'}`} >{item[3]}</td>
                <td key={`${index + '4'}`} >{item[4]}</td>
                <td key={`${index + '5'}`} >{item[5]}</td>
                <td key={`${index + '6'}`} >{item[6]}</td>
                <td key={`${index + '7'}`} >{item[7]}</td>


                {/* RIGHT BUTTON */}
                <td key={`${index + '8'}`}  className="border-2" onClick={() => {
                    console.log('right button click', 'index ===', index); 
                  }}>R-button</td>

              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
