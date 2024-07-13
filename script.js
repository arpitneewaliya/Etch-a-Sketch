let container = document.querySelector('#container');
let box, row;

for (let i=1; i<=16; i++) {
    row = document.createElement('div');
    row.classList = `row${i} rows`;
    container.appendChild(row);
    for (let j=0; j<16; j++) {
        box = document.createElement('div');
        box.classList = `boxes`;
        row.appendChild(box);
    }
}
