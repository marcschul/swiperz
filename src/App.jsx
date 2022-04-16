import Header from "./components/Header";
import Board from "./components/Board/Board";

function App() {
  return (
    <div className="bg-slate-500 text-slate-300 flex-col text-center mx-auto md:container md:mx-auto">
      <Header />
      <Board />
    </div>
  );
}

export default App;
