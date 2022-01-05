function listOfNames(arr) {
    const result = arr.sort((a,b)=>a.localeCompare(b));
    
    let orderNum = 1;
    arr.forEach((el) => {
        console.log(`${orderNum}.${el}`);
        orderNum++;
    });
}
listOfNames(["John", "Bob", "Christina", "Ema"]);