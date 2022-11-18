const h1 = document.querySelector("h1");
const p = document.querySelector("p");
const parrafito = document.querySelector(".parrafito");
const pid = document.querySelector("#pid"); // podríamos usar simplemente get element byid pero sin poner el #
const input = document.querySelector("input");

console.log({
    h1,
    p,
    parrafito,
    pid,
    input
})

console.log(input.value);

h1.innerHTML = "chascarrillo digital";
 // h1.innerText = "chascarrillo digital";

 // console.log(h1.getAttribute("class"));
 // h1.setAttribute("class", "rojo");
 // h1.classList.add("rojo");
 // h1.classList.remove("verde");
 // h1.classList.toggle("verde");
 // h1.classList.containts("verde");

 input.value= "123"


pid.innerHTML="";

const img = document.createElement ("img");
img.setAttribute("src", "data:image/jpeg;base64,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");

pid.append(img);