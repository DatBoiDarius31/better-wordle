import React, { useContext } from 'react'
import { AppContext } from '../App'

function GameOver() {

    const {gameOver, setGameOver, word,currAtt,hints} = useContext(AppContext);
  return (
    <div className="flex flex-col align-middle justify-center text-center p-2 md:text-3xl font-semibold bg-color-500 border-2 text-white text-xl ">
      <h3>
        {gameOver.guessedWord ? "You Guessed the Word" : "Couldn't guess the word"}
      </h3>
      <h1 >Correct Word: {word.toUpperCase()} <br/> Defintion: {hints.def}</h1>
      {gameOver.guessedWord && (<h3> You guessed in {currAtt.attempt} attempts</h3>)}
    </div>
  )
}

export default GameOver
