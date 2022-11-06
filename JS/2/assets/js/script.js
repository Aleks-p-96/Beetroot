'use strict';
//Мінімум
//1
let a = 0.1,
    b = 0.2;
let c = (a + b).toFixed(1);
console.log(c)

//2
let str = '1',
    num = 2,
    result = +str + num;
console.log(result);

//3
let capacity = prompt('Вкажіть обсяш флешки в ГБ', 1) * 1000;
let files = Math.floor(capacity / 820);
console.log(`На флешку поміщається ${files} файлів`);

//Норма
//1
let money = +prompt('Яка у вас сума грошей?', 100);
let chocoPrice = +prompt('Яка вартість 1 шоколадки?',20);
let chocoAmount = Math.floor(money / chocoPrice);
let change = money - (chocoAmount * chocoPrice);
console.log (`Скільки шоколадок може купити користувач:${chocoAmount}`);
console.log (`Скільки здачі у нього залишиться:${change}`);2

//2
num = +prompt('Введіть число', 123);
console.log(`Було:${num}`);
let reversenum = 0;
while (num) {
    reversenum = reversenum * 10 + num % 10;
    num = Math.floor(num / 10);
}
console.log(`Стало:${reversenum}`);

//Максимум
//1
let deposit = +prompt('Введіть суму депозиту', 10000);
let monthes = +prompt('На який термін депозит (1-12', 2);
let rate = +prompt('Яка ставка депозиту?', 5);
let profit = +((deposit * rate * monthes) / (12 * 100)).toFixed(2);
console.log(`Сума нарахованих відсотків:${profit}`);

//2
console.log('2 && 0 && 3 => 0');
console.log('2 || 0 || 3 => 2');
console.log('2 && 0 || 3 => 3');

