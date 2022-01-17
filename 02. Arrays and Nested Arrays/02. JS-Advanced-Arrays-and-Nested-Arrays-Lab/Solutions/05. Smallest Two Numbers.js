function smallestTwoNums(arr) {
    const result = arr.sort((a, b) => a - b).slice(0, 2);
    return result.join(' ');
}
result = smallestTwoNums([30, 15, 50, 5]);
console.log(result);