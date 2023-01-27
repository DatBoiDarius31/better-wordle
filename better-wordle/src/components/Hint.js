

function Hint(hints) {
  return (
    <div className="flex flex-row gap-3 justify-center pt-5 h-auto w-auto">
      <button className='bg-[#b59f3b] rounded-sm p-1 px-2 text-2xl text-white hover:bg-[#000000] hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300 hover:before:"type"'  id = 'type'> {hints.type} </button>
      <button className='bg-[#b59f3b] rounded-sm p-1 px-2 text-2xl text-white hover:bg-[#000000] hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300'  id = 'syllables'> {hints.syllables} </button>
      <button className='bg-[#b59f3b] rounded-sm p-1 px-2 text-2xl text-white hover:bg-[#000000] hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300'  id = 'speech'> {hints.speech} </button>
    </div>
  )
}

  


export default Hint
