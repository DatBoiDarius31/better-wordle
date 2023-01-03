import "./guess.css";

function Guess({ letterCount }) {
    
    function OTPInput() {
        let letters = 0;
        console.log({letterCount})
        const inputs = document.querySelectorAll('#otp > *[id]');
        for (let i = 0; i < inputs.length; i++) {
            console.log(inputs.length)
            inputs[i].addEventListener('keydown', function(event) {
             //removes character if backspaced is pressed
            if (event.key === "Backspace") {
                if(letters > 0){
                    letters--;
                }
                else{
                    letters = 0;
                }
              inputs[i].value = '';
              if (i !== 0)
                inputs[i - 1].focus();
            } 
            
            else {
              if (i === inputs.length && inputs[i].value !== '') {
                return true;  
              } 

              //moves focus onto next box if normal keys num/character keys are pressed
              else if (event.keyCode > 47 && event.keyCode < 58 && letters < 4) {
                letters++;
                inputs[i].value = event.key;
                if (i !== inputs.length - 1)
                  inputs[i + 1].focus();
                event.preventDefault();  
              } 

              //moves focus onto next box if numlock keys num/character keys are pressed
              else if (event.keyCode > 64 && event.keyCode < 91 && letters < 4) {
                letters++;
                inputs[i].value = String.fromCharCode(event.keyCode);
                if (i !== inputs.length - 1)
                  inputs[i + 1].focus();
                event.preventDefault();
              }
            }
          });
        }
      }

  return (
    <div class="mb-6 text-center">
        {OTPInput()}
      <div id="otp" class="flex justify-center">
        <input
          class="m-2 text-center form-control form-control-solid rounded focus:border-blue-400 focus:shadow-outline"
          type="text"
          id="first"
          maxlength="1"
        />
        <input
          class="m-2 text-center form-control form-control-solid rounded focus:border-blue-400 focus:shadow-outline"
          type="text"
          id="second"
          maxlength="1"
        />
        <input
          class="m-2 text-center form-control form-control-solid rounded focus:border-blue-400 focus:shadow-outline"
          type="text"
          id="third"
          maxlength="1"
        />
        <input
          class="m-2 text-center form-control form-control-solid rounded focus:border-blue-400 focus:shadow-outline"
          type="text"
          id="fourth"
          maxlength="1"
        />
        <input
          class="m-2 text-center form-control form-control-solid rounded focus:border-blue-400 focus:shadow-outline"
          type="text"
          id="fifth"
          maxlength="1"
        />
      </div>
    </div>
  );

  
}

export default Guess;
