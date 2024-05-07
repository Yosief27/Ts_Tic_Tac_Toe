import { useState ,useEffect} from 'react'
import React from 'react'

import './Game.css'
import Square from './components/Square';

type scoreType={
  [key:string]:number
}
const INITIAL_GAME_STATE=["","","","","","","","",""];
const INITIAL_SCORE:scoreType={"X":0,"O":0};
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
  const [score,setScore]=useState(INITIAL_SCORE);
  useEffect(()=>{
    const storedScores=localStorage.getItem("scores");
    if(storedScores)setScore(JSON.parse(storedScores)); 
  
  },[])
  useEffect(()=>{
    checkWinner();
  },[gameState])
  const resetBoard=()=>{
    setGameState(INITIAL_GAME_STATE);
  
  } 
  const handleWin=()=>{

        window.alert(`Congrate player ${curPlayer} ! You are the winner`);
        const newScore=score[curPlayer]+1;
        const curScore={...score};
        curScore[curPlayer]=newScore;
        setScore(curScore);
        localStorage.setItem("scores",JSON.stringify(curScore))

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
      changePlayer();
  }
  const changePlayer=()=>{

        curPlayer==="X"?setCurPlayer("O"):setCurPlayer("X");
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
    }

  return <div className='flex items-center justify-center  '>
          <div className='grid h-screen w-full grid-cols-3 grid-rows-5 gap-2'>
              <div className='col-span-3  row-span-1 flex justify-center items-center    p-8 text-slate-800 bg-gradient-to-br  from-cyan-500 to-gray-500'>
                 <h1 className='text-center text-5xl mb-4 font-extrabold  text-white'>Tic Tac Toe</h1>
              </div>
              <div className='px-24 col-span-3  row-span-3 mx- flex justify-start items-center'>
                    <div className= "p-4 grid grid-cols-3 gap-3  bg-gradient-to-br  from-orange-500 to-gray-500 "> 
                      {gameState.map((player,index)=>(
                        <  Square  {...{player,index}} onClick={handleClick}/> 
                      ))}
                    </div>
              </div>
              <div className='col-span-3  row-span-  flex-none  p-8 text-slate-800 bg-gradient-to-br  from-teal-500 to-gray-500'>
                  <h1 className='mb-5'>It is player {curPlayer} turn !</h1> 
                  <p>Player X score is {score["X"]}  !</p> 
                  <p>Player O score is {score["O"]}  !</p> 
              </div>
          </div>
        </div>
}

export default Game 
