function sumTable() {
    const row = document.querySelectorAll('table tr');
    let sum = 0;

    for (let i = 1; i < row.length - 1; i++) {
        const cell = row[i].lastElementChild;
        sum += Number(cell.textContent);
    }

    document.getElementById('sum').textContent = sum;
}