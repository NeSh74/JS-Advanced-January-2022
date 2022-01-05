function sortingNumbers(arr) {
    arr = arr.sort((a, b) => {
        return a - b;
    })
    const result = [];
    const count = Math.floor(arr.length / 2);
    for (let i = 0; i < count; i++) {
        result.push(arr[i]);
        result.push(arr[arr.length - 1 - i]);
    }
    console.log(result);
}
sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);