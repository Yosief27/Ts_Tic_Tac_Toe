import { useState } from 'react'

import './Game.css'

function Game() {

  return <>
          <div className='h-full p-8 text-slate-800 bg-gradient-to-br  from-cyan-500 to-gray-500'>
              <h1 className='text-center text-5xl mb-4 font-extrabold  text-white'>Tic Tac Toe</h1>
           <div>
              <div> Board Goes Here! </div>
              <div>Scores Go Here </div>
            </div>
        </div>
        </>
}

export default Game 
