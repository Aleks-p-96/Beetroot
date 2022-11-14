'use strict';
alert(`Результати прикладів роботи функцій представлені в консолі.
Для перевірки роботи функцій з іншими аргументами їх можна викликати через консоль`);
console.log(`Назви функцій для виклику:
argumentsQuantity() : кількість переданих аргументів,
compare(a,b) : порівняння двох чисел,
factorial(n) : обчислення факторіалу,
calcArea(a,b) : обчислення площі прямокутника,
isPerfect(x) : перевірка чи число є досоналим,
showPerfectFromRange() : Вивід в консоль досконалих чисел
з діапазону від a до b.`)

//Мінімум
//1

console.log(`Function declaration:
function "function-name" (arguments) {
    fuction body
}`);
console.log(`Function expression:
let "function-name" = function (arguments) {
    function body
};`);
console.log(`Arrow  expression:
let "function-name" = (arguments) => expression;
or:
let "function-name" = (arguments) => {
    function body
}`);

//2
1
function argumentsQuantity() {
    return arguments.length;
}
console.log(`Результат роботи функції якій передано 5 аргументів: ${argumentsQuantity(1,38,7,'hdh','qwe')}`)

//3

function compare(a,b) {
    if (a == b) return 0;
    if (a > b) return 1;
    return -1;
}
console.log(`Результат порівняння чисел -3 і 8 : ${compare(-3,8)}`)  ;

// 4

let factorial = function (n) {
    let result = 1;
    for (let i = 1; i <= n; i++ ) {
        result = result * i;
        }
        return result;
    };
console.log(`Результат обчислення факторіалу числа 6 : ${factorial(6)}`)  ;

//5

function digitsToNumber(a,b,c) {
    let result = +`${a}${b}${c}`;
    return result;
}

digitsToNumber(3,8,9);

//6

let calcArea = (a, b = a) => {
    let result = a * b;
    return result;
};
console.log(`Результат обчислення площі прямокутника з довжинами сторін 3 і 7 : ${calcArea(3,7)}`)

//Норма

//1

let isPerfect = (x) => {
    let divisiorSum = 0;
    for (let i = (x - 1) ; i > 0; i-- ) {
        if (x % i == 0) {
            divisiorSum = divisiorSum + i;
        } else continue;
    }
    if (divisiorSum == x) {
        return true;
    } else return false;
};
console.log(`Результат перевірки чи число 28 є досконалим : ${isPerfect(28)}`);

//2

function showPerfectFromRange (a,b) {
    console.log(`Досконалі числа з проміжку від ${a} до ${b} :`)
    for(let i = a; i <= b; i++) {
        if (isPerfect(i)) {
            console.log(i);
        }
    }
}
showPerfectFromRange(3,999)
