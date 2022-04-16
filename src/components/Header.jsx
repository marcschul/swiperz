export default function Header(props) {

  const player1 = props.player1;
  const player2 = props.player2;

  return (
    <div className="text-6xl">
    <h1>SWIPERZ</h1>
      <div className="flex justify-center text-2xl">
        <h2 className="px-10">{player1}</h2>
        <h2> VS </h2>
        <h2 className="px-10">{player2}</h2>
      </div>
    </div>
  )
}
