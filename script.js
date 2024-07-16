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
        num = +prompt('Enter the number of squares you want on each side (between 1 and 100):', '16');
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
let clearBtn = document.querySelector('#clear');
let random_colors = document.querySelector('#random_colors');
let single = document.querySelector('#single');

function hoverEffect (btn) {
    btn.addEventListener('mouseenter', () => {
        btn.style.backgroundColor = '#99f8ff';
        btn.style.color = 'white';
        btn.style.fontSize = '15px';
    });
    btn.addEventListener('mouseout', () => {
        btn.style.backgroundColor = '#00eeff';
        btn.style.color = '#202020';
        btn.style.fontSize = '14px';
    });
    btn.addEventListener('click', () => {
        btn.style.backgroundColor = '#00eeff';
    });
    
}

hoverEffect(resize);
hoverEffect(clearBtn);
hoverEffect(random_colors);
hoverEffect(single);


random_colors.addEventListener('click', () => {
    let boxes = document.querySelectorAll('.boxes');
    let boxArr = [...boxes];
    for (const eachBox of boxArr) {
        eachBox.addEventListener('mouseenter', () => {
            eachBox.style.backgroundColor = `rgb(${RandomColors()}, ${RandomColors()}, ${RandomColors()})`;
        });
    }
});

function RandomColors() {
    return Math.floor(Math.random()*255);
}

single.addEventListener('click', () => {
    let boxes = document.querySelectorAll('.boxes');
    let boxArr = [...boxes];
    for (const eachBox of boxArr) {
        eachBox.addEventListener('mouseenter', () => {
            eachBox.style.backgroundColor = 'black';
        });
    }
});
