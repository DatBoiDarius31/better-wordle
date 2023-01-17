import { useCallback, useState } from "react";
import { createContext } from "react";
import getWord from "./Api";
import { blankBoard } from "./Words";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import "./index.css";
import { useEffect } from "react";

export const AppContext = createContext();

function App() {
  const [word, setWord] = useState("");
  const [board, setBoard] = useState(blankBoard);
  const [currAtt, setCurrAtt] = useState({ attempt: 0, letterPos: 0 });
  const correctWord = "";

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

  const onEnter = () => {
    if (currAtt.letterPos !== 5) return;
    setCurrAtt({ attempt: currAtt.attempt + 1, letterPos: 0 });
  };

  const stop = useCallback(() => {
    return null;
  }, []);

  useEffect(() => {
    async function fetchData(){
    const result = await getWord("");
    setWord(result);
    console.log(result);
    }
    fetchData();
  }, [stop]);

  return (
    <div className=" h-screen bg-cover bg-neutral-800 w-auto">
      <h1 className="text-4xl pb-2 flex justify-center text-white border-b-2" >
        Better Wordle
      </h1 >
      <AppContext.Provider value={{ board, setBoard, currAtt, setCurrAtt,onDel,onEnter,onSelectLetter,word,getWord}}>
        <Board />
        <Keyboard />
      </AppContext.Provider>
    </div>
  );
}

export default App;
