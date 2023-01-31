'use strict'
// 1) Реалізуй клас, що описує коло. У класі повинні бути такі компоненти:

// поле, що зберігає радіус кола;
// get-властивість, яке повертає радіус кола;
// set-властивість, що встановлює радіус кола;
// get-властивість, яке повертає діаметр кола;
// метод, що обчислює площу кола;
// метод, що обчислює довжину кола.
// Продемонструй роботу властивостей і методів.

class Circle {
    constructor(value) {
        this.radius = value;
    }
    get r() {
        return this.radius + 1;
    }
    set r(value) {
        this.radius = value;
    }
    get d() {
        return this.radius * 2;
    }
    area() {
        return +(Math.PI * this.radius**2).toFixed(2);
    }
    length() {
        return +(2 * Math.PI * this.radius).toFixed(2);
    }

}

let circleField = document.getElementById('circle-field');
let circleBtn = document.getElementById('circle-btn');
let circleDField = document.getElementById('cirlce-d-field');
let circleAreaField = document.getElementById('cirlce-area-field');
let circleLenghtField = document.getElementById('cirlce-length-field');
let circle = new Circle();
circleBtn.addEventListener('click', () => {
    circle.r = circleField.value;
    circleDField.innerText = `Circle diameter = ${circle.d}`;
    circleAreaField.innerText = `Circle area = ${circle.area()}`;
    circleLenghtField.innerText = `Circle length = ${circle.length()}`;
})

// 2) Реалізуй клас, що описує канцелярський маркер. У класі повинні бути такі компоненти:

// поле, яке зберігає колір маркера;
// поле, яке зберігає кількість чорнил у маркері (у відсотках);
// метод для вводу (приймає рядок і виводить текст відповідним кольором; текст виводиться доти, доки в маркері є чорнило; один не пробільний символ — це 0,5 % чорнил у маркері).
// Реалізуй клас, що описує маркер, який можна перезаправляти. Успадкуй цей клас від простого маркера й додай метод для заправки.

// Продемонструй роботу написаних методів.

class Marker {
    constructor (value) {
        this.color = value;
        this.incAmount = 100;
    }
    set newColor(value) {
        this.color = value;
    }
    get currentColor() {
        return this.color
    }
    inputting(input) {
        input.style.color = this.color;
        this.incAmount -= 1;
        // console.log(this.incAmount);
    }
}

class ReloadedMarker extends Marker {
    reload() {
        this.incAmount = 100;
    }
}

let colorInput = document.getElementById('color-input'),
    textIn = document.getElementById('textEnter'),
    textOut = document.getElementById('textOut'),
    alert = document.getElementById('alert'),
    checkboxReload = document.getElementById('checkbox'),
    reloadBtn = document.getElementById('reload-button'),
    percentageField = document.getElementById('percentage'),
    marker = new Marker(colorInput.value);


colorInput.addEventListener('input', (e) => {
    marker.newColor = e.target.value;
    console.log(marker)
})

reloadBtn.addEventListener('click', () => {
    marker.reload();
    percentageField.innerText = `Ink level: ${marker.incAmount}%`;
    textIn.maxLength = 999;

})

checkboxReload.addEventListener('click', (e) => {
    if (e.currentTarget.checked) {
        marker = new ReloadedMarker(colorInput.value)
        console.log(marker)
        return;
    }
    marker = new Marker
})

// textIn.addEventListener('input', (e) => {

// })

textIn.addEventListener('input', (e) => {
    if (marker.incAmount <= 1) {
        e.target.maxLength = e.target.value;
        alert.innerText = "Marker is over"
    } else {
        alert.innerText = ""
    }
    if ((e.inputType === 'insertText') && !(e.data === ' ')) {
        marker.inputting(e.target)
    }

    percentageField.innerText = `Ink level: ${marker.incAmount}%`;

})


// 3) Реалізуй клас Employee, що описує працівника, і створи масив працівників банку.

// Реалізуй клас EmpTable для генерації HTML-коду таблиці зі списком працівників банку. Масив працівників необхідно передавати через конструктор, а отримувати HTML-код за допомогою методу getHtml ().

// Створи об’єкт класу EmpTable і виведи на екран результат роботи методу getHtml ().

class Employee {
    constructor(name, position, age){
        this.name = name;
        this.position = position;
        this.age = age;
    }
}

class EmpTable {
    constructor(array) {
        this.array = array;
    }
    getHtml (arr) {
        let block = document.getElementById('third');
        let table = document.createElement('table');
        let tableHead = createTableHead(arr[0]);
        let tableBody= createTableBody(arr);
        table.append(tableHead);
        table.append(tableBody);
        block.append(table)
        console.log('ds');
    }
}

let empArr = [];
empArr.push(new Employee('Evelyn Brown', 'Financial Analyst', 33))
empArr.push(new Employee('Liam Davis', 'Manager', 29 ))
empArr.push(new Employee('Williamn Garcia', 'Accountant', 25))
empArr.push(new Employee('Mia Johnson.', 'Auditor', 31))
empArr.push(new Employee('Amelia Williams.', 'Treasurer', 29))

let table = new EmpTable(empArr);
table.getHtml(empArr);



function createTableHead (data) {
    let thead = document.createElement('thead');

    for (let key in data) {
        const cell = createHeadCell(key);
        thead.append(cell);
    }
    
    return thead;
}

function createHeadCell (data) {
    let tableCell = document.createElement('th');
    tableCell.innerHTML = data;
    return tableCell;    
}

function createTableBody (data) {
    const tBody = document.createElement('tbody');

    for (let item of data)  {
        const rowElement = createRow(item);
        tBody.append(rowElement);
    }

    return tBody;
}

function createRow (data) {
    let row = document.createElement('tr');

    for (let key in data) {
        const cell = createCell(data[key]);
        row.append(cell);
    }
    
    return row;
}

function createCell (data) {
    let tableCell = document.createElement('td');
    tableCell.innerHTML = data;
    return tableCell;
}

