// Escribe un programa que le pida al usuario ingresar un número.

//    Si el número es múltiplo de 3 debe imprimir en la consola bing.
//    Si el número es múltiplo de 5 debe imprimir en la consola bong.
//    Si el número es múltiplo tanto de 3 como de 5 debe imprimir en la consola bingbong.
//    Si no cumple ninguna de las condiciones anteriores debe imprimir el mismo número.

const prompt = require("prompt-sync")({sigint:true});

function validation(numero){

    if (!/^[1-9]\d*$/.test(numero)) {
        console.log('\nDigite un número positivo válido o que no inicie en 0.');
        return;
    }

    let numeroNum = parseInt(numero);

    if ( numeroNum % 3 == 0 && numeroNum % 5 == 0 ) {

        console.log(`BingBong!`);
    }else if ( numeroNum % 3 == 0 ) {

        console.log(`Bing!`);
    }else if ( numeroNum % 5 == 0 ) {

        console.log(`Bong!`);
    }else {

        console.log(numeroNum);
    }

}

let elNumero = prompt(`Digite el numero a validar BingBong: `)

validation(elNumero);