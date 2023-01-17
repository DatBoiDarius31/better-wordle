import axios from "axios";

const getWord = async ({ word }) => {
  if (word == null) {
    console.log('got new word');
    const response = await axios.get(
      "https://wordsapiv1.p.rapidapi.com/words/?letters=5",
      {
        headers: {
          "X-RapidAPI-Key":
            "9cff33f985mshed9d57d381c437cp1ce676jsn2b6045075f6e",
          "X-RapidAPI-Host": "wordsapiv1.p.rapidapi.com",
        },
        params: {
          random: "true",
        },
      }
    );
    //console.log(response.data.word);
    return response.data.word;
  }

  else if(word != null) {
    console.log('checked word');
    const response = await axios.get(
        "https://wordsapiv1.p.rapidapi.com/words/{word}",
        {
          headers: {
            "X-RapidAPI-Key":
              "9cff33f985mshed9d57d381c437cp1ce676jsn2b6045075f6e",
            "X-RapidAPI-Host": "wordsapiv1.p.rapidapi.com",
          },
          params: {
            random: "true",
          },
        }
      );
      if(response.ok){
        console.log("word exist");
      }
      else if(response.status === 404){
        console.log("word does not exist");
      }
      else{
        console.log("something broke");
      }    
  }
};

export default getWord;
