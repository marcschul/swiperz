export default function Header(props) {

  const currentPlayer = props.currentPlayer;

  return (
    <div className="flex-col font-paint flex justify-center">
    <h1 className="pb-0 text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 xl:text-7xl xl:pb-2">SWIPERZ</h1>
      <div className="flex justify-center text-2xl xl:text-5xl">
      </div>
        <h2 className={currentPlayer === 1 ? 
          "pt-2 pb-2 text-2xl text-red-500 xl:text-4xl xl:pb-6" 
          : 
          "pt-2 pb-2 text-2xl text-green-500 xl:text-4xl xl:pb-6"}> 
          Player {currentPlayer}</h2>
    </div>
  )
}
