let canvas = document.querySelector('#canvas');
let container = document.querySelector('#container');
let box, row, num;

let resizeBtn = document.querySelector('#resize');
resizeBtn.addEventListener('click', () => {
    num = +prompt('Enter the grid dimensions:', '');
});

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

let boxes = document.querySelectorAll('.boxes');    // Stores a NodeList
let boxArr = [...boxes];    // Converts the NodeList into an array

for (const eachBox of boxArr) {
    eachBox.addEventListener('mouseenter', () => {
        eachBox.style.backgroundColor = '#8964fa';
    });
}

// Clear the drawing canvas.
let clear = document.querySelector('#clear');
clear.addEventListener('click', function () {
    for (const eachBox of boxArr) {
        eachBox.style.backgroundColor = 'white';
    }
});
