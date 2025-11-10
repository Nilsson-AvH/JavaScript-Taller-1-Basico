//Escribe un programa que le pida al usuario una frase y un número. 
//El programa debe imprimir la frase en la consola el número de 
//veces que ingresó el usuario. Por ejemplo, si el usuario ingresó 
//la frase Hola Mundo y el número 5, el programa debe imprimir 
//Hola Mundo 5 veces:

const prompt = require("prompt-sync")({sigint: true});

function nVeces (frase, n){

    if (!/^[1-9]\d*$/.test(n)) {
        console.log(`\nMe da la ligera impresion que ${n} no es un numero.\nDigite un número positivo válido o que no inicie en 0.`);
        return;
    }

    let nNum = parseInt(n);

    console.log(`\nEl fabuloso repetidor de frases repetirá tu frase ${nNum} veces:\n`)

    for(i=1;i<=nNum;i++){
        console.log(`Repeticion No. ${i}: ${frase}`)
    }

}

let laFrase = prompt(`Digite una frase, el convertidor la repetirá n veces: `);
let elNumero = prompt(`Digite un numero n para el convertidor: `);

nVeces(laFrase, elNumero)