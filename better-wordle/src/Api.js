import axios from "axios";

const getWord = async ({ word }) => {
  if (word == '') {
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
    return response.data.word;
  }

  else if(word === '') {
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
      return response.data.word;
  }
};

export default newWord;
