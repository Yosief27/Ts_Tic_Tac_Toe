import {ReactNode} from 'react'
import React from 'react'
type SqurareProps={
    player:string;
    index:number;
    onClick(event:React.MouseEvent<HTMLElement>):void;
} 
const Square = ({player,index,onClick}:SqurareProps) => {
    const scale=player?"scale-100":"scale-0";
    const textColor=player==="X"?"text-yellow-200":"text-fuchsia-300";
    const hoverStyle="transition duration-300 hover:scale-105 transform";
  return (
                    <div  
                        className={`h-36 border-solid border-4 border-slate-200 font-display text-7xl text-center flex justify-center items-center ${hoverStyle}`}
                        data-cell-index={index}
                        {...{onClick}} 
                        >
                            <span 
                                className={`transform translate-all duration-150 ease-out ${scale} ${textColor} ${hoverStyle}`}
                                data-cell-index={index}
                            >
                                {player}
                            </span> 
                    </div>
  )
}

export default Square