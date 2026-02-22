/*-----------------------------Loop------------------------------------*/
 
/**
 * for...of
 * for__loop
 * while__loop
*/

/*----------------for...of-------------------*/

const numbers = [12, 34, 54, 65, 45, 87, 92, 43];
for(const num of numbers){
    // console.log(num);
}

const fruits = ['mango', 'apple', 'orange', 'banana', 'watermelon'];
for(const fruit of fruits){
    // console.log(fruit);
}

// array er vitorer upadan gulore ekta ekta kore dibe.


/*----------------while__Loop-------------------*/

let amount = 0;   //loop variable
while(amount < 5){    //loop condition
    // console.log('looping!!', amount);   // loop satement
    // amount = amount + 1;   //loop variable change
    // amount += 1;   //loop variable change
    amount++;     //loop variable change
}
// jotokhon porjonto condition "true" hobe totokkhon porjonto loop colbe.

// 1-10 porjonto shongkhar jogfol---->
let num1 = 1;    
let sum1 = 0;
while(num1 <= 10){   
    sum1 = sum1 + num1;
    // console.log(sum1);
    num1++;
} 

// 1-10 porjonto odd number
let num2 = 1;
while(num2 <= 10){
    if(num2 % 2 === 1){
        // console.log(num2);
    }
    num2++;
}


/*----------------for__Loop-------------------*/

// incremental (1 --> 10)
for(let i = 1; i <=10; i++){
    // console.log(i);
}

// Decremental (10 --> 1)
for (let i = 10; i >= 1; i--){
    // console.log(i);
}

// odd number
for(let i = 1; i <=20; i=i+2){
    // console.log(i);
}

// even number
for(let i = 0; i <= 20; i=i+2){
    // console.log(i);
}

// sum
let sum2 = 0;
for (let i = 1; i<=10; i++){
    sum2 = sum2 + i;
}
// console.log(sum2);

// even number
for (let i = 1; i<=10; i++){
    if(i % 2 === 0){
        // console.log(i);
    }
}


/*----------------break-------------------*/

for(let i = 1; i < 150; i++){
    if(i >= 11){
        break;
    }
    // console.log(i)
}

/**
 * "Break" --> code 'Break' a posale loop end hoi jabe.
 * "Break" use korle 'Break' er pore r code run kore na.
*/ 


/*----------------Continue-------------------*/

let n = 0;
while(n <= 10){
    n++;    //n++ statement er age na dile n=0 theke loop gurbe "n" er man barbe na 
    if(n % 2 == 1){
        continue;
    }
    // console.log(n);
}
// bitore if condition true hole sei number ke skip kore loop continue korbe.

/**
 * continue --> skip the code for this condition.
 * "continue" use korle sei condition er jonno jeta true hobe seta skip kore.
 * mane condition true hole code continue kore tobe oi output ke skip kore.
*/ 


/*----------------do--while-------------------*/

let x = 1;
do{
    // console.log(x);
    x++;
}
while(x <= 10);

/**
 * "do while" loop er syntex uporer moto.
 * 1st a "do" diye kaj and pore "while" diye condition. 
*/ 



/*-------------------Module-18's Practice Task-------------------------*/

// ----------Break--------->>

// Write a loop 1 to 200. Use break to exit the loop once you find 100.---->>>>
for(let i=1; i <= 200; i++){
    // console.log(i);
    if(i >= 100){
        break;
    }
}

// Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100 ---->>>
let y = 1;
let add = 0;
while(true){
    add += y;
    // console.log("the number :", y);
    // console.log("the sum :", add);
    if(add >= 100){
        break;
    }
    y++; 
}

// Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
let p = 2;
while(p <= 100){
    // console.log(p);
    if(Number.isInteger(Math.sqrt(p))){
        break;
    }
    p++;
}

/**
 * Number.isInteger(x) --> "x" number purno shongkha kina cheak kore.
 * Math.sqrt(x) --> "x" er borgomul ber kore. 
*/


// ----------Continue--------->>

// Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers.
for(let i = 1; i <= 40; i++){
    if(i % 2 == 1){
        continue;       
    }
    // console.log(i);
}

// display odd number from 55 to 85 and skip the numbers divisible by 5.
for(let i = 55 ; i <= 85; i++){
    if(i % 2 == 0 || i % 5 == 0){
        continue;
    }
    // console.log(i);
}



// ----------for & while loop--------->>>

// "I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.
for(let i=1; i<=60; i++){
    // console.log("I will invest at least 6 hrs every single day for next 60 days!");
}


// Display sum of all the odd numbers from 91 to 129.
let s = 0;
for(let i = 91; i <= 129; i++){
    if(i % 2 == 1){
        s += i;
    }
}
// console.log(s);


// Generate a multiplication table for number 9
let a = 9;
let b = 1;
while(b <= 10){
    // console.log(a, 'x', b, '=', a*b);
    // console.log(`${a} x ${b} = ${a*b}`);
    b++;
}

/**
 * console.log(a, 'x', b, '=', a*b); --->> normal way
 * console.log(`${a} x ${b} = ${a*b}`); --->> backtick diye 
 * uporer 2 niyome lekha jai.
 * [``] --> Backtick 
 * Backtick diye string lekha jai. 
*/


// Implement a countdown timer that counts down from 81 to 65.
for(let i = 81; i >= 65; i--){
    // console.log(i);
}


/*-------------------------------------------------------------------------*/
/*--------------------------MODULE-18 COMPLETED----------------------------*/
/*-------------------------------------------------------------------------*/
