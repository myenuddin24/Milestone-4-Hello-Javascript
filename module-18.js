/*-----------------------------Loop------------------------------------*/
 
/**
 * for...of
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
        console.log(i);
    }
}


/*----------------break-------------------*/





















