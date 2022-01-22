function magicMatrices(array) {
    
    let sum = array[0].reduce((a, b) => a + b);

    for (let i = 0; i < array[0].length; i++) {

        let currentColumSum = 0;
        for (let j = 0; j < array.length; j++) {
            currentColumSum += array[j][i];
        }
        if (currentColumSum !== sum) {
            return false;
        }
    }
    return true;
}
console.log(magicMatrices([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]));