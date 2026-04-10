/*--------------------------- Function --------------------------- */

/**
 * Structure ------>>
 * -------------------------
 * function name(){
 * ...........
 * ...........
 * }
 * -------------------------
*/


//Function Declaretion ---->
function fanOffKoro(){
    console.log('bosha theke uthe daraw.');
    console.log('walk towards the switch.');
    console.log('click the switch to off of the fan.');
}

//Call the Function ---->
// fanOffKoro();


/**********************************
 * Structure ---->
 * -------------------------
 * function name(parameter){
 * ..............;
 * ..............;
 * }
 * 
 * name(argument);
 * -------------------------
 * ekta function a ek ba ekadik 'parameter' thakte pare.
 * function Declare korar somoi jotogula "parameter" dibe, Call korar somoi thik totogulo "argument" dite hobe.
 * "Parameter"--> gulor access sudhu function er vitore thakbe, Baire thakbe na.
 * "Argument" ---> jekono man o thakte pare, abr variable o thakte pare.
*/


function square(number){
    const borgo = number * number;
    console.log(borgo);
}
// square(3);
// square(7);


//-----------------------------------
function add(a, b, c){
    const sum = a + b + c;
    console.log(sum);
}
// add(4, 6, 10);


//-----------------------------------
function difference(num1, num2){
    const diff = num1 - num2;
    console.log(diff);
}

myAge = 20;
myFatherAge = 51;
// difference(myFatherAge, myAge);


//-------------------------------------
function tenTimes(number) {
    const result = number * 10;
    return result;
}
// tenTimes(5);

const output = tenTimes(7);
// console.log(output);

/**
 * tenTimes(5) ----> eta diye function call kora jabe but result ta diye kicu kora jabe na. onno jaigai use kora jabe na.
 * ----------------------------------------------------------
 * ----------------------------------------------------------
 * const output = tenTimes(7) ----> Evabe korle oi result ta ekta variable er vitore thakbe, setake onno jaigai use kora jabe.
*/


//---------------------------------
function fiveTimes(number) {
    return number * 5;
}
// console.log(fiveTimes(8));


//----------------------------------
function doMath(num1, num2) {
    const sum = num1 + num2;
    const diff = num1 - num2;
    const mult = sum * diff;
    const divide = mult / 2;
    return divide;
}
const result = doMath(8, 5);
// console.log(result);


//------------------------------------
function isEven(number) {
    if(number % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}
// console.log(isEven(7));
// console.log(isEven(12));


//----------------------------------
function isOdd(number) {
    if(number % 2 === 1){
        return true;
    }
    return false;
}
// console.log(isOdd(39));
// console.log(isOdd(90));


/***************************
 * "Parameter" hishebe jekono types er variable deya jabe.
 * such as --> "number", "string", "boolean", "array", "object" etc.
*/


//-------------------------------------
function sumOfNumbers(number) {
    let sum = 0;
    for(i=0; i<number.length; i++){
        sum = sum + number[i];
    }
    return sum;
}
const nums = [12, 8, 4, 6, 5];
const sum = sumOfNumbers(nums);
// console.log(sum);


//--------------------------------------
function evenNumbersOnly(numbers) {
    const evens = [];
    let a = 0;
    while(a < numbers.length){
        const n = numbers[a];
        if(n % 2 === 0){
            evens.push(n);
        }
        a++;
    }
    return evens;
}
const numbs = [13, 8, 10, 27, 44];
const n = evenNumbersOnly(numbs);
// console.log(n);



/*-------------------------Module-20's Practise Task------------------------*/

// practice task------------>1
function multiply(a, b, c, d) {
    return a * b * c * d;
}
// console.log(multiply(3, 4, 5, 2));



// practice task------------>2
function evenOrOdd(number) {
    if(number % 2 === 1){
        const result = number * 2; 
        return result;
    }
    else{
        const result = number / 2;
        return result;
    }
}
// console.log(evenOrOdd(30));



// practice task------------>3
function makeAvg(arrs, size) {
    let sum = 0;
    for(let arr of arrs){
        sum = sum + arr;
    }
    const result = sum / size;
    return result;
}
const someNumbers = [2, 5, 3, 13, 7];
const amountOfNumber = 5;
// console.log(makeAvg(someNumbers, amountOfNumber))



// practice task------------>4
function countZero(binaryString) {
    let amountOfZero = 0;
    for(let i=0; i<binaryString.length; i++){
        const binaryNumber  = binaryString[i];
        if(binaryNumber == 0){
            amountOfZero = amountOfZero + 1;
        }
    }
    return amountOfZero;
}
const stringOfBinary = '0101000001110101010111000011'
// console.log(countZero(stringOfBinary));



// practice task------------>5
function oddOrEven(number) {
    if(number % 2 === 0){
        return 'Even';
    }
    else{
        return 'Odd';
    }
}
// console.log(oddOrEven(89));



/*-------------------------------------------------------------------------*/
/*--------------------------MODULE-20 COMPLETED----------------------------*/
/*-------------------------------------------------------------------------*/
