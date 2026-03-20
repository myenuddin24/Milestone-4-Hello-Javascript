/*-------------------------Array Part-2 ------------------------------*/

/**
 * Lopping Techniue ----->
 *  1. for loop
 *  2. while loop
 *  3. do while loop
 *  4. for__of --> array
 *  5. for__in --> object
*/

const friends = ['Elon', 'Bill', 'Mark', 'Waren'];

//for__of ------->
for(const friend of friends){
    // console.log(friend);
}

//for loop ------>
for(let i = 0; i < friends.length; i++){
    // console.log(friends[i]);
}

//while loop ---->
let a = 0;
while(a < friends.length){
    // console.log(friends[a]);
    a++;
}


/*----------------------Array Reverse---------------------- */

const numbers = [1, 2, 3, 4, 5, 6];

//Normal way [shortcut]------------->>
// const reverse = numbers.reverse();
// console.log(reverse);

/**
 * array.reverse() ---> eta main array ke change kore dey.
*/

//for loop ------------->>
let revNum = [];
for(let i = 0; i < numbers.length; i++){
    const num = numbers[i];
    revNum.unshift(num);
}
// console.log(revNum);

//for__of -------------->>
let revNum2 = [];
for(const number of numbers){
    revNum2.unshift(number);
}
// console.log(revNum2);

//start from reverse side ------>>
const revNum3 = [];
for(let i = numbers.length - 1; i >= 0; i--){
    revNum3.push(numbers[i]);
}
// console.log(revNum3);



/*----------------- sort() ------------------*/ 

/**
 * Javascript a sort() name ekta jinish ace.
 * jeta diye kaj korte gele onk jamela pakai fele.
 * thik moto kaj korte gele function tunction lekhte hoi.
 * aro pore eta niye valo vabe jana jabe.
*/



/*-------------------------Module-19.5's Practise Task------------------------*/

// practice task------------>1
const colors = ['red', 'blue', 'green', 'yellow', 'orange']
const colorsRev = [];
let c = 0;
while(c < colors.length){
    colorsRev.unshift(colors[c]);
    c++;
}
// console.log(colorsRev);
//output ----> [ 'orange', 'yellow', 'green', 'blue', 'red' ]


// practice task------------>2
const nums = [12, 98, 5, 41, 23, 78, 46];
const numsRev = [];
for(let i = 0; i < nums.length; i++){
    if(nums[i] % 2 == 0 ){
        numsRev.push(nums[i]);
    }
}
// console.log(numsRev);
//output ---> [ 12, 98, 78, 46 ]


// practice task------------>3
const Tiktokers = ['Tom', 'Tim', 'Tin', 'Tik'];
let Tiktok = "";
for(const Tiktoker of Tiktokers){
    Tiktok = Tiktok + Tiktoker;
}
// console.log(Tiktok);


// practice task------------>4
const statement = 'I am a hard working person'
//way ----> 1
let word = statement.split(' ')
let revStatement = '';
for(let i = 0; i < word.length; i++){
    revStatement = word[i]+ ' ' + revStatement;
}
// console.log(revStatement);

//way ----> 2
const stateRev = statement.split(' ').reverse().join(' ');
// console.log(stateRev);


// practice task------------>5
const student = [
  { name: "John", marks: 85 },
  { name: "Alice", marks: 90 }
]

for(let i=0; i<student.length; i++){
    // console.log(student[i].name, 'scored', student[i].marks);
}

/**
 * output ---->  John scored 85
 *               Alice scored 90
*/


/*-------------------------------------------------------------------------*/
/*--------------------------MODULE-19.5 COMPLETED--------------------------*/
/*-------------------------------------------------------------------------*/
