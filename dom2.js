const h1 = document.querySelector("#title");
const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const button = document.querySelector("#calculate");
const result = document.querySelector("#result");

function clickButton(){
    const resultado = parseInt(input1.value) + parseInt(input2.value);
   result.innerHTML = "tu resultado es " + resultado;
}

function clickButtonREST(){
    const resultado = parseInt(input1.value) - parseInt(input2.value);
   result.innerHTML = "tu resultado es " + resultado;
}
function clickButtonMULT(){
    const resultado = parseInt(input1.value) * parseInt(input2.value);
   result.innerHTML = "tu resultado es " + resultado;
}
function clickButtonDIV(){
    const resultado = parseInt(input1.value) / parseInt(input2.value);
   result.innerHTML = "tu resultado es " + resultado;
}