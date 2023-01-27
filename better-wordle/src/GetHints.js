
import axios from 'axios';

const GetHints = async (word) => {
    const hints = {syllables: null, type: null, speech: null, def: null};
    console.log('got info');
    try{
      const response = await axios.get(
        "https://wordsapiv1.p.rapidapi.com/words/"+ word,
        {
          headers: {
            "X-RapidAPI-Key":
              "9cff33f985mshed9d57d381c437cp1ce676jsn2b6045075f6e",
            "X-RapidAPI-Host": "wordsapiv1.p.rapidapi.com",
          },
        }
      )
      if (response.status === 200) { // response - object, eg { status: 200, message: 'OK' }
        //console.log(response.data);
        hints.syllables = response.data.syllables.count.toString();
        //console.log(hints.syllables);
        hints.speech = response.data.results[0].partOfSpeech;
        //console.log(hints.speech);
        hints.def = response.data.results[0].definition;
        //console.log(hints.def);
        hints.type = response.data.results[0].typeOf[0];
        //console.log(hints.type);
        //console.log(hints);
     return hints;
    }
    else if(response.status === 404){
      console.log("word not found");
      return false;
    }
  }catch(error){
    return false;
  }

}

export default GetHints
