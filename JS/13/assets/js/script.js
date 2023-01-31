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

// class Clock {
//     getCurrentDate() {
//         // console.log(event.target)
//         let x = new Date;
//         x.setDate(x.getDate() - 2)
//         return `${x.getDate()}.${x.getMonth() + 1}.${x.getFullYear()}`;
//     }
//     getCurrentDateTime() {
//         let x = new Date;
//         x.setDate(x.getDate() - 2)
//         return `${x.getDate()}.${x.getMonth() + 1}.${x.getFullYear()}\n${x.getHours()}:${x.getMinutes()}`;
//     }
//     deleteClock() {

//     }
// }

// let clock = new Clock;
// console.log(clock.getCurrentDate());
// console.log(clock.getCurrentDateTime());

// let clockAddBtn = document.getElementById('add-clock');


// clockAddBtn.addEventListener('click', (e) => {
//     addClock();
// })




// function addClock() {
//     let clockNameField = document.getElementById('clock-input'),
//         targetBlock = document.getElementById('clock-blocks'),
//         clockSelectField = document.getElementById('clock-select');
//     if (clockNameField.value) {
//         let div = document.createElement('div');
//         div.classList.add('clock-block');
//         let divC = document.createElement('div');
//         divC.dataset.name = clockNameField.value;
//         divC.innerText = clockNameField.value;
//         divC.classList.add('clock-clock');
//         let divB = document.createElement('div');
//         divB.classList.add('clock-btns');
//         let btnTime = document.createElement('button');
//         let btnDate = document.createElement('button');
//         let btnDelete = document.createElement('button');
//         btnTime.classList.add('clock-btn')
//         btnDate.classList.add('clock-btn')
//         btnDelete.classList.add('clock-btn')
//         btnTime.classList.add('time')
//         btnDate.classList.add('date')
//         btnDelete.classList.add('delete')
//         divB.append(btnTime)
//         divB.append(btnDate)
//         divB.append(btnDelete)
//         div.append(divC)
//         div.append(divB)
//         targetBlock.append(div)
//         // btnTime.addEventListener('click', clock.getCurrentDateTime(btnTime.closest('.clock-clock')))
//         // btnDate.addEventListener('click', clock.getCurrentDate(btnDate))
//         btnDelete.addEventListener('click', clock.deleteClock)
//         console.log(btnTime.closest('#clock-block'))
//     }
// }





