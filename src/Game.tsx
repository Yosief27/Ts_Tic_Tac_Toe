import { useState } from 'react'
import React from 'react'

import './Game.css'
import Square from './components/Square';
const INITIAL_GAME_STATE=["X","O","X","O","X","O","O","O","X"];
function Game() {
  const [gameState,setGameState]=useState(INITIAL_GAME_STATE);
  const [element,setElement]=useState<string|null>("u");
  const handleClick=(event:React.MouseEvent<HTMLElement>)=>{
        const el=event.target as HTMLElement;
        const val=el.getAttribute("data-cell-index"); 
        setElement(val);
    }

  return <>
          <div className='h-full p-8 text-slate-800 bg-gradient-to-br  from-cyan-500 to-gray-500'>
              <h1 className='text-center text-5xl mb-4 font-extrabold  text-white'>Tic Tac Toe</h1>
           <div>
              <div className='grid grid-cols-3 gap-3 mx-auto w-96'> 
                {gameState.map((player,index)=>(
                 <Square  {...{player,index}} onClick={handleClick}/> 
                ))}
              </div>
              <div>Scores Go Here---{element} </div>
            </div>
        </div>
        </>
}

export default Game 
