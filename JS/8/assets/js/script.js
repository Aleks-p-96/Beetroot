'use strict'
// 1.Створити HTML-сторінку для відображення/редагування тексту. При відкритті сторінки текст відображається за допомогою тега div. При натисканні Ctrl + E, замість div з'являється textarea з тим же текстом, який тепер можна редагувати. При натисканні Ctrl + S, замість textarea з'являється div з уже зміненим текстом. Не забудь вимкнути поведінку за замовчуванням для цих поєднань клавіш.

    let textContainer = document.getElementById('task-1');
    document.addEventListener('keydown', function(event) {
        if (event.ctrlKey && event.code === 'KeyE') {
            event.preventDefault();
            let textDiv = document.getElementById('div-text');
            let textInside = textDiv.innerText;
            let textArea = document.createElement('textarea');
            textArea.id = 'textArea';
            textArea.innerHTML = textInside;
            textArea.cols = '30';
            textArea.rows = '10';
            textDiv.remove();
            textContainer.prepend(textArea);
        }
        if (event.ctrlKey && event.code === 'KeyS') {
            event.preventDefault();
            let textArea = document.getElementById('textArea');
            console.log(textArea);
            let textInside = textArea.value;
            let textDiv = document.createElement('div');
            textDiv.id = 'div-text';
            textDiv.innerHTML = textInside;
            textArea.remove();
            textContainer.prepend(textDiv);
        }
    })

// 2. Створити HTML-сторінку з великою таблицею. При кліку на заголовок стовпця, необхідно відсортувати дані цього стовпця. Врахуй, що числові значення повинні сортуватися як числа, а не як рядки.

const shoppingList = [
    {
        name: 'banana',
        amount: 3,
        price: 60,
        purchased: false,
        totalPrice: 180
    }, {
        name: 'apple',
        amount: 7,
        price: 12,
        purchased: true,
        totalPrice: 84
    }, {
        name: 'orange',
        amount: 5,
        price: 65,
        purchased: false,
        totalPrice: 325
    }, {
        name: 'tomato',
        amount: 5,
        price: 70,
        purchased: true,
        totalPrice: 350
    }, {
        name: 'cucumber',
        amount: 5,
        price: 66,
        purchased: false,
        totalPrice: 330
    }, {
        name: 'bread',
        amount: 5,
        price: 18,
        purchased: false,
        totalPrice: 90
    }, {
        name: 'water',
        amount: 5,
        price: 10,
        purchased: true,
        totalPrice: 50
    }, {
        name: 'juice',
        amount: 5,
        price: 37,
        purchased: false,
        totalPrice: 185
    }, {
        name: 'beer',
        amount: 5,
        price: 30,
        purchased: true,
        totalPrice: 150
    }, {
        name: 'chips',
        amount: 5,
        price: 45,
        purchased: true,
        totalPrice: 225
    }
];

    let sortType = null;
    let tableContainer = document.getElementById('task-2');
    let createdTable = document.createElement('table');
    let tableHead = document.createElement('thead');
    let tableBody = document.createElement('tbody');
    tableContainer.append(createdTable);
    createdTable.append(tableHead);
    createdTable.append(tableBody);
    addHeading();
    addContentTable();
    tableHead.addEventListener('click', sortBy);

    function sortBy (event) {
        if ((event.target.id.includes('heading'))) {
            let sortedBy = event.target.id.replace('-heading', '');
            shoppingListSort(sortedBy);
            tableBody.innerHTML = '';
            addContentTable();
        }
    }

    function shoppingListSort (sortedBy) {
        if (!sortType) sortType = 'ASC';
        if (sortType === 'ASC') {
            shoppingList.sort((a,b) => a[sortedBy] > b[sortedBy] ? 1 : -1);
            sortType = 'DESC';
            return;
        }
        if (sortType === 'DESC') {
            shoppingList.sort((a,b) => a[sortedBy] > b[sortedBy] ? -1 : 1);
            sortType = 'ASC';
            return;
        }
    }

    function addHeading () {
        let i = 0;
        for (let param in shoppingList[0]) {
            let heading = document.createElement('th');
            heading.innerHTML = param;
            heading.id = `${param}-heading`;
            i++;
            tableHead.append(heading);
        }
    }

    function addContentTable () {
        for (let item of shoppingList) {
            let tableRow = document.createElement('tr');
            tableBody.append(tableRow);
            for (let param in item) {
                let tableCell = document.createElement('td');
                tableCell.innerHTML = item[param];
                tableRow.append(tableCell);
            }
        }
    }
    

// 3. Створити HTML-сторінку з блоком тексту в рамці. Реалізувати можливість змінювати розмір блоку, якщо затиснути мишку в правому нижньому кутку і тягнути її далі.

let resBtn = document.getElementById('resizer-button');
let resizer = document.getElementById('resizer')

resBtn.addEventListener('mousedown', startResize);

let X,
    Y,
    startWidth,
    startHeight;

function startResize (event) {
    event.preventDefault();
    X = event.clientX;
    Y = event.clientY;
    startWidth = resizer.offsetWidth;
    startHeight = resizer.offsetHeight;
    window.addEventListener('mousemove', resizing);
    window.addEventListener('mouseup', stopResize);
}

function resizing (event) {
    let changeX = event.clientX - X;
    let changeY = event.clientY - Y;
    resizer.style.width = `${startWidth + changeX}px`;
    resizer.style.height = `${startHeight + changeY}px`;
}

function stopResize () {
    window.removeEventListener('mousemove', resizing);
}