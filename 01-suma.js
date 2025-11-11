//Escribe un programa que pida al usuario ingresar un número, 
//luego pide un segundo número e imprime en la consola la 
//suma de los dos números ingresados.

//const prompt = require('prompt-sync')({sigint: true});

function sum (num1, num2) {

    if (!/^[1-9]\d*$/.test(num1) || !/^[1-9]\d*$/.test(num2)) {
        console.log('\nEn serio?\nDigite un número positivo válido o que no inicie en 0.');
        return;
    }

    console.log(`\nLa suma de ${num1} y ${num2} es: ${num1+num2}`);
}

console.log(`\nLa sumadora Cosmica:\n`)
let num1 = parseInt(prompt(`Ingrese el primer numero a sumar: `));
let num2 = parseInt(prompt(`Ingrese el segudo numero a sumar: `));

sum(num1, num2)