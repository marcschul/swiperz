export default function Header(props) {

  const currentPlayer = props.currentPlayer;
  const message = props.message;

  return (
    <div className="flex-col font-paint flex justify-center">
    <h1 className="pb-3 text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 xl:text-7xl xl:pb-8">{message}</h1>
      <div className="flex justify-center text-2xl xl:text-5xl">
      </div>
        <h2 className={currentPlayer === 1 ? 
          "pt-2 pb-5 text-2xl text-red-500 xl:text-4xl xl:pb-8" 
          : 
          "pt-2 pb-5 text-2xl text-green-500 xl:text-4xl xl:pb-8"}> 
          {message === 'SWIPERZ' ? `Player ${currentPlayer} add block` : `Wins!` }</h2>
    </div>
  )
}
