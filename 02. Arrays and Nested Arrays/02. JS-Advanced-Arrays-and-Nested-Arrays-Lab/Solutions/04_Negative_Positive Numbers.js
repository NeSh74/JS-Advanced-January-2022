function negativePostiveNum(numbers) {
    const result = [];

    for (let num of numbers) {
        if (num < 0) {
            result.unshift(num);
        } else {
            result.push(num);
        }
    }
    // for (let num of result) {
    // console.log(num);
    // }
    console.log(result.join('\n'));
}
negativePostiveNum([7, -2, 8, 9]);
negativePostiveNum([3, -2, 0, -1]);