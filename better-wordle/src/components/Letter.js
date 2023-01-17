import React from 'react'
import '../index.css';
import { useContext } from 'react';
import { AppContext } from '../App';

function Letter({LetterPos, attemptVal}) {
    const {} = useContext(AppContext);
    const letter = board[attemptVal][LetterPos];
  return (
    <div className=" w-16 h-16 flex align-middle justify-center text-2xl border-gray-500 border-2 text-white">
      {letter}
    </div>
  )
}

export default Letter
