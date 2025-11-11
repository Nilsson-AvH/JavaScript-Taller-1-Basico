//const prompt = require("prompt-sync")({sigint: true});

function contarUnos(nums){
    let contadorUnos = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            contadorUnos++;
        }
    }
    return contadorUnos;
}

const nums = [1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1];

console.log(`\nEl dedicado contador de unos. La cantidad de unos en el siguiente array:\n${nums}\nEeeeeeees:`);
console.log(`${contarUnos(nums)}`);

