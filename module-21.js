/*---------------------JavaScript Coding Problem [Part-1]--------------------- */

/*----------------------inch To feet------------------------*/  

function inchToFeet(inch) {
    const feet = inch / 12;
    return feet;
}
const shuboHeiht = 75;
// console.log(inchToFeet(shuboHeiht));
// output --->> 6.25


function inchToFeet2(inch) {
    const feet = inch / 12;
    const feetNumber = parseInt(feet);
    const inchRemaining = inch % 12;
    const height = `${feetNumber} feet and ${inchRemaining} inch`
    return height;
}
const korimHeight = 77;
// console.log(inchToFeet2(korimHeight));
// output --->> 6 feet and 5 inch


/*----------------------mile To kilometre------------------------*/

function mileToKilo(mile) {
    const kilo = mile * 1.60934;
    return kilo;
}
const mileDistence = 3;
// console.log(mileToKilo(mileDistence));


/*----------------------Leap Year------------------------*/

/**
 * 1.Those years are leap years that are not divisible by 100 && divisible by 4. 
 * 2.If the year is divisible by 400, then it will be leap year.
*/

function isLeapYear(year) {
    if(year % 100 !== 0 && year % 4 === 0){
        return true;
    }
    else if(year % 400 === 0){
        return true;
    }
    else{
        return false;
    }
}
const isLipi = 2072;
// console.log(isLeapYear(isLipi));



/*------- Calculate the average of the odd numbers in an array ---------*/

function oddAverage(arr) {
    const odds = [];
    for(const num of arr){
        if(num % 2 === 1){
            odds.push(num);
        }
    }
    let sum = 0;
    let count = 0;
    for(const num of odds){
        sum = sum + num;
        count = count + 1;
    }
    const avg = sum / count;
    return avg;
}
const numbersArray = [43, 56, 61, 70, 77, 85, 90];
// console.log(oddAverage(numbersArray));



/*------------ Remove duplicate items from an array -------------*/

function removeDuplicate(arr) {
    const unique = [];
    for(const item of arr) {
        if(unique.includes(item) === false){
            unique.push(item);
        }
    }
    return unique;
}
const biriyaniKhor = ['abul', 'babul', 'kabul', 'abul', 'cabul', 'babul'];
const uniqueArray = removeDuplicate(biriyaniKhor);
// console.log(uniqueArray);



/*----------------------------------------------------------------*/

// Math ------------>>

// min ----->>
const minimum = Math.min(23, 65, 21, 77, 2, -99, -12);
// console.log(minimum);
// output ---> -99
// Math.min()----> choto(minimum) shongkkha bar kore.


// max ----->>
const maximum = Math.max(23, 65, 21, 77, 2, -99, -12);
// console.log(maximum);
// output ---> 77
// Math.max() ----> Bodo(max) shongkkha bar kore.


// PI(3.1416) ------>>
const pi = Math.PI;
// console.log(pi);
// output ---> 3.141592653589793


// abs ------>> (absolute)
const difference = Math.abs(6-10);
// console.log(difference);
// output ---> 4
// Math.abs() ---> sign(+/-) bad diye just value dey (absolute value). 


// round ----------->>>>
const x = Math.round(2.25);
const y = Math.round(2.89);
// console.log(x, y);
// output ---> 2 3 
// Math.round() ---> number ke kacha kachi Integer a convert kore. 
// 2.25 ---> 2  | 2.89 --> 3 


// ceil ---------->>>>
const a = Math.ceil(2.0000001);
// console.log(a);
// output ---> 3
// Math.ceil()--->Number ke ceiling er dike(uporer dike) Integer a convert kore


// floor --------->>>>
const b = Math.floor(4.99999999);
// console.log(b);
// output ---> 4
// Math.floor()--->Number ke floor er dike(nicher dike) Integer a convert kore


// random ---------->>>>
const z = Math.random()
// console.log(z);
// Math.random() --> 0-1 er vitore ek ekbar ek ekta random number dey. 


// 0 - 10 er vitore random number ber kora ------>>
const rand = Math.random()*10;
const result = Math.round(rand);
// console.log(result);


/*------------------- JS Date and Time ----------------------*/

const today = new Date();
// console.log(today);

const date = new Date('2056-12-23')
// console.log(date);
// output --> 2056-12-23T00:00:00.000Z

// console.log(date.getDate());
// output ---> 23 

// console.log(date.getMonth());
// output ---> 11 [ekhane month index number diye hisheb kore]

// date.setMonth(8)
// console.log(date);
// output --> 2056-09-23T00:00:00.000Z
// "8" ke index number hishebe doreche.


// Formate change (local string) -------------->>>

// console.log(date.toLocaleDateString());
// output ---> 12/23/2056

// console.log(date.toDateString());
// output ---> Sat Dec 23 2056

// console.log(date.toLocaleTimeString());
// output ---> 6:00:00 AM

// console.log(date.toLocaleString());
// output ---> 12/23/2056, 6:00:00 AM

// console.log(date.toLocaleString('en-GB'));
// output ---> 23/12/2056, 06:00:00 [amader desher formate dd/mm/yy]


/*------------------- Swap Variable --------------------*/

// Variable er value exchange kora -------->>

// normal way ------>>
let a1 = 5;
let b1 = 7;

const temp = a1; //"temp" a temporary "a1" er value rakha hoiyeche.
a1 = b1;   //b1 er value a1 a set kora hoiyeche.
b1 = temp; //a1 er value b1 a set kora hoiyeche.
// console.log(a1, b1)
// output ---> 7 5


// destructing ------>>
let a2 = 3;
let b2 = 8;

[a2, b2] = [b2, a2];
// console.log(a2, b2);
// output ---> 8 3 



/*----------------------- Module-21's Practise Task ----------------------*/

// practice task------------>1
function cToF(c) {
    const f = (c * 9/5) + 32;
    return f;
}
// console.log(cToF(28));



// practice task------------>2
function repeatedTime(arr, find) {
    let count = 0;
    for(const item of arr){
        if(item === find){
            count++;
        }
    }
    return count;
}
const arrayNumbers = [5, 6, 11, 12, 98, 5];
const find = 5;
// console.log(repeatedTime(arrayNumbers, find));



// practice task------------>3
function countVowels(str) {
    let count = 0;
    for(let i = 0; i < str.length; i++){
        const alphabet = str[i];
        if(
            alphabet === 'a'||
            alphabet === 'e'||
            alphabet === 'i'||
            alphabet === 'o'||
            alphabet === 'u'
        ){
            count++;
        }
    }
    return count;
}
// console.log(countVowels('learning Programming'));



// practice task------------>4
function findLongestWord(str) {
    const word = str.split(' ');
    let longestWord = '';
    for(let i = 0; i < word.length; i++){
        if(word[i].length > longestWord.length){
            longestWord = word[i];
        }
    }
    return longestWord;
}
const rakibHobby = 'I am learning Programming to become a programmer';
// console.log(findLongestWord(rakibHobby));



// practice task------------>5
// Generate a random number between 10 to 20 ---->> 
const randomNumber = Math.random() * 10 + 10;
const randomInteger = Math.round(randomNumber);
// console.log(randomInteger);



/*-------------------------------------------------------------------------*/
/*--------------------------MODULE-21 COMPLETED----------------------------*/
/*-------------------------------------------------------------------------*/
