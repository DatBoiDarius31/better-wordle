import axios from "axios";

const getWord = async () => {
    console.log('got new word');
    const response = await axios.get(
      "https://wordsapiv1.p.rapidapi.com/words/",
      {
        headers: {
          "X-RapidAPI-Key":
            "9cff33f985mshed9d57d381c437cp1ce676jsn2b6045075f6e",
          "X-RapidAPI-Host": "wordsapiv1.p.rapidapi.com",
        },
        params: {
          letters: '5',
          hasDetails: 'typeOf',
          random: 'true'
          
        },
      }
    );
    console.log(response);
    return response.data.word;
  }

export default getWord;
