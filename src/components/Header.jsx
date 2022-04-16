export default function Header(props) {

  const player1 = props.player1;
  const player2 = props.player2;

  return (
    <div className="flex-col font-paint flex justify-center">
    <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 pt-10">SWIPERZ</h1>
      <div className="flex justify-center text-2xl">
        <h2 className="p-2 text-red-500">{player1}</h2>
        <h2 className="p-2 font-extrabold text-slate-600"> VS </h2>
        <h2 className="p-2 text-green-300">{player2}</h2>
      </div>
    </div>
  )
}
