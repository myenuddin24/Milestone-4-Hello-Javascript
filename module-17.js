/*-------------------------Conditionals-----------------------------------*/

/**
 * Comparison Operator -->
 * 1. bigger: >
 * 2. less: <
 * 3. equal: ==
 * 4. greater than or equal: >=
 * 5. less than or equal: <=
 * 6. not equal: !=
 * 
 * --------------------------------
 * 7. and: &&
 * 8. or: ||
*/ 

/*--------------------------|||||||||||||||||||-----------------------------*/

// console.log(10 == 10);
// console.log(10 == '10');
// console.log(10 === '10');

/**
 * (10 == '10') ekhane "==" duble equal only value cheak kore.
 * output--> true
*/ 

/**
 * (10 === '10') ekhane "===" triple equale value and type cheak kore.
 * output--> false
 * because triple equal value cheak kore "10" paileo type cheak kore ekta ke  string pabe. tai 2 ta ke "number" na pawai output "false" dibe.
*/  


// console.log(10 != '10');

// output--> false
// type cheak na korai 10 , 10 er soman noi ke "false" bolce.


// console.log(10 !== '10');

// output--> true
// [!==] equal 2 ta howai type soho cheak korce. type "string" hoawi 10, 10 er soman noi ke "true" dice. 

/*--------------------------|||||||||||||||||||-----------------------------*/

// if , else ---------------------->
/**
 * Structure -->
 * --------------------
 * if(condition){
 * ..........
 * }
*/  

var weight = 40;

if(weight <= 20){
    // console.log("I will carry it by myself");
}
else{
    // console.log("I will rent a rickshaw");
}

/*--------------------------|||||||||||||||||||-----------------------------*/

const salary = 30000;
const height = 66;
const isBCS = true;
const hasCar = false;

if(salary > 20000 && height >= 72){
    // console.log('Patro kobul');
}
else{
    // console.log('Patro Next');
}

/********************************/

if(salary > 25000 || height >= 68){
    // console.log('patro kobul');
}
else{
    // console.log('patro next');
}

/**********************************/
// Multiple conditions-->

if((salary > 25000 || hasCar == true) && isBCS == true){
    // console.log('ami kobul');
}
else{
    // console.log('onno patro dekho');
}

/*--------------------------|||||||||||||||||||-----------------------------*/

// Multi level Condition-->

const price = 9000;

if(price >= 8000){
    const discount = price * 10 / 100;
    const payAmount = price - discount;
    // console.log(payAmount);
}
else if(price >= 5000){
    const discount = price * 5 / 100;
    const payAmount = price - discount;
    // console.log(payAmount);
}
else if(price >= 3000){
    const discount = price * 2 / 100;
    const payAmount = price - discount;
    // console.log(payAmount);
}
else{
    // console.log(price);
}

/*--------------------------|||||||||||||||||||-----------------------------*/

// Nested------->

const money = 5;

if(money >= 500){
    if(money >= 800){
        // console.log('lets go to Coxs Bazar');
    }
    else if(money >= 600){
        if(money >= 700){
            // console.log('lets go to Sajek');
        }
        else{
            // console.log('lets go to Bandorbon');
        }
    }
    else{
        // console.log('lets go to Pottenga');
    }
}
else{
    if(money >= 300){
        // console.log('lets go to Kacchi Dine');
    }
    else{
        if(money >= 200){
            // console.log('lets go to Normal Resturent');
        }
        else if(money >= 10){
            // console.log('Muri kha halar put');
        }
        else{
            // console.log('You are a pokinni!!!!');
        }
    }
}

// uporer moto "if", "else if", "else" er bitore multiple vabe abr "if", "else if", "else" use kora jai.

/*--------------------------|||||||||||||||||||-----------------------------*/

/**
 * TERNARY--> etar three parts thake.
 * if-else er "shorthand"
 * mane boro kore na likhe short kore 1 line a lekha. ektu advance.
 * ---------------------
 * Structure-->
 * condition ? if the condition is true : if the condition is flase
 * ---------------------
 * */ 

const age = 12;

// Normal way
if(age >= 18){
    // console.log('you can vote');
}
else{
    // console.log('you can not vote');
}

// Simple Ternary ---------->
// age >= 18 ? console.log('you can vote') : console.log('you can not vote')

/****************************/ 

let cost = 500;
const isLeader = true;

// Normal way
// if(isLeader === true){
//     cost = 0;
// }
// else{
//     cost = cost + 100;
// }
// console.log(cost)

// Ternary---------->
cost = isLeader === true ? 0 : cost + 100
// console.log(cost);

/***************************/

let amount = 6000;
const isChairman = true;

