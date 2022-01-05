function evenPositionElent(strings) {
    //I vers.
    // let result = '';

    // for (let i = 0; i < strings.length; i++) {
    // if (i % 2 == 0) {
    // result += strings[i];
    // result += ' ';
    // }
    // }
    //console.log(result);

    //II vers.
    // let result = '';
    //for (let i = 0; i < strings.length; i += 2) {
    // result += strings[i];
    // result += ' ';
    // }
    // console.log(result);

    //III vers.

    let result = [];

    for (let i = 0; i < strings.length; i += 2) {
        result[result.length] = strings[i];

    }
    console.log(result.join(' '));
}
evenPositionElent(['20', '30', '40', '50', '60']);
evenPositionElent(['5', '10']);