'use strict';

// alert("Всі методи об'єктів ви можете побачити відкривши консоль");
console.log(`List of objects and methods:
Object car:
car.showInfo()
car.changeDriver()
car.checkDriver()
car.calcTimeAndFuel ()

Object time:
time.showTime ()
time.changeHours() 
    enter value in brackets or prompt by default
time.changeMinutes()
    enter value in brackets or prompt by default
time.changeSeconds()
    enter value in brackets or prompt by default

Object fractionMath:
fractionMath.add(fractObj1,fractObj2):
    addition of 2 objects-fractions.
fractionMath.sub(fractObj1,fractObj2):
    subtraction of 2 objects-fractions.
fractionMath.mult(fractObj1,fractObj2):
    multiplication of 2 objects-fractions.
fractionMath.div(fractObj1,fractObj2):
    division of 2 objects-fractions.
fractionMath.red(fractObj1,fractObj2):
    reduction of an object-fraction.

Now already created 2 objects of fractions:
    firstFraction and secondFraction
You can create new fraction objects using syntax:
    let name = new Fraction (topNum,bottomNum)
All created fraction object has method to show them:
    as example :
    fract1.showFraction

You can do math operations with created fraction using object fractionMath
`)

// Мінімум
// 1
let car = {
    manufacturer: 'Daewoo',
    model: 'Lanos',
    year: 2008,
    'average speed': 110,
    fuelTank: 48,
    fuelConsumption: 8.5,

    showInfo() {
        let info = ``;
        for (let key in this) {
            if (!(typeof this[key] == 'function')) {
                info += `
                        ${key} : ${car[key]}`;
            }
        }
        alert(info);
    },

    changeDriver(driverName = prompt('Enter the new driver', 'Alex')) {
        this['driver'] = driverName;
    },

    checkDriver(driverName = prompt('Enter the driver for check', 'Alex')) {
        let currentDriver = this['driver'];
        let checkedDriver = driverName;
        if (checkedDriver.toUpperCase == currentDriver.toUpperCase) {
            alert(`Yes, the current driver of this car is ${this['driver']}`);
            return true;
        }
        alert(`No, this car has other driver`);
        return false;

    },

    calcTimeAndFuel () {
        // let distance = a;
        let distance = +prompt('Please enter travel distance in km', );
        let hours = 0;
        let minutes = Math.round(distance / this["average speed"] * 60);
        // console.log(`Totalminutes: ${minutes}`);
        if (minutes >= 60) {
            hours = Math.floor(minutes / 60);
            minutes -= hours * 60;
        }
        let addHours = 0;
        for (let i = 1; i <= hours; i++) {
            if (i % 4 == 0) {
                addHours++;
            }
        }
        hours += addHours;
        let fuel = +(this['fuelConsumption'] / 100 * distance).toFixed(1);
        alert(`You need ${hours} hours and ${minutes} minutes and ${fuel} liters of fuel to cover this distance`);
        // console.log(`hours: ${hours}`);
        // console.log(`minutes: ${minutes}`);
    },
}
// car.showInfo();
car.changeDriver();
// car.checkDriver();
// car.calcTimeAndFuel();
// for (let key in car) {
    
//     console.log(`${key} : ${car[key]}, ${typeof car[key]}`);
// }


//2

let time = {
    hours : 3,
    minutes: 22,
    seconds: 43,

    showTime () {
        alert(`Current time is ${this.hours}h ${this.minutes}m ${this.seconds}s`);
    },

    changeHours (entryValue = +prompt('Enter value to + or - hours', 2)) {
        this.hours = this.hours + entryValue;
        if (this.hours < 0) {
            this.hours = 0;
            this.minutes = 0;
            this.seconds = 0;
        }
    },

    changeMinutes (entryValue = +prompt('Enter value to + or - minutes', 15)) {
        let hoursChange;
        this.minutes = this.minutes + entryValue;
        if (this.minutes >= 60 || this.minutes < 0 ) {
            let minutes = this.minutes;
            hoursChange = Math.floor(minutes / 60);
            this.minutes -= hoursChange * 60;
            this.changeHours(hoursChange);
        }
    },

    changeSeconds (entryValue = +prompt('Enter value to + or - seconds', 15)) {
        let minutesChange;
        this.seconds = this.seconds + entryValue;
        if (this.seconds >= 60 || this.seconds < 0 ) {
            let seconds= this.seconds;
            minutesChange = Math.floor(seconds / 60);
            this.seconds -= minutesChange * 60;
            this.changeMinutes(minutesChange);
        }
    },
    
}
time.showTime();
// time.changeMinutes(37);
time.changeSeconds();
time.showTime();


//3

function Fraction  (topNumber = +prompt('Please enter top number of Frection', 3),
                    bottomNumber = +prompt('Please enter bottom number of Frection', 9)) {
    this['topNumber'] = topNumber;
    this['bottomNumber'] = bottomNumber;

    this.showFraction = function() {
        console.log(`${this.topNumber} / ${this.bottomNumber}`)
    }
}
let fract1 = new Fraction ();
let fract2= new Fraction (5,6);

let fractionMath = {
    addition(fraction1, fraction2) {
        this.topNumber = (fraction1['topNumber'] * fraction2['bottomNumber']) +
                          fraction2['topNumber'] * fraction1['bottomNumber'] ;
        this.bottomNumber = fraction1['bottomNumber'] * fraction2['bottomNumber'];
        console.log(`${this.topNumber} / ${this.bottomNumber}`);
    },
    subtraction(fraction1, fraction2) {
        this.topNumber = (fraction1['topNumber'] * fraction2['bottomNumber']) -
                          fraction2['topNumber'] * fraction1['bottomNumber'] ;
        this.bottomNumber = fraction1['bottomNumber'] * fraction2['bottomNumber'];
        console.log(`${this.topNumber} / ${this.bottomNumber}`);
    },
    multiplication(fraction1, fraction2) {
        this.topNumber = fraction1['topNumber'] * fraction2['topNumber'];
        this.bottomNumber = fraction1['bottomNumber'] * fraction2['bottomNumber'];
        console.log(`${this.topNumber} / ${this.bottomNumber}`);
    },
    division(fraction1, fraction2) {
        this.topNumber = fraction1['topNumber'] * fraction2['bottomNumber'];
        this.bottomNumber = fraction1['bottomNumber'] * fraction2['topNumber'];
        console.log(`${this.topNumber} / ${this.bottomNumber}`);
    },
    reduction(fraction) {
        let divisior = gcd(fraction['topNumber'], fraction['bottomNumber']);
        this.topNumber = fraction['topNumber'] / divisior;
        this.bottomNumber = fraction['bottomNumber'] / divisior;
        console.log(`${this.topNumber} / ${this.bottomNumber}`);
    },
}

function gcd (num1,num2) { //Greatest Common Divisior
    let i;
    if (num1 > num2) {
        i = num2;
    } else {
        i = num1;
    };
    for (i; i > 0; i-- ) {
        if ((num1 % i == 0) && (num2 % i == 0)) {
            return i;
        }
    }
}

fract1.showFraction();
fract2.showFraction();
// fractionMath.reduction(fract1);





