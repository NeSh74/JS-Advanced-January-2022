function processOddPositions(numbers) {
    // const oddNum = numbers.filter((v, i) => i % 2 == 1);
    // const doubleNum = oddNum.map(x => x * 2);
    //doubleNum.reverse();
    
    //console.log(doubleNum.join(' '))
    console.log(numbers
        .filter((v, i) => i % 2 == 1)
        .map(x => x * 2)
        .reverse()
        .join(' '));
}
processOddPositions([10, 15, 20, 25]);
processOddPositions([3, 0, 10, 4, 7, 3]);