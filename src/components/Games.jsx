import React from 'react'
import JoinGame from './JoinGame'
import NewGame from './NewGame'

export default function Games(props) {
  const setAppState = props.setAppState;

  return (
    <div className='flex-col text-3xl text-slate-200'>
      Games
      <hr></hr>
      <div className='flex justify-around'>          
        <NewGame 
          setAppState={setAppState}
        />
        <JoinGame />
      </div>
    </div>
  )
}
