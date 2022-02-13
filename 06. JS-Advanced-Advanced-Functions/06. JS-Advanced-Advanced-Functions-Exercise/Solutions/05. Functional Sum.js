// function sum(num) {
// let sum = num;

// function add(num2) {
// sum += num2;
// return add;
// }
// add.toString = () => {
// return sum;
// }
// return add;
// }
// console.log(sum(1).toString());

function add(num) {
    let sum = 0;
    function inner(number) {
        sum += number;
        return inner;
    }
    inner.toString = () => {
        return sum;
    }
    return inner(num);
}