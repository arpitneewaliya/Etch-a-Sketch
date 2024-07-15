let canvas = document.querySelector('#canvas');
let container = document.querySelector('#container');
let box, row;


for (let i = 1; i <= 16; i++) {
    row = document.createElement('div');
    row.classList = `row${i} rows`;
    container.appendChild(row);
    for (let j = 1; j <= 16; j++) {
        box = document.createElement('div');
        box.classList = `boxes`;
        box.style.height = '30px';
        box.style.width = '30px';
        row.appendChild(box);
    }
}


let boxes = document.querySelectorAll('.boxes');    // Stores a NodeList
let boxArr = [...boxes];    // Converts the NodeList into an array

for (const eachBox of boxArr) {
    eachBox.addEventListener('mouseenter', () => {
        eachBox.style.backgroundColor = 'black';
    });
}

// Clear the drawing canvas.
let clear = document.querySelector('#clear');
clear.addEventListener('click', function () {
    for (const eachBox of boxArr) {
        eachBox.style.backgroundColor = 'white';
    }
});


let resizeBtn = document.querySelector('#resize');
resizeBtn.addEventListener('click', () => {
    let num;
    while (true) {
        num = +prompt('Enter a number between 1 and 100:', '16');
        if (!isNaN(num) && num >=1 && num <=100) {
            break;
        } else {
            num = +prompt('Invalid Input! Enter a number between 1 and 100:', '16');
        }
    }
    let allRows = document.querySelectorAll('.rows');
    let rowsArr = [...allRows];
    for (const eachRow of rowsArr) {
        eachRow.remove();
    }
    for (let x = 1; x <= num; x++) {
        row = document.createElement('div');
        row.classList = `row${x} rows`;
        container.appendChild(row);
        for (let y = 1; y <= num; y++) {
            box = document.createElement('div');
            box.classList = `boxes`;
            row.appendChild(box);
            box.style.height = `${480 / num}px`;
            box.style.width = `${480 / num}px`;
        }
    }

    let boxes = document.querySelectorAll('.boxes');    // Stores a NodeList
    let boxArr = [...boxes];    // Converts the NodeList into an array

    for (const eachBox of boxArr) {
        eachBox.addEventListener('mouseenter', () => {
            eachBox.style.backgroundColor = 'black';
        });
    }
    // Clear the drawing canvas.
    let clear = document.querySelector('#clear');
    clear.addEventListener('click', function () {
        for (const eachBox of boxArr) {
            eachBox.style.backgroundColor = 'white';
        }
    });

});


let resize = document.querySelector('#resize');
resize.addEventListener('mousedown', () => {
    resize.style.backgroundColor = '#99f8ff';
});
resize.addEventListener('mouseup', () => {
    resize.style.backgroundColor = '#00eeff';
});


let clearBtn = document.querySelector('#clear');
clearBtn.addEventListener('mousedown', () => {
    clear.style.backgroundColor = '#99f8ff';
});
clearBtn.addEventListener('mouseup', () => {
    clearBtn.style.backgroundColor = '#00eeff';
});
