// function calorieObject(array) {
    // let jsonMessage = '{\n';
    // for (let i = 0; i < array.length; i += 2) {
        // let propKey = array[i];
        // let propValue = array[i + 1];
        // jsonMessage += `"${propKey}": ${propValue}`;
        // if ((array[i + 2])) {
            // jsonMessage += ',\n';
        // } else {
            // jsonMessage += '\n';
        // }
    // }
    // jsonMessage += '}';
    // console.log(JSON.parse(jsonMessage));
// }
// calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);

function caloriesObject(array){
    let object = {};

    for (let index = 0; index < array.length; index+=2) {
            let name = array[index];
            let calories = Number(array[index + 1]);
            object[name] = calories; 
    }
    console.log(object);
}

caloriesObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);