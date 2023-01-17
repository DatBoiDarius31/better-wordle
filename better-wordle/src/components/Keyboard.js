import React, { useCallback } from 'react'
import Key from './Key';
import { useEffect } from 'react';
import { AppContext } from '../App';
import { useContext } from 'react';

function Keyboard() {

  const {onSelectLetter,onDel,onEnter} = useContext(AppContext);  

  const keys1 = ["Q","W","E","R","T","Y","U","I","O","P"];
  const keys2 = ["A","S","D","F","G","H","J","K","L"];
  const keys3 = ["Z","X","C","V","B","N","M"];
 
  const handleKeyboard = useCallback((event) => {
    if (event.key === "Enter"){
      onEnter();
    }
    else if(event.key === "Backspace"){
        onDel()
      }
    else{
      keys1.forEach((key) => {
        if (event.key.toLowerCase() === key.toLowerCase()){
          onSelectLetter(key);
        }
      });
      keys2.forEach((key) => {
        if (event.key.toLowerCase() === key.toLowerCase()){
          onSelectLetter(key);
        }
      });
      keys3.forEach((key) => {
        if (event.key.toLowerCase() === key.toLowerCase()){
          onSelectLetter(key);
        }
      });
    }
  })
 
  useEffect(() =>{
    document.addEventListener("keydown", handleKeyboard);

    return () => {
      document.removeEventListener("keydown", handleKeyboard);
  }
  }, [handleKeyboard]);

 


  return (
    <div>
      <div className='flex justify-center gap-2 p-1 w-auto' onKeyDown={handleKeyboard}>
        {keys1.map((key) => {
        return <Key keyVal = {key}/>;
        })}
      </div>
      <div className='flex justify-center gap-2 p-1'>
      {keys2.map((key) => {
        return <Key keyVal = {key} bigKey/>;
        })}
      </div>
      <div className='flex justify-center gap-2 p-1'>
        <Key keyVal={"Enter"}/>
      {keys3.map((key) => {
        return <Key keyVal = {key}/>;
        })}
        <Key keyVal={"Del"} bigKey/>
      </div>
    </div>
  )
  
}

export default Keyboard;

