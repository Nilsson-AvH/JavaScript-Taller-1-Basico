//Escribe un programa que le pida al usuario ingresar una frase.
// l programa debe imprimir la frase en la consola 10 veces.
// NOTA: utiliza un ciclo para imprimir la frase las 10 veces.

const prompt = require("prompt-sync")({sigint: true});

function diezVeces (frase){

    for(i=1;i<=10;i++){
        console.log(`Repeticion No. ${i}: ${frase}`)
    }

}

console.log(`\nEl super poderoso convertidor Diez:\n`)
let laFrase = prompt(`Digite una frase, el convertidor la repetirá 10 veces: `)

diezVeces(laFrase)