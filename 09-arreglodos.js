//Le pida al usuario un número y cree un arreglo de números empezando en el 1 
// hasta el número que el usuario ingrese (incluyéndolo)
//Elimine el segundo elemento.
//Recorra e imprima el arreglo.

const prompt = require("prompt-sync")({sigint: true});

function creaArreglo(num){
    if (!/^[1-9]\d*$/.test(num)) {
        console.log('\nOjooooo.\nDije, digite números enteros\nQue sea positivo y que no inicie en 0.');
        return;
    }

    let numNum = parseInt(num);

    const arreglo = [];

    for (let i = 1; i <= numNum; i++) {
        arreglo.push(i);
    }

    return arreglo;
}

function modificaArreglo(arreglo){
    arreglo.splice(1,1);
    return arreglo;
}

console.log("\nEl hiper mega modificador de arreglos:\n");

let num = prompt(`Ingresa un número entero para generar un arreglo con esa cantidad de elementos: `);

let elArreglo = creaArreglo(num);
//console.log(elArreglo);
//console.log(elArreglo[1])
//console.log(typeof elArreglo);

let elArregloModificado = modificaArreglo(elArreglo);
console.log(elArregloModificado);