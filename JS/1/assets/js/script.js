'use strict';

let userName = prompt ("What's your name?", '');
console.log(`Your name is ${userName}`);
const currentYear = 2022;
let userBirthdayYear = prompt ("What`s year of your birth?");
let userAge = currentYear - userBirthdayYear;
console.log (`You are ${userAge} years old`);
let squareSide = prompt("Please enter length of the square side")
let perimeter = squareSide * 4;
console.log(`Perimeter of square = ${perimeter}`);
let circleRadius = prompt("Please enter circle radius");
let circleArea = Math.PI * circleRadius**2;
console.log(`Area of a circle = ${circleArea}`);
let distance = prompt("Please enter distance i km");
let time = prompt("Please enter time in hours");
let speed = distance / time;
console.log(`Your preferred speed is ${speed} km/h`);
const UahEurRate = 0.027;
let moneyUah = prompt("Please enter the amount of UAH");
let moneyEur = moneyUah * UahEurRate;
console.log (`${moneyUah} UAH = ${moneyEur} EUR`);



