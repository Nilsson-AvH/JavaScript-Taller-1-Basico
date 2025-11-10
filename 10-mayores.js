function mayor(nums){
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 10) {
            console.log(nums[i]);
        }
    }
}

const nums = [1, 23, 5, 8, 40, 12, 2, 67, 24, 9, 39];

console.log(`\nEste super programa imprimira los valores del siguiente arreglo que sean mayores a 10:`);
console.log(`${nums}`);
console.log(`\nSi quieres verificar otro arreglo, modifica el arreglo en el codigo fuente, super seguro.\n`);

mayor(nums);