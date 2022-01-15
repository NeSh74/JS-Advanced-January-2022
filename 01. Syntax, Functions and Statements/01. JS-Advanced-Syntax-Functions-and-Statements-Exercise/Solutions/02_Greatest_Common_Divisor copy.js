function greatestCommonDivisor(x, y) {
    // const min = Math.min(x, y);
    // let gcd = 1;

    // for (let i = 1; i <= min; i++) {
    // if (x % i == 0 && y % i == 0) {
    // gcd = i;
    // }
    // }

    // console.log(gcd);

    let num1 = Number(x);
    let num2 = Number(y);

    while (num1 !== num2) {
        if (num1 > num2) {
            num1 -= num2;
        } else {
            num2 -= num1;
        }
    }
    console.log(num1);
}
greatestCommonDivisor(15, 5)
greatestCommonDivisor(2154, 458);