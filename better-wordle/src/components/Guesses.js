import Guess from "./Guess.js";


function Guesses({letterArray}){

    const letterCount = letterArray.length;

    console.log(letterCount);

return (
    <div>
        <Guess letterCount = {letterCount} />
        <Guess letterCount = {letterCount} />
        <Guess letterCount = {letterCount} />
        <Guess letterCount = {letterCount} />
        <Guess letterCount = {letterCount} />
    </div>
    );
};

export default Guesses;