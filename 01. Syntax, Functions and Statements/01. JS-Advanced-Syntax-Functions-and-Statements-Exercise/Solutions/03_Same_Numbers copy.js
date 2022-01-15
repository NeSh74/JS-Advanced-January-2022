function sameNums(input) {
    let inputNumber = input.toString();
    let isSame = true;
    let sumOfDigest = 0;
    let digestToCompare = inputNumber[0];
    const numberL = inputNumber.length;

    for (let index = 0; index < numberL; index++) {
        
        sumOfDigest += +inputNumber[index];

        if (inputNumber[index] !== digestToCompare) {
            isSame = false;
        }
    }
    console.log(isSame);
    console.log(sumOfDigest);
}
sameNums(2222222);
sameNums(1234);






