const h1 = document.querySelector("#title");
const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const button = document.querySelector("#calculate");
const result = document.querySelector("#result");

button.addEventListener("click", clickButton);

function clickButton(){
    const resultado = parseInt(input1.value) + parseInt(input2.value);
   result.innerHTML = "Tu resultado es " + resultado;
}

// el form deja los botones tipo submit, osea que se recarga porque se envía un formularios.


//-----------------------------------------------------------------------------------------------

// EN CASO DE QUE SEA UN FORM/

//button.addEventListener("submit", clickButton);

//function clickButton(event){
  // event.preventDefault();
  //  const resultado = parseInt(input1.value) + parseInt(input2.value);
  // result.innerHTML = "Tu resultado es " + resultado;
//}


//-----------------------------------------------------------------------------------------------
// o simplemente poner type button / /// / / // / / 