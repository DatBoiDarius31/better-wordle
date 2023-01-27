import { useCallback, useState } from "react";
import { createContext } from "react";
import getWord from "./Api";
import { blankBoard } from "./Words";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import "./index.css";
import { useEffect } from "react";
import checkWord from "./CheckWord";
import GameOver from "./components/GameOver";
import Hint from "./components/Hint";
import GetHints from "./GetHints";

export const AppContext = createContext();

function App() {
  const [word, setWord] = useState("");
  const [board, setBoard] = useState(blankBoard);
  const [currAtt, setCurrAtt] = useState({ attempt: 0, letterPos: 0 });
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [gameOver, setGameOver] = useState({gameOver: false, guessedWord: false});
  const [animate, setAnimate] = useState(false);
  const [hints , setHints] = useState({syllables: "Syllables", type: "Type", speech: "Speech", def: "Definition"});
  let wordHints = {};
  let doAnimate = null;

  const stop = useCallback(() => {
    return null;
  }, []);

useEffect(() => {
    async function fetchData(){
    const result = await getWord("");
    setWord(result);
    console.log(result);
    const wordHints = await GetHints(result);
    console.log(wordHints);
    if(wordHints === false){
      fetchData();
    }
    setHints({syllables: wordHints.syllables, type: wordHints.type, speech: wordHints.speech, def: wordHints.def});
  }
    fetchData();
  }, [stop]);

  const onSelectLetter = (keyVal) => {
    if (currAtt.letterPos > 4) return;
    const currBoard = [...board];
    currBoard[currAtt.attempt][currAtt.letterPos] = keyVal;
    setBoard(currBoard);
    setCurrAtt({ ...currAtt, letterPos: currAtt.letterPos + 1 });
  };

  const onDel = () => {
    if (currAtt.letterPos === 0) return;
    const currBoard = [...board];
    currBoard[currAtt.attempt][currAtt.letterPos - 1] = "";
    setBoard(currBoard);
    setCurrAtt({ ...currAtt, letterPos: currAtt.letterPos - 1 });
  };

  const onEnter = async () => {
    if (currAtt.letterPos !== 5) return;

    let currWord = "";

    for (let i = 0; i < 5; i ++){
      currWord += board[currAtt.attempt][i];
    }
    console.log(currWord);
    currWord = currWord.toLowerCase();

    if( await checkWord(currWord)){
      setCurrAtt({ attempt: currAtt.attempt + 1, letterPos: 0 });
      doAnimate = true;
      setAnimate(doAnimate);
    }
    else{
      doAnimate = false;
      setAnimate(doAnimate);
    }

    if( currWord === word){
      setGameOver({gameOver: true, guessedWord: true});
      doAnimate = true;
      setAnimate(doAnimate);
      return;
    }

    if(currAtt.attempt === 5){
      setGameOver({gameOver: true, guessedWord: false});
      console.log("loser")
      return;
    }
    
  };

 

  

  return (
    <div className=" h-screen bg-cover bg-neutral-800 w-auto">
      <h1 className="text-4xl pb-2 flex justify-center text-white border-b-2" >
        Better Wordle
      </h1 >
      <AppContext.Provider value={{ board, setBoard, currAtt, setCurrAtt,onDel,onEnter,onSelectLetter,word,getWord,guessedLetters,setGuessedLetters,setGameOver,gameOver,animate,hints}}>
        <Board />
        {gameOver.gameOver ? <GameOver/> : <Keyboard />}
        < Hint {...hints}/>
      </AppContext.Provider>
    </div>
  );
}

export default App;
