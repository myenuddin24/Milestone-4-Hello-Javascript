/*--------------------------------"Array"----------------------------------*/

/**
 * Array ---> Store more than one value in a variable.
 * mane ekta veriable a ekadik value store kore rakhte array use hoi.
 * array likhe --> [] er vitore.
 * array --> "number", "string", "boolean" jekono type er hote pare.
 * abr ekta "array" er bitore "number", "string", "boolean" mixed akareo thakte pare.
 * tobe mixed akare na lekha valo.
*/

const numbers = [12, 14, 17, 21, 25];
const friends = ["abul", "Babul", "Kabul", "Sabul"];
const passed = [true, false, false, true];
const mixed = [10, "Mirsarai", true]; //evabe na lekha valo.


/*-----------------------------Length------------------------------*/

const price = [13, 12, 15, 24, 36, 45, 27, 38, 19, 66, 75];
// console.log(price.length);

// (variableName.length)--> "array" er vitore element shongkha jana jai.


/*-----------------------------index------------------------------*/

const cost = [32, 453, 67, 874, 56, 94, 32];
// console.log(cost[3]);
// output --> 874

/**
 * console.log(cost[3])---> variable name er por [] deya seta index number.
 * index number --> "array" er vitore element er serial number.
 * index number suru hoi --> "0" theke. [0, 1, 2, 3............]
 * index number [2] mane "array" er vitore element 3 number ta.
*/

// get element value by index number
const third = cost[2];
// console.log(third);

// set or update element value by index number
cost[1] = 999;
// console.log(cost);


/*-----------------------------Push------------------------------*/

const age = [23, 86, 63, 60];
age.push(55);
age.push(43, 89);
// console.log(age);

const bondhu = ["rakib", "sakib", "titu"];
bondhu.push("mitu");
// console.log(bondhu);

/**
 * age.push(55) / age.push(43, 89, 75) / bondhu.push('mitu')
 * variableName.push(x) --> eta diye "array" er vitore element add kora jai.
 * element ti "Last" element hishebe add hobe.
*/


/*-----------------------------Pop------------------------------*/

const amount = [38, 76, 54, 98];
amount.pop();
// console.log(amount);

const manush = ["hablu", "kablu", "bablu"];
manush.pop();
// console.log(manush);

/**
 * amount.pop() / manush.pop()
 * variableName.pop() --> "array" theke element ke bair kore deya jai.
 * "last" element theke bair hoya suru korbe.
 * joto bar korbo totota element bair hobe.
*/

const dosto = ["asif", "rohim", "korim"];
const out = dosto.pop();
// console.log(out);
// output --> korim
// dorkar hole evabe bair kora element ke variable a rakha jai.


/*-----------------------------Shift------------------------------*/

const place = ["mirsarai", "sitakundu", "komoldoh"];
place.shift();
// console.log(place);

// .pop() er khalato vai .shift()
/**
 * place.shift();
 * variableName.shift() --> "array" theke element ke bair kore deya jai.
 * "first" element theke bair hoya suru korbe.
 * joto bar korbo totota element bair hobe.
*/


/*-----------------------------UnShift------------------------------*/

const touristSpot = ["Arshi Nogor", "Mohamaya lake", "Economic Zone"];
touristSpot.unshift("Muhuri project");
// console.log(touristSpot);

// .push(x) er khalato vai .unshift(x)
/**
 * touristSpot.unshift('Muhuri project');
 * variableName.unshift(x) --> "array" er vitore element add kore.
 * "first" element hishebe add kore.
*/


/*-----------------------------includes------------------------------*/

const district = ["dhaka", "chattogram", "rajshahi"];
// console.log(district.includes('chattogram'));
// console.log(district.includes('khulna'));

/**
 * console.log(district.includes('chattogram'));
 * variableName.includes(x) --> kono item vitore ace kina cheak kora jai.
 * orthat "x" eti "array" er vitore ace naki cheak korte parbo.
*/


/*-----------------------------indexOf------------------------------*/

const zila = ["dhaka", "chattogram", "rajshahi", "comilla"];
// console.log(zila.indexOf('rajshahi'));
// console.log(zila.indexOf('borishal'));

/**
 * console.log(zila.indexOf('rajshahi'));
 * variableName.indexOf(x) --> "array" er vitore 'x' er index number dibe.
 * r jodi 'x' "array" er vitore na thake output dibe--> [-1]
 * index number suru hoi "0" theke --> 0, 1, 2, 3, 4........
*/


/*-----------------------------isArray------------------------------*/

const upazila = ["mirsarai", "sitakundu", "shondip"];
const you = [];
const me = "asdf asdf";
// console.log(Array.isArray(upazila));
// console.log(Array.isArray(me));
// console.log(Array.isArray(you));

/**
 * console.log(Array.isArray(upazila));
 * Array.isArray(variableName) --> variable ta "array" kina jana jai.
*/


/*-----------------------------join-----------------------------*/

const food = ["rice", "fich", "meat"];
// console.log(food.join(', '));
// output---> rice, fich, meat

/**
 * console.log(food.join(', '));
 * variableName.join('') --> empty string a ja dibo array er element gula majkhane segula boshiye pasha pashi boshe jabe.
*/


/*-----------------------------concat-----------------------------*/

const hen = ["broilar", "leyar", "sonali"];
const egg = ["farm", "sonali", "deshi"];
// console.log(hen.concat(egg));

/**
 * console.log(hen.concat(egg));
 * variableName.concat(variableName) --> "array" 2 ta ke 1 ta array te dukiye dibe.
*/


/*-----------------------------slice-----------------------------*/

const bird = ["doyal", "koyel", "moyna", "gugu", "kokil", "tiya"];
// console.log(bird.slice(2, 5));

/**
 * console.log(bird.slice(2, 5));
 * variableName.slice(x, y) --> "array" er element 'x' index number theke suru kore 'y' index number er age porjonto dibe.
*/


/*-------------------------Module-17.5's Practise Task------------------------*/

// practice task------------>1
const fruits = ["apple", "orange", "banana", "strawberry", "mango"];
// console.log(fruits[3]);
fruits[2] = "jambura";
// console.log(fruits);


// practice task------------>2
const touristDestination = ["cox's bazar", "saint martin", "kuakata"];
touristDestination.push("shundorban");
touristDestination.push("sajek", "tanguar haor");
touristDestination.pop();
// console.log(touristDestination);


// practice task------------>3
const books = ["spoken english", "javascript", "math"];
if (books.includes("javascript")) {
  // console.log('I have a JavaScript book.');
} else {
  // console.log("I don't have.");
}


// practice task------------>4
const subject = ["english", "math", "bangla"];
const myAge = 20;
if (Array.isArray(subject)) {
    if (Array.isArray(myAge)) {
        // console.log("They both are array.");
    }
    else {
        // console.log("one is array and the other is not.");
    }
}
else if(Array.isArray(myAge)){
    // console.log("one is array and the other is not.");
} 
else {
    // console.log("They both are not array.");
}


// practice task------------>5
const brothers = ['rohim', 'korim', 'kuddus'];
const sisters = ['mimi', 'himi', 'limi'];
const siblings = brothers.concat(sisters); 
// console.log(brothers);
// console.log(sisters);
// console.log(siblings);


/*-------------------------------------------------------------------------*/
/*--------------------------MODULE-17.5 COMPLETED--------------------------*/
/*-------------------------------------------------------------------------*/
