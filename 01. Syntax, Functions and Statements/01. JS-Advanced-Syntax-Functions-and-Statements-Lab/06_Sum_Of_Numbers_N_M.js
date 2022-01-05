function sumOfNum(n, m) {
    let n1 = Number(n);
    let n2 = Number(m);

    let result=0;

    for (let i = n1; i <= n2; i++) {
        result += i;
    }
    console.log(result);
}
sumOfNum('1', '5');