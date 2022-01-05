function extract(arr) {
    let result = [];
    let biggest = Number.MIN_SAFE_INTEGER;

    arr.forEach((element, index) => {
        // if (index == 0) {
        // return;
        // }
        if (element >= biggest) {
            result.push(element);
            biggest = element;
        }
    });
    return result;
}
console.log(extract([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]));
console.log(extract([1,
    2,
    3,
    4]));
console.log(extract([20,
    3,
    2,
    15,
    6,
    1]));