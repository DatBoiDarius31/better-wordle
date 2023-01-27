

function Hint(hints) {

  let sylDomState = hints.syllables;
  let typeDomState = hints.type;
  let speechDomState = hints.speech;


  const typeClick = () => {
      document.getElementById('type').innerHTML= typeDomState; 
  }

  const sylClick = () =>{
    document.getElementById('syllables').innerHTML= sylDomState;
  }

  const speechClick = () =>{
    document.getElementById('speech').innerHTML=speechDomState ;
  }
  return (
    <div className="flex flex-row gap-3 justify-center pt-5 h-auto w-auto">
      <button className='bg-[#b59f3b]  rounded-sm p-1 px-2 text-2xl text-white hover:bg-[#000000] hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300'   onClick={typeClick} id = 'type'> Type </button>
      <button className='bg-[#b59f3b]  rounded-sm p-1 px-2 text-2xl text-white hover:bg-[#000000] hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300'  onClick={sylClick} id = 'syllables'> Syllables </button>
      <button className='bg-[#b59f3b]  rounded-sm p-1 px-2 text-2xl text-white hover:bg-[#000000] hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300'  onClick={speechClick} id = 'speech'> Part of Speech</button>
    </div>
  )
}

  


export default Hint
