//Escribe un programa que pida al usuario ingresar un número, 
//luego pide un segundo número e imprime en la consola la 
//suma de los dos números ingresados.

const prompt = require('prompt-sync')({sigint: true});
function sum (num1, num2) {
    return num1 + num2;
}

let num1 = parseInt(prompt(`Ingrese el primer numero a sumar: `));
let num2 = parseInt(prompt(`Ingrese el segudo numero a sumar: `));

console.log(`La suma de ${num1} y ${num2} es: ${sum(num1, num2)}`);