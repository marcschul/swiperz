import Node from "./Node"

export default function Grid() {

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
        <tbody>
          {grid.map((item, index) => {
            return (
              <tr>
                <td onClick={() => {console.log('left button click')}}>L-button</td>
                <td>{item[0]}</td>
                <td>{item[1]}</td>
                <td>{item[2]}</td>
                <td>{item[3]}</td>
                <td>{item[4]}</td>
                <td>{item[5]}</td>
                <td>{item[6]}</td>
                <td onClick={() => {console.log('right button click')}}>R-button</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
