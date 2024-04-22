import { useState } from 'react'

import './Game.css'
const INITIAL_GAME_STATE=["X","O","X","O","X","O","X","O","X"];
function Game() {
  const [gameState,setGameState]=useState(INITIAL_GAME_STATE);
  return <>
          <div className='h-full p-8 text-slate-800 bg-gradient-to-br  from-cyan-500 to-gray-500'>
              <h1 className='text-center text-5xl mb-4 font-extrabold  text-white'>Tic Tac Toe</h1>
           <div>
              <div className='grid grid-cols-3 gap-3 mx-auto w-96'> 
                {gameState.map((item,index)=>(
                  <div key={index} className='h-36 border-solid border-4 border-slate-200 font-display text-7xl text-center flex justify-center items-center'>
                    {item}
                  </div>
                ))}
              </div>
              <div>Scores Go Here </div>
            </div>
        </div>
        </>
}

export default Game 
