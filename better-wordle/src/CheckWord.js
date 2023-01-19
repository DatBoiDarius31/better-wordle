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
      )
      if (response.status === 200) { // response - object, eg { status: 200, message: 'OK' }
      console.log('success stuff');
     return true;
    }
    else if(response.status === 404){
      console.log("word not found");
      return false;
    }
  }catch(error){
    return false;
  }
}

  export default checkWord;

