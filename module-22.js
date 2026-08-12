/*---------------------JavaScript Coding Problem [Part-2]--------------------- */

// max of three numbers ----->>>
function maxOfThree(num1, num2, num3) {
    if(num1 > num2){
        if(num1 > num3){
            console.log(num1, 'is the max number.');
        }
        else{
            console.log(num3, 'is the max number.');
        }
    }
    else{
        if(num2 > num3){
            console.log(num2, 'is the max number.');
        }
        else{
            console.log(num3, 'is the max number.');
        }
    }
}
// const maxNumber = maxOfThree(22, 34, 96);


// max of all numbers way 2 ----->>>
const max = Math.max(34, 67, 44, 77, 87, 21);
// console.log(max);



// max or min number in an array ----->>
function getMin(numbers) {
    let min = numbers[0];
    for(const num of numbers){
        if(num < min){
            min = num;
        }
    }
    return min;
}
const heights = [66, 56, 64, 9, 75, 72, 59];
// console.log(getMin(heights));



//  Use add and multiplication to calculate wood requirements--->>
function woodQuantity(chairQuantity, tableQuantity, bedQuantity) {
    const perChairWood = 3; 
    const perTableWood = 10;
    const perBadWood = 50;

    const chairTotalWood = chairQuantity * perChairWood;
    const tableTotalWood = tableQuantity * perTableWood;
    const bedTotalWood = bedQuantity * perBadWood;

    const totalWood = chairTotalWood + tableTotalWood + bedTotalWood;

    return totalWood;
}
const wood = woodQuantity(4, 2, 1);
// console.log(wood);



// Find the cheapest phone from an array of phone objects--->>
const mobiles = [
    {name: 'Samsung', price: 25000, ram: '4GB', color: 'white'},
    {name: 'Oppo', price: 30000, ram: '8GB', color: 'Navy-Blue'},
    {name: 'Xoami', price: 20000, ram: '3GB', color: 'Dark'},
    {name: 'Iphone', price: 140000, ram: '256GB', color: 'Red'},
    {name: 'Walton', price: 15000, ram: '8GB', color: 'Black'},
];

function getExpensivePhone(phones) {
    let expensive = phones[0];
    for(const phone of phones){
        if(phone.price > expensive.price){
            expensive = phone;
        }
    }
    return expensive;
}
const expensivePhone = getExpensivePhone(mobiles);
// console.log(expensivePhone);



// Calculate the total cost of the products in a shopping cart ---->
const products = [
    {name: 'pant', price: 1200, quentity: 2},
    {name: 'shirt', price: 800, quentity: 3},
    {name: 'bag', price: 1800, quentity: 1},
    {name: 'shoe', price: 2200, quentity: 1},
];

function cartTotal(products) {
    let total = 0;
    for(const product of products){
        const thisProductPrice = product.price * product.quentity;
        total = total + thisProductPrice;
    }
    return total;
}
const totalShoppingCost = cartTotal(products);
// console.log(totalShoppingCost);



// (advanced) Multi-layer discount price calculation ---->>
function layeredDiscountedPrice(quentity) {
    const first100Price = 100;
    const second100Price = 90;
    const above200Price = 70;

    if(quentity <= 100){
        const total = first100Price * quentity;
        return total;
    }
    else if(quentity <= 200){
        const first100Total = 100 * first100Price;
        const remainingQuentity = quentity - 100;
        const remainingQuentityPrice = remainingQuentity * second100Price;
        const total = first100Total + remainingQuentityPrice;
        return total;
    }
    else{
        const first100Total = 100 * first100Price;
        const second100Total = 100 * second100Price;
        const remainingQuentity = quentity - 200;
        const remainingQuentityPrice = remainingQuentity * above200Price;
        const total = first100Total + second100Total + remainingQuentityPrice;
        return total;
    }
}
// console.log(layeredDiscountedPrice(210));



// Simple calculator to call function inside a function ---->>
function add(num1, num2) {
    const sum = num1 + num2;
    return sum;
}

function subtract(num1, num2) {
    const sub = num1 - num2;
    return sub;
}

function multiply(num1, num2) {
    const mult = num1 * num2;
    return mult;
}

function divide(num1, num2) {
    const divide = num1 / num2;
    return divide;
}

function calculator(a, b, operation) {
    if (operation === 'add') {
        const result = add(a, b);
        return result;
    }
    else if (operation === 'subtract') {
        const result = subtract(a, b);
        return result;
    }
    else if (operation === 'multiply') {
        const result = multiply(a, b);
        return result;
    }
    else if (operation === 'divide') {
        const result = divide(a, b);
        return result;
    }
    else{
        return "Only 'add', 'subtract', 'multiply' and 'divide' are allowed"; 
    }
}
// console.log(calculator(4, 6, 'multiply'));



/*----------------------- Module-22's Practise Task ----------------------*/

// practice task------------>1
function lowestNumber(numbers) {
    let lowest = numbers[0];
    for(const num of numbers){
        if (num < lowest) {
            lowest = num;
        }
    }
    return lowest;
}
const heights2 = [167, 190, 120, 165, 137];
// console.log(lowestNumber(heights2));



// practice task------------>2
function smallestName(friends) {
    let smallName = friends[0];
    for(const friend of friends){
        if (friend.length < smallName.length) {
            smallName = friend;     
        }
    }
    return smallName;
}
const friends = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
// console.log(smallestName(friends));



// practice task------------>3
function calculateElectronicsBudget(laptopQuantity, tabletQuantity, mobileQuantity) {
    const laptopPrice = 35000;
    const tabletPrice = 15000;
    const mobilePrice = 20000;
    
    const budgetForLaptop = laptopPrice * laptopQuantity;
    const budgetForTablet = tabletPrice * tabletQuantity;
    const budgetForMobile = mobilePrice * mobileQuantity;
    
    const totalBudget = budgetForLaptop + budgetForTablet + budgetForMobile;
    return totalBudget;
}
// console.log(calculateElectronicsBudget(1, 3, 2));



// practice task------------>4
const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
];

function findAveragePhonePrice(phones) {
    let count = 0;
    let allPhonePrice = 0;
    for(const phone of phones){
        allPhonePrice = allPhonePrice + phone.price;
        count += 1;
    }
    const averagePhonePrice = allPhonePrice / count;
    return averagePhonePrice;
}
const averagePrice = findAveragePhonePrice(phones);
// console.log(averagePrice);



// practice task------------>5
const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];
function totalProvidedSalary(workers) {
    let totalSalary = 0;
    for(const worker of workers){
        const currentSalary = (worker.experience * worker.increment) + worker.starting;
        totalSalary = totalSalary + currentSalary;
    }
    return totalSalary;
}
const perMonthSalary = totalProvidedSalary(employees);
// console.log(perMonthSalary);



/*-------------------------------------------------------------------------*/
/*--------------------------MODULE-22 COMPLETED----------------------------*/
/*-------------------------------------------------------------------------*/
