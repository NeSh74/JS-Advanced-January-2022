function greatestCommonDivisor(x, y) {
    const min = Math.min(x, y);
    let gcd = 1;

    for (let i = 1; i <= min; i++) {
        if (x % i == 0 && y % i == 0) {
            gcd = i;
        }
    }

    console.log(gcd);
}
greatestCommonDivisor(15, 5)
greatestCommonDivisor(2154, 458);