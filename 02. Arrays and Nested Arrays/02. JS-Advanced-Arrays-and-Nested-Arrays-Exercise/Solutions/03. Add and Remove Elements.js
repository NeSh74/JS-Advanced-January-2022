function addRemoveElement(arr) {
    let number = 1;
    let result = [];

    arr.forEach(element => {
        if (element == "add") {
            result.push(number);
        } else {
            result.pop(number);
        }
        number++;
    });

    if (result.length === 0) {
        console.log("Empty");
    } else {
        console.log(result.join("\n"));
    }
}
addRemoveElement(['add',
    'add',
    'add',
    'add']);
addRemoveElement(['add',
    'add',
    'remove',
    'add',
    'add']);
addRemoveElement(['remove',
    'remove',
    'remove']);