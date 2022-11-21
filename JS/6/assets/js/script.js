'use strict';
console.log(`
List of functions:
function Product(name, amount, price = 15, purchased)
function showNonBuyFirst(arr)
function showProducts(arr)
function markPurchase(array,productName)
function deleteFromList(arr, productForDelete)
function addToList(arr, productName, amount, price)
function totalSum (arr)
function nonPurchasedSum (arr)
function sortList(arr, sortType = 'toMax' [or 'toMin'])
`)

const shoppingList = [
    new Product('banana', 3 , 60 , false),
    new Product('apple', 7, 12, true),
    new Product('orange', 5, 65, false),
    // new Product('tomato', 5, 70, true),
    // new Product('cucumber', 5, 66, false),
    // new Product('bread', 5, 18, false),
    // new Product('water', 5, 10, true),
    // new Product('juice', 5, 37, false),
    // new Product('beer', 5, 30, true),
    // new Product('chips', 5, 45, true),

];
console.log('Displaying non-purchased first')
showNonBuyFirst(shoppingList);
console.log("Marking banana purchase:")
markPurchase(shoppingList,'banana');
showProducts(shoppingList);
console.log('Deleting apple from list:')
deleteFromList(shoppingList,'apple');
showProducts(shoppingList);
console.log('Adding cherry and + some orange to list:')
addToList(shoppingList, 'cherry', 3, 68);
addToList(shoppingList, 'orange', 3);
showProducts(shoppingList);
totalSum(shoppingList);
nonPurchasedSum(shoppingList);
console.log('sorting +')
sortList(shoppingList,'toMax');
showProducts(shoppingList);
console.log('sorting -');
sortList(shoppingList,'toMin');
showProducts(shoppingList);












function Product(name, amount, price = 15, purchased) {
    this.name = name;
    this.amount = amount;
    this.price = price;
    this.purchased = purchased ? 'yes' : 'no';
    this.totalPrice = price * amount;
}

function showNonBuyFirst(arr) {
    let no = arr.filter( product => product.purchased == 'no');
    let yes = arr.filter( product => product.purchased == 'yes');
    let result = no.concat(yes);
    let item = `
`;
    for (let product of result) {
        console.log("Product:")
        for (let key in product) {
            item += (`${key}: ${product[key]}
`);
        }
        console.log(item);
        item = '';
    }
}

function showProducts(arr) {
    let item = `
`;
    for (let product of arr) {
        console.log("Product:")
        for (let key in product) {
            item += (`${key}: ${product[key]}
`);
        }
        console.log(item);
        item = '';
    }
}

function markPurchase(array,productName) {
    for (let product of array) {
        for (let key in product) {
            if(product[key] == productName);
            product['purchased'] = 'yes';
        }
    }
}

function deleteFromList(arr, productForDelete) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]['name'] == productForDelete) {
            arr.splice(i,1);
        }
    }
}

function addToList(arr, productName, amount, price) {
    for (let product of arr) {
        if (product['name'] == productName) {
            product['amount'] += amount;
            product['totalPrice'] = product['amount'] * product['price'];
            return;
        }
    }
    arr.push(new Product(productName, amount, price, false));

}

function totalSum (arr) {
    let totalSum = 0;
    for (let product of arr) {
        totalSum += product['totalPrice'];
    }
    console.log(`Total price of all products: ${totalSum}`);
    return totalSum;
}

function nonPurchasedSum (arr) {
    let totalSum = 0;
    for (let product of arr) {
        if( product['purchased'] == 'no') {
            totalSum += product['totalPrice'];
        }
    }
    console.log(`Total price of not purchased products: ${totalSum}`);
    return totalSum;
}

function sortList(arr, sortType = 'toMax') {
    let type = sortType;
    if (type == 'toMax') {
        arr.sort((x, y) => (x.totalPrice > y.totalPrice) ? 1 : -1);
    }
    if (type == 'toMin') {
        arr.sort((x, y) => (x.totalPrice > y.totalPrice) ? -1 : 1);
    }
}



