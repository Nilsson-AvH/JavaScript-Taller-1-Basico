//Escribe un programa para la consola que le pida al usuario dos números e 
// imprima en la consola los números en ese rango. Por ejemplo, si el usuario 
// ingresa 5 como primer número y 10 como segundo número.

const prompt = require("prompt-sync")({sigint: true});

function superRango(num1,num2) {
    if (!/^[1-9]\d*$/.test(num1) || !/^[1-9]\d*$/.test(num2)) {
        console.log('\nHablé en chino?\nDije, digite números enteros\nQue sea positivo y que no inicie en 0.');
        return;
    }

    let num1Num = parseInt(num1);
    let num2Num = parseInt(num2);

    if(num1Num>num2Num){
        let temp = num1Num;
        num1Num = num2Num;
        num2Num = temp;
        console.log(`\nCreíste que me ibas a engañar escribiendo\nlos números al revéz, pues los organicé y...`)
    }

    console.log(`\nAcá tienes el rango de numeros entre ${num1Num} y ${num2Num}:\n`)
    for(i=num1Num;i<=num2Num;i++){
        console.log(i);
    }
}

console.log(`\nEl mega impresor de rangos de numeros enteros:`);

let num1 = prompt(`Digita un numero entero: `);
let num2 = prompt(`Digita otro numero entero: `);

superRango(num1, num2);