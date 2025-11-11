// Escribe un programa que le pida al usuario ingresar un número.

//    Si el número es múltiplo de 3 debe imprimir en la consola bing.
//    Si el número es múltiplo de 5 debe imprimir en la consola bong.
//    Si el número es múltiplo tanto de 3 como de 5 debe imprimir en la consola bingbong.
//    Si no cumple ninguna de las condiciones anteriores debe imprimir el mismo número.

//const prompt = require("prompt-sync")({sigint:true});

function validation(numero){

    if (!/^[1-9]\d*$/.test(numero)) {
        console.log('\nEn serio?\nDigite un número positivo válido o que no inicie en 0.');
        return;
    }

    let numeroNum = parseInt(numero);
    let message = ``;

    if( numeroNum % 3 == 0 )
        message += 'bing';      // message = message + 'bing';
    if( numeroNum % 5 == 0 ) 
        message += 'bong';      // message = message + 'bong';

    if( !message )
        console.log( numeroNum );
    else
        console.log( message );
}

console.log(`\nEl mega play BingBong:\n`)
let elNumero = prompt(`Digite el numero a validar BingBong: `)

validation(elNumero);