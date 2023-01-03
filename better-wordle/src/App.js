import { useState } from "react";
import newWord from "./Api";
import GetWord from "./components/GetWord";
import Word from "./components/Word";

function App(){

  const [word,setWord] = useState('');

  

  const handleClick = async () => {
    const result = await newWord();
    setWord(result);
    console.log(result);
  };

  const letterArray = Array.from(word);

  return(
    <div>
      <GetWord onClick = {handleClick}/>
      <Word letterArray = {letterArray}/>
    </div>
  );
};

export default App;