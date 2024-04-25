import { useState ,useEffect} from 'react'
import React from 'react'

import './Game.css'
import Square from './components/Square';
const INITIAL_GAME_STATE=["","","","","","","","",""];
const WINNING_COMBOS=[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6],
]



function Game() {
  const [gameState,setGameState]=useState(INITIAL_GAME_STATE);
  const [curPlayer,setCurPlayer]=useState<string>("X");
  useEffect(()=>{
    checkWinner();
  },[gameState])
  const resetBoard=()=>{
    setGameState(INITIAL_GAME_STATE);
  }
  const handleWin=()=>{

        window.alert(`Congrate player ${curPlayer} ! You are the winner`);
        resetBoard();
  }
  const handleDraw=()=>{
        window.alert(`Game is over in a draw !`);
        resetBoard();
  }

  const checkWinner=()=>{
    let roundWon=false;
    for(let i=0;i<WINNING_COMBOS.length;i++){
      const winCom=WINNING_COMBOS[i];
      const a =gameState[winCom[0]];
      const b =gameState[winCom[1]];
      const c =gameState[winCom[2]];
      if([a,b,c].includes("")){
        continue;
      }
      if(a===b && b===c){
        roundWon=true;
        break;
      }
    }
      if(roundWon){
        setTimeout(()=>handleWin(),500);
        return;
      }
      if(!gameState.includes("")){

        setTimeout(()=>handleDraw(),500);
        return;
      }
  }
  const changePlayer=()=>{

  }
  const handleClick=(event:React.MouseEvent<HTMLElement>)=>{
        const el=event.target as HTMLElement;
        const currentIndex=Number(el.getAttribute("data-cell-index")); 
        const currentValue=gameState[currentIndex] ;
        if(currentValue){
            return;
        }
        const newGameState=[...gameState];
        newGameState[currentIndex]=curPlayer;
        setGameState(newGameState);
        curPlayer==="X"?setCurPlayer("O"):setCurPlayer("X");
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
              <div>Scores Go Here </div>
            </div>
        </div>
        </>
}

export default Game 
