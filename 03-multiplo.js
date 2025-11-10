//Escribe un programa que le pida al usuario un 
// número e imprima si es un múltiplo de 5 o no.

const prompt = require("prompt-sync")({sigint: true});

function multiplo (numero){

    if (!/^[1-9]\d*$/.test(numero)) {
        console.log('\nNo, es en serio?\nDigite un número positivo válido o que no inicie en 0.');
        return;
    }

    let numeroNum = parseInt(numero);
/*  Despues de la validacion de la cadena me di cuenta que esta segunda validacion es inecesaria.
    if(isNaN(numeroNum)){
        console.log(`\nDigite un numero valido.`);
        return;
    }
*/
    let residuo = numeroNum % 5 ;
    if(residuo == 0){
        console.log(`\nEl numero ${numeroNum} es multiplo de 5.`);
    } else {
        console.log(`\nEl numero ${numeroNum} NO es multiplo de 5.`);
    }
}

console.log(`\nEl hiper mega calcualdor de multiplos de 5:\n`)
let elNumero = prompt(`Digite un numero y yo te diré si es multiplo de 5: `);

multiplo(elNumero);