//Escribe un programa que pida al usuario su año de nacimiento 
//y nombre e imprime su edad actual en la consola con la frase 
//Hola X, grandioso! Tienes X años. Asume que el año actual es 
//2020 y el usuario ingresa 2000, el programa debe imprimir en 
// la consola: Hola Juan, grandioso! Tienes 20 años.

const prompt = require('prompt-sync')({sigint: true});

function edad (anioNacimiento, nombre) {
    let anioActual = 2020;
    let anioNacimientoNum = parseInt(anioNacimiento);

    if(isNaN(anioNacimientoNum) || anioNacimientoNum < 1900 || anioNacimientoNum > anioActual) {
        console.log(`\nError\nDigite un año correcto entre 1900 y 2020.`);
        return;
    }

    let edad = anioActual-anioNacimientoNum;
    console.log(`\nHola ${nombre}, grandioso! Tienes ${edad} años.`)
}

let laEdad = prompt(`Digite su año de nacimiento: `);
let elNombre = prompt(`Digite su nombre: `);

edad(laEdad, elNombre);