function sumFirstLast(strings) {
    //const firstNum = Number(strings.shift());
    const firstNum = Number([...strings].shift());
    //const lastNum = Number(strings.pop());
    const lastNum = Number([...strings].pop());

    return firstNum + lastNum;
}
console.log(sumFirstLast(['20', '30', '40']));
console.log(sumFirstLast(['5', '10']));
console.log(sumFirstLast(['25']));