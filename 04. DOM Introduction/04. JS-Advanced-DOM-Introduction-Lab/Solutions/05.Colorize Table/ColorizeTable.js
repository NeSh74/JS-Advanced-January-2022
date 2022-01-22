// function colorize() {
// const rows = document.querySelectorAll('table tr');

// for (let i = 1; i < rows.length; i += 2) {
// rows[i].style.backgroundColor = 'teal';
// }
// }

// function colorize() {
// const rows = document.querySelectorAll('table tr:nth-child(even)');

// for (let i = 0; i < rows.length; i++) {
// rows[i].style.backgroundColor = 'teal';
// }
// }
function colorize() {
    // let rowElements = document.querySelectorAll('tr:nth-of-type(2n) td');
    // rowElements.forEach(x => {
    // x.style.backgroundColor = 'teal';
    // });

    let rowElements = document.getElementsByTagName('tr');
    let rows = Array.from(rowElements);
    rows.forEach((x, i) => {
        if (i % 2 != 0) {
            x.style.backgroundColor = 'teal'
        }
    });
}