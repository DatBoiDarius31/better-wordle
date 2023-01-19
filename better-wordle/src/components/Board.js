import React, { useState } from "react";
import Letter from "./Letter";
import '../index.css';

function Board() {
  
  return (
    <div className="flex flex-col pt-3">
      <div className="flex flex-row justify-center gap-1 py-1">
        <Letter LetterPos={0} attemptVal={0} />
        <Letter LetterPos={1} attemptVal={0} />
        <Letter LetterPos={2} attemptVal={0} />
        <Letter LetterPos={3} attemptVal={0} />
        <Letter LetterPos={4} attemptVal={0} />
      </div>
      <div className="flex flex-row justify-center gap-1 py-1">
        <Letter LetterPos={0} attemptVal={1} />
        <Letter LetterPos={1} attemptVal={1} />
        <Letter LetterPos={2} attemptVal={1} />
        <Letter LetterPos={3} attemptVal={1} />
        <Letter LetterPos={4} attemptVal={1} />
      </div>
      <div className="flex flex-row justify-center gap-1 py-1">
        <Letter LetterPos={0} attemptVal={2} />
        <Letter LetterPos={1} attemptVal={2} />
        <Letter LetterPos={2} attemptVal={2} />
        <Letter LetterPos={3} attemptVal={2} />
        <Letter LetterPos={4} attemptVal={2} />
      </div>
      <div className="flex flex-row justify-center gap-1 py-1">
        <Letter LetterPos={0} attemptVal={3} />
        <Letter LetterPos={1} attemptVal={3} />
        <Letter LetterPos={2} attemptVal={3} />
        <Letter LetterPos={3} attemptVal={3} />
        <Letter LetterPos={4} attemptVal={3} />
      </div>
      <div className="flex flex-row justify-center gap-1 py-1">
        <Letter LetterPos={0} attemptVal={4} />
        <Letter LetterPos={1} attemptVal={4} />
        <Letter LetterPos={2} attemptVal={4} />
        <Letter LetterPos={3} attemptVal={4} />
        <Letter LetterPos={4} attemptVal={4} />
      </div>
      <div className="flex flex-row justify-center gap-1 py-1">
        <Letter LetterPos={0} attemptVal={5} />
        <Letter LetterPos={1} attemptVal={5} />
        <Letter LetterPos={2} attemptVal={5} />
        <Letter LetterPos={3} attemptVal={5} />
        <Letter LetterPos={4} attemptVal={5} />
      </div >
    </div>
  );
}

export default Board;
