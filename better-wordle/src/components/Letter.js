import React from 'react'
import '../index.css';
import { useContext } from 'react';
import { AppContext } from '../App';
import { useEffect } from 'react';
import styled, {keyframes} from 'styled-components';
import {flip} from 'react-animations';
import { shake } from 'react-animations';

const Flip = styled.div`animation: 1s ${keyframes`${flip}`}`;
const Shake = styled.div`animation: 1s ${keyframes`${shake}`}`;

function Letter({LetterPos, attemptVal}) {
    const {board,word,currAtt,getWord,guessedLetters,setGuessedLetters,animate,setAnimate} = useContext(AppContext);
    const letter = board[attemptVal][LetterPos];

    const guessWord = word;
    

    const correct = guessWord.toUpperCase()[LetterPos] === letter;
  const almost =
    !correct && letter !== "" && guessWord.toUpperCase().includes(letter);
  const letterState =
    currAtt.attempt > attemptVal &&
    (correct ? "correct" : almost ? "almost" : "error");

    useEffect (() => {
      if (letter !== "" && !correct && !almost ){
        setGuessedLetters((guessedLetters) => [...guessedLetters, letter])
      }
    } , [currAtt.attempt]
    )

  return (
    <div className=" md:w-16 md:h-16 flex align-middle justify-center p-2 md:text-4xl font-semibold border-gray-500 border-2 text-white w-12 h-12 text-xl" id={letterState}>
      {" "}
      {animate ? <Flip><div>{letter}</div></Flip>: <Shake><div>{letter}</div></Shake>}
    </div>
    
  )

  
}


export default Letter

