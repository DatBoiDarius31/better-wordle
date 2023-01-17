import React from 'react'
import '../index.css';
import { useContext } from 'react';
import { AppContext } from '../App';

function Letter({LetterPos, attemptVal}) {
    const {board,word,currAtt,getWord} = useContext(AppContext);
    const letter = board[attemptVal][LetterPos];

    const guessWord = word;

    const correct = guessWord.toUpperCase()[LetterPos] === letter;
  const almost =
    !correct && letter !== "" && guessWord.toUpperCase().includes(letter);
  const letterState =
    currAtt.attempt > attemptVal &&
    (correct ? "correct" : almost ? "almost" : "error");

  return (
    <div className=" md:w-16 md:h-16 flex align-middle justify-center p-2 md:text-4xl font-semibold border-gray-500 border-2 text-white w-12 h-12 text-xl" id={letterState}>
      {" "}
      {letter}
    </div>
  )
}

export default Letter
