import { useState } from "react";
import newWord from "./Api";
import GetWord from "./components/GetWord";
import Guesses from "./components/Guesses";

function App(){

  const [word,setWord] = useState('');

  

  const handleClick = async () => {
    const result = await getWord();
    setWord(result);
    console.log(result);
  };

  const letterArray = Array.from(word);

  return(
    <div>
      <GetWord onClick = {handleClick}/>
      <Guesses letterArray = {letterArray} onSubmit= {handleSubmit}/>
    </div>
  );
};

export default App;