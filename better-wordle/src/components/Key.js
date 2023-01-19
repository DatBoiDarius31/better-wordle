import React from 'react'
import { AppContext } from '../App';
import { useContext } from 'react';
import '../index.css'

function Key({keyVal, guessed}) {
    const {board,setBoard, currAtt,setCurrAtt,onDel,onEnter,onSelectLetter} = useContext(AppContext);

    const selectLetter = () => {
        if(keyVal === "Enter"){
            onEnter();
        }
        else if (keyVal === "Del"){
            onDel();
        }

        else{
            onSelectLetter(keyVal);
        }
        
    
        
    }
  return (
    <div className="md:text-4xl p-1 bg-[#939598] text-white md:w-10 md:min-w-fit md:h-14 rounded-sm flex justify-center align-middle w-6 min-w-fit h-10 text-2xl " id = {guessed && "guessed"} onClick={selectLetter} >
      {keyVal}
    </div>
  )
}

export default Key
