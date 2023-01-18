import axios from "axios";

const checkWord = async ( currWord ) => {
    console.log('checked word');
    try{
    const response = await axios.get(
        "https://wordsapiv1.p.rapidapi.com/words/"+currWord,
        {
          headers: {
            "X-RapidAPI-Key":
              "9cff33f985mshed9d57d381c437cp1ce676jsn2b6045075f6e",
            "X-RapidAPI-Host": "wordsapiv1.p.rapidapi.com",
          },
        }
      );
    }catch (err){
        console.error("Error response:");
        console.error(err.response.data);    
        console.error(err.response.status);  
        console.error(err.response.headers); 
        console.log("false");
        return false;
    }
    console.log("true");
  }

  export default checkWord;

