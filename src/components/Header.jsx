export default function Header(props) {

  const currentPlayer = props.currentPlayer;

  return (
    <div className="flex-col font-paint flex justify-center">
    <h1 className="p-2 text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">SWIPERZ</h1>
      <div className="flex justify-center text-2xl">
      </div>
        <h2 className={currentPlayer === 1 ? 
          "pt-2 pb-6 text-2xl text-red-500" 
          : 
          "pt-2 pb-6 text-2xl text-green-500"}> 
          Player {currentPlayer}</h2>
    </div>
  )
}
