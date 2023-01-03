import Letter from "./Letter.js";


function Word({letterArray}){

    const letterCount = letterArray.length;

    console.log(letterCount);

return (
    <div>
        <Letter letterCount = {letterCount} />
    </div>
    );
};

export default Word;