// Normal way 
// if(isChairman === true){
//     if(amount >= 1000){
//         amount = amount / 2;
//     }
//     else{
//         amount = 0;
//     }
// }
// else{
//     amount = amount +100 ;
// }
// console.log(amount)

// Ternary------>
amount = isChairman === true ? amount > 1000 ? amount / 2 : 0 : amount = amount + 100
// console.log(amount)

// amount = isChairman === true ? amount > 1000 ? amount/2 : 0 : amount = amount + 100
// uporer line ta te multiple condition use kora hoiyece.
// amount = isChairman === true ?
//              amount > 1000 ?
//                   amount/2 : 0 
//              : amount = amount + 100
// oneke avabe nesting kore rakhe jate sohoje buja jai.

/*--------------------------|||||||||||||||||||-----------------------------*/

const isPresident = true;

// if(isPresident === true)
if(isPresident){
    // console.log('President ashce jaiga charo');
}
else{
    // console.log('vitore dukte dio na');
}
// [if(isPresident)] eta r [if(isPresident === true)] eki kotha. [if(isPresident)] eta deya mane "isPresident === true" condition set kora.

/********************************************/

/**
 * [!]--> eta hocche 'Logical Not Operator'
 * [!!]--> Double Not --> mane abr ager man cole ashbe.
 * onk somoi kono kicur man 'true' 'false' cheak korar jonno [!!] use hoi.
*/ 

const isPassed = false;

// if(isPassed === false)
if(!isPassed){
    // console.log('tore biya diye dimu!!');
}
else{
    // console.log('tore poramu Doctor banamu!!');
}
// [if(!isPassed)] eta r [if(isPassed === false)] eki kotha. [if(!isPassed)] eta deya mane "isPassed === false" condition set kora.

/*--------------------------|||||||||||||||||||-----------------------------*/

/*-----------------------Module-17's Practice Task--------------------------*/

// Practice Task--------> 1
const burgerPrice = 400;
let cocacolaPrice = 30;
let total;

if(burgerPrice >= 500){
    cocacolaPrice = 0;
    total = burgerPrice + cocacolaPrice;
}
else{
    total = burgerPrice + cocacolaPrice;
}
// console.log(total)


// Practice Task--------> 2
// BMI Calculator

const weight2 = 80;    //(kg) 
const height2 = 1.8;   //(m)
const BMI = weight2 / (height2 * height2);

if(BMI < 18.5){
    // console.log('you are underweight.');
}
else if(BMI >= 18.5 && BMI <= 24.9){
    // console.log('you are normal.');
}
else if(BMI >= 25 && BMI <= 29.9){
    // console.log('you are overweight.');
}
else{
    // console.log('you are obese.')
}


// Practice Task--------> 3
const marks = 80;

if(marks >= 90 && marks <= 100){
    // console.log('Your Grade: A');
}
else if(marks >= 80 && marks <= 89){
    // console.log('Your Grade: B');
}
else if(marks >= 70 && marks <= 79){
    // console.log('Your Grade: C');
}
else if(marks >= 60 && marks <= 69){
    // console.log('Your Grade: D');
}
else if(marks >= 0 && marks <= 59){
    // console.log('Your Grade: F');
}
else{
    // console.log('Invalid Number');
}


// Practice Task--------> 4
const myScore = 86;
const friendScore = 78;

if(myScore >= 80){
    if(friendScore >= 80){
        // console.log('Lets go for a lunch!!');
    }
    else if(friendScore < 80 && friendScore >= 60){
        // console.log('good luck next time.');
    }
    else if(friendScore < 60 && friendScore >= 40){
        // console.log('friends message unseen.');
    }
    else{
        // console.log('block friend');
    }
}
else{
    // console.log('go to home and sleep and act sad');
}


// Practice Task--------> 5
const num1 = 42;
const num2 = 45;
let result;

if(num1 > num2){
    result = num1 * 2;
}
else{
    result = num1 + num2;
}
// console.log(result);

// Ternary--->
result = num1 > num2 ? num1 * 2 : num1 + num2
// console.log(result);

    
// Practice Task--------> 6
const ticket = 800;
const customerAge = 25;
const isStudent = false;
let ticketPrice;

if(customerAge < 10){
    const discountPrice = ticket;
    ticketPrice = ticket - discountPrice;
}
else if(isStudent){
    const discountPrice = ticket * 0.5;
    ticketPrice = ticket - discountPrice;
}
else if(customerAge >= 60){
    const discountPrice = ticket * 0.15;
    ticketPrice = ticket - discountPrice;
}
else{
    ticketPrice = ticket;
}
// console.log(ticketPrice)


/*-------------------------------------------------------------------------*/
/*--------------------------MODULE-17 COMPLETED----------------------------*/
/*-------------------------------------------------------------------------*/
