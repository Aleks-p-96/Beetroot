'use strict';
//Мінімум
//1
let age = prompt('How old are you?', 26);
let message = (age == 0 || age > 0 && age < 12) ? console.log('Ви дитина') :
    (age >= 12 && age < 18) ? console.log('Ви підліток') :
    (age >=18 && age < 60) ? console.log('Ви дорослий') :
    (age > 60 ) ? console.log('Ви пеніонер') :
    !(age) ? console.log('Введені некоректні дані') : console.log('Введені некоректні дані');
    console.log(age);

//2
    let usernum = +prompt('Введіть число від 0 до 9');
    switch (usernum) {
        case 1:
            alert('1 !');
            break;
        case 2:
            alert('2 @');
            break;
        case 3:
            alert('3 #');
            break;
        case 4:
            alert('4 $');
            break;
        case 5:
            alert('5 %');
            break;
        case 6:
            alert('6 ^');
            break;
        case 7:
            alert('7 &');
            break;
        case 8:
            alert('8 *');
            break;
        case 9:
            alert('9 (');
            break;
        case 0:
            alert('0 )');
            break;
            
    }

//3
let sum = 0;
let n1 = +prompt('Введіть початок числового діапазону', 3);
let n2 = +prompt('Введіть кінець числового діапазону', 8);
for (let i = n1; i <= n2; i++) {
    sum = sum + i;
}
console.log(`Сума чисел числового діапазону від ${n1} до ${n2} = ${sum} `);


// 4
let a = +prompt ('Введіть перше число для знаходження НСД', 55);
let b = +prompt ('Введіть друге число для знаходження НСД', 255);
if (a === b) {
    console.log(`Найбільший спільний дільник ${a} і ${a} це ${a}`);
} else if (a < b) {
    for(let i = a; i >= 0; i--) {
        if ((a % i == 0) && (b % i == 0)) {
            console.log(`Найбільший спільний дільник ${a} і ${b} це ${i}`);
            break;
        }
    }
} else if (a > b) {
    for(let i = b; i >= 0; i--) {
        if ((a % i == 0) && (b % i == 0)) {
            console.log(`Найбільший спільний дільник ${a} і ${b} це ${i}`);
            break;
        }
    }
}

//5
let p = prompt('Введіть число для пошуку його дільників',44);
console.log(`Дільники числа: ${p}`)
for (let i = p ; i > 0; i--) {
    if (p % i == 0) {
        console.log(i);
    }
}

//Норма
//1
let num = +prompt('Введіть число для визначення чи є воно паліндромом', 123);
let i = num;
let reversenum = 0;
while (i) {
    reversenum = reversenum * 10 + i % 10;
    i = Math.floor(i / 10);
}
if ( num == reversenum) {
    console.log (`Число ${num} є паліндромом`);
} else console.log(`Число ${num} не є паліндромом`);

//2
let amount = +prompt('Введіть суму покупки', 400);
let price = (amount >= 200 && amount < 300 ) ? +(amount - (amount * 0.03).toFixed(2)).toFixed(2) :
    (amount >= 300 && amount < 500 ) ? +(amount - (amount * 0.05).toFixed(2)).toFixed(2) :
    (amount >= 500) ? +(amount - (amount * 0.07).toFixed(2)).toFixed(2) :
    amount;
console.log(`Ціна зі знижкою: ${price}`);

//3
let positive = 0, negative = 0, zeros = 0, even = 0, odd = 0;
for (let i = 7; i < 10; i++) {
    let x = +prompt('Введіть число');
    if (x == 0) zeros++;
    if (x > 0) positive++;
    if (x < 0) negative++;
    if (x % 2 == 0) even++;
    if (x % 2 != 0) odd++;
}
console.log(`Нулів: ${zeros}`);
console.log(`Додатніх: ${positive}`);
console.log(`Від'ємних: ${negative}`);
console.log(`Парних: ${even}`);
console.log(`Непарних: ${odd}`);

//4
let x = ' ', dayCounter = 0, currentDay = '';
while(x) {
    dayCounter = 1 + dayCounter % 7;
    switch(dayCounter) {
        case 1:
            currentDay = 'Понеділок';
            break;
        case 2:
            currentDay = 'Вівторок';
            break;
        case 3:
            currentDay = 'Середа';
            break;
        case 4:
            currentDay = 'Четвер';
            break;
        case 5:
            currentDay = 'П\'ятниця';
            break;
        case 6:
            currentDay = 'Субота';
            break;
        case 7:
            currentDay = 'Неділя';
            break;
    }
    x = confirm(`${currentDay},хочеш побачити наступний день`);
}

//Максимум
//1
let findNum = 0,
    minNum = 0,
    maxNum = 100;
while (true) {
    findNum = Math.round((minNum + maxNum) / 2);
    if (confirm (`Ваше число ${findNum}?`)) {
        break;
    } else if (confirm (`Ваше число > ${findNum}`)) {
        minNum = findNum;
    } else if (confirm (`Ваше число < ${findNum}`)) {
        maxNum = findNum;
    }
}

//2
for (let i = 2; i <= 9; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

//3

let day = +prompt('Введіть день (1-31)', '30');
let month =  +prompt('Введіть місяць (1-12)', '08');
let year = +prompt('Введіть рік', '1996');
let leapYear = (year % 4 == 0);

if ((day < 1 || day > 31 || month < 1 || month >12) ||
	(month == 2 && leapYear && day > 28) ||
	((month == 4 || month == 6 || month == 9 || month == 11)  && day > 30)) {
    console.log('Введено некоректні дані');
} else if ((month == 12) && (day == 31) )  {
    year ++;
    day = 131
    month = 1;
} else if (month == 2 && leapYear && day == 28) {
    day = 1;
    month++;
} else if ((month == 4 || month == 6 || month == 9 || month == 11) && day == 30) {
    day = 1;
    month++;
} else if (day == 31) {
    day = 1;
    month++;
} else day++;
month = (month < 10) ? `0${month}` : month;
day = (day < 10) ? `0${day}` : day;
console.log(`Наступна дата: ${day}.${month}.${year}`);
