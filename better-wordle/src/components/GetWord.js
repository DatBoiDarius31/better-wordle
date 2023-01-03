function GetWord({onClick}) {

    const handleFormClick = (event) => {
        event.preventDefault();
        onClick();
        document.getElementById("button").style.display = "none";
    }

    return (
        <div>
            <form id = "button" onClick = {handleFormClick} >
                <button >
                    Get Random Word
                 </button> 
            </form>           
        </div>       
    );
};

export default GetWord;