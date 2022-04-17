export default function Block(props) {

  let classState;
  
  if (props.state === '0') {
    classState = "bg-white mx-1 min-w-[25px] min-h-[25px] xl:min-w-[50px] xl:min-h-[50px] xl:m-2 rounded-xl";
  }

  if (props.state === '1') {
    classState = "bg-red-500 mx-1 min-w-[25px] min-h-[25px] xl:min-w-[50px] xl:min-h-[50px] xl:m-2 rounded-xl";
  }

  if (props.state === '2') {
    classState = "bg-green-500 mx-1 min-w-[25px] min-h-[25px] xl:min-w-[50px] xl:min-h-[50px] xl:m-2 rounded-xl";
  }

  return (
    <div className={classState}>
    </div>
  )
}
