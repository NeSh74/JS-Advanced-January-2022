function subtract() {

    // //console.log('TODO:...');
    // const result = document.getElementById('result');

    // const first = Number(document.getElementById('firstNumber').value);
    // const second = Number(document.getElementById('secondNumber').value);
    // result.innerHTML = (first - second).toString();

    let firstNumber = document.getElementById('firstNumber');
    let firstNumAsNumber = Number(firstNumber.value);

    let secondNumber = document.getElementById('secondNumber');
    let secondNumAsNumber = Number(secondNumber.value);

    let result = firstNumAsNumber - secondNumAsNumber;
    let resultElement = document.getElementById('result');
    resultElement.textContent = result;
}