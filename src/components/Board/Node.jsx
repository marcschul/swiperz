import { useEffect, useState } from 'react'

export default function Block(props) {

  let classState;
  
  if (props.state === '0') {
    classState = "bg-white m-1 min-w-[25px] min-h-[25px]";
  }

  if (props.state === '1') {
    classState = "bg-red-500 m-1 min-w-[25px] min-h-[25px]";
  }

  if (props.state === '2') {
    classState = "bg-green-500 m-1 min-w-[25px] min-h-[25px]";
  }

  return (
    <div className={classState}>
    </div>
  )
}
