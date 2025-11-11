// Crea una variable llamada nombres con un arreglo que tenga los siguientes elementos: "Pedro", "Pablo", "María", "Juan", "Diana".
//Pídele al usuario que ingrese un nombre e insértalo al final del arreglo que creaste en el paso 1.
//Pídele al usuario que ingrese otro nombre y reemplaza la tercera posición del arreglo con este valor.
//Recorre el arreglo e imprímelo.

//const prompt = require("prompt-sync")({sigint: true});

function ingresoFinal(array, nombreUno){
    array.push(nombreUno);
    return array;
}

function cambioTercera(array, nombreDos){
    array[2]=nombreDos;
    return array;
}

const array = ["Pedro", "Pablo", "María", "Juan", "Diana"];
console.log(array);

console.log(`\nEl programa triste:\n`)
let nombreUno = prompt(`Ingrese un nombre: `);
let nombreDos = prompt(`Ingrese otro nombre: `);

const arrayIngreso = ingresoFinal(array, nombreUno);
//console.log(arrayIngreso);
const arrayFinal = cambioTercera(arrayIngreso, nombreDos);

for (const gato of arrayFinal){
    console.log(`> ${gato}`);
}