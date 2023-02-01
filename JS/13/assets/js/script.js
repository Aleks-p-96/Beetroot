'use strict'

// Реалізуй клас User. Під час створення екземпляру на базі цього класу, обʼєкт повинен мати вигляд {name: ‘Petro’, role: ‘admin’} (role може бути або admin або user) - значення імені і ролі потрібно заапитати у користувача. У разі невірно переданих даних такого об’єкта — попереджати за допомогою alert-у відповідне поле, яке введено некоректно. У класі User повинні бути такі компоненти (методи):

// getName - виведення імені користувача
// getRole - виведення ролі
// У класі Admin (наслідує клас User) повинні бути такі компоненти (методи):

// changeUserRole - перевіряє роль користувача - якщо роль admin - змінює роль на user, якщо ролю user - не робть нічого (або виводить повідомлення, що у користувача немає прав доступу)


class User {
    constructor(name,role) {
        this.name = name;
        this.role = role;
    }
    getName(){
        return this.name;
    }
    getRole(){
        return this.role;
    }
}

class Admin extends User {
    changeRole(){
        this.role = 'user'
    }
}

let addBtn = document.getElementById('set-user'),
    nameBtn = document.getElementById('show-name'),
    roleBtn = document.getElementById('show-role'),
    changeBtn = document.getElementById('change-role'),
    outField = document.getElementById('out'),
    currentUser;

addBtn.addEventListener('click', (e) => {
    addUser();
    outField.innerText = '';
})

nameBtn.addEventListener('click', (e) => {
    if(currentUser) {
        outField.innerText = `User name: ${currentUser.getName()}`;
    }
    console.log(currentUser) 
})

roleBtn.addEventListener('click', (e) => {
    if(currentUser) {
        outField.innerText = `User role: ${currentUser.getRole()}`;
    }
    console.log(currentUser) 
})

changeBtn.addEventListener('click', (e) => {
    if(currentUser) {
        console.log('das');
        currentUser.changeRole();
    }
    console.log(currentUser) 
})

function addUser() {
    let username = document.querySelector('.form__name');
    let userrole = document.querySelector('.form__role');
    console.log(userrole.value);
    if (username.value) {
        if (userrole.value === 'user') {
            currentUser = new User(username.value,userrole.value);
        } else {
            currentUser = new Admin(username.value,userrole.value);
        }
    }
    console.log(currentUser) 
}
// В HTML-сторінці додати користувачу можливість створювати свій дашборд годинників. Це годинники для різних куточків світу. Необхідно додати input-поле та button, у разі кліка на якому буде створюватися новий годинник. Реалізація WorldClock відбувається через class. Кожен екземпляр такого класу — новий годинник. У класі повинні бути такі компоненти:

// getCurrentDate
// getCurrentDateTime
// deleteClock
// 1 кнопка — показує користувачу час у текстовому варіанті
// 2 кнопка — показує користувачу поточну дату й час у текстовому варіанті

// 3 кнопка — видаляє годинник зі «стіни» годинників

class Clock {
    getCurrentTime(utc) {
        // console.log(event.target)
        let x = new Date;
        console.log(x)
        x.setHours(x.getHours() - 2 + +utc)
        console.log(x)
        return `${x.getHours()}:${x.getMinutes()}`;
    }
    getCurrentDate(utc) {
        let x = new Date;
        console.log(x)
        x.setHours(x.getHours() - 2 + +utc)
        console.log(x)
        return `${x.getDate()}.${x.getMonth() + 1}.${x.getFullYear()}`;
    }
    deleteClock(element) {

    }
}

let clock = new Clock
// clock.getCurrentDateTime(-2)
// console.log(clock.getCurrentDateTime(-2))

let clockAddBtn = document.getElementById('add-clock');


clockAddBtn.addEventListener('click', (e) => {
    addClock();
})




function addClock() {
    let clockNameField = document.getElementById('clock-input'),
        targetBlock = document.getElementById('clock-blocks'),
        clockSelectField = document.getElementById('clock-select');
    if (clockNameField.value) {
        let newClock = createClock(clockNameField.value,clockSelectField.value);
        targetBlock.append(newClock);
    }
}


function createClock(name,utc) {
    let div = document.createElement('div');
    div.classList.add('clock-block')
    div.id = name + '_del'
    let clockBody = createClockBody(name);
    let clockBtns = createClockBtnBlock(name,utc)
    div.append(clockBody)
    div.append(clockBtns)
    return div;
}

function createClockBody(name) {
    let nameP = document.createElement('p');
    let timeP = document.createElement('p');
    timeP.id = name + 'time';
    let timeDateP = document.createElement('p');
    timeDateP.id = name + 'date';
    let clockBody = document.createElement('div');
    clockBody.classList.add('clock-clock');
    clockBody.dataset.textInside = name;
    nameP.innerText = name;
    clockBody.append(nameP);
    clockBody.append(timeP);
    clockBody.append(timeDateP);
    return clockBody;
}

function createClockBtnBlock(name,utc) {
    let clockBtns = document.createElement('div');
    clockBtns.classList.add('clock-btns');
    let timeBtn = createTimeBtn(name,utc);
    let timeDateBtn = createTimeDateBtn(name,utc);
    let deleteBtn = createDeleteBtn(name);
    clockBtns.append(timeBtn);
    clockBtns.append(timeDateBtn);
    clockBtns.append(deleteBtn);
    return clockBtns;
}

function createTimeBtn(name,utc) {
    let btn = document.createElement('button');
    btn.classList.add('clock-btn');
    btn.classList.add('time');
    btnTimeAddListener(btn, utc, name);
    return btn;
}

function createTimeDateBtn(name,utc) {
    let btn = document.createElement('button');
    btn.classList.add('clock-btn');
    btn.classList.add('date');
    btnDateAddListener(btn,utc, name);
    return btn;
}

function createDeleteBtn(name) {
    let btn = document.createElement('button');
    btn.classList.add('clock-btn');
    btn.classList.add('delete');
    btnDeleteAddListener(btn, name);
    return btn;
}

function btnTimeAddListener(btn, utc, name) {
    btn.addEventListener('click', (e) => {
        let clock = new Clock;
        let timeP = document.getElementById(name + 'time');
        let timeD = document.getElementById(name + 'date');
        timeD.innerHTML ='';
        timeP.innerHTML = clock.getCurrentTime(utc);
    })
}

function btnDateAddListener(btn, utc, name) {
    btn.addEventListener('click', (e) => {
        let clock = new Clock;
        let timeP = document.getElementById(name + 'time');
        let timeD = document.getElementById(name + 'date');
        timeP.innerHTML = clock.getCurrentTime(utc);
        timeD.innerHTML = clock.getCurrentDate(utc);
    })
}

function btnDeleteAddListener(btn, name) {
    btn.addEventListener('click', (e) => {
        let deleteBlock = document.getElementById(name + '_del');
        deleteBlock.remove();
    })
}
