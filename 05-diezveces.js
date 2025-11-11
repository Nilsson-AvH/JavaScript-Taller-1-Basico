//Escribe un programa que le pida al usuario ingresar una frase.
// l programa debe imprimir la frase en la consola 10 veces.
// NOTA: utiliza un ciclo para imprimir la frase las 10 veces.

//const prompt = require("prompt-sync")({sigint: true});

function diezVeces(frase) {
    let resultado = "";
    for(let i = 1; i <= 10; i++) {
        resultado += `Repetición No. ${i}: ${frase}\n`;
    }
    return resultado;
}

alert("El súper poderoso convertidor Diez:");
let laFrase = prompt("Digite una frase, el convertidor la repetirá 10 veces:");

alert(diezVeces(laFrase));