/*------------------------- string & object ---------------------------*/ 


/****************************** string ********************************/

/**
 * string lekhe--> single quotation(''), Duble quotation(""), Backtick(``)
 * 'string' kicuta 'array' er moto.
 * But, string is immutable --> not changeable.
 * array is mutable --> changeable.
*/

// length ------------------->>>>
const capital = 'Dhaka city';
// console.log(capital.length);
// output --> 10
/**
 * variableName.length --> string er length jana jai.
 * length means ---> every leter + faka space soho count hoi.
 * array er moto but ektu betikrom.
*/


// index number ----------------->>>
const dictrict = "Chattogram";
// console.log(dictrict[6]);
// output ---> g

/**
 * index number diye "array" er moto upadan pawa jai.
 * but, index number diye 'array' er moto upadan change kora jai na.
 * variableName[x] = ......;   (x = 1, 2, 3, 4......)
 * eivabe element change kore 'array' ke change kora jai.
 * but, 'string' er eivabe element change kora jai na.
 * Because, string is immutable --> not changeable.
*/


// toLowercase --------------->>>>
// toUppercase --------------->>>>
const sub = "chemistry";
const book = "Chemistry";
if(sub.toLowerCase() === book.toLowerCase()){
    // console.log("ami porbo")
}
else{
    // console.log("porbo na")
}

/**
 * toLowerCase() ---> abcdef ghijkl
 * toUpperCase() ---> ABCDEF GHIJKL
 * 2 ta string ke compare korar khetre "Capital" & "Small" letter niye prbl hoi
 * 2 ta eki word a ekta letter Capital [Chemistry] & ekta Small [chemistry] dile
 * computer sei 2 ta ke alada dore nei.
 * tai compare korar somoi sobgula ke ekdike convert kora hoi.
 * most of the time "toLowerCase()" a 2 ta kei convert kora hoi. 
*/


// trim ----------------->>>>
const drink = 'water';
const liquied = ' water ';
if(drink.trim() === liquied.trim()){
    // console.log('pani khabo');
}
else{
    // console.log('khabo na');
}

/**
 * trim() --> word er age pore khali space thakle seta ke kati dey.[' water ']
 * trimStart() --> shamner kono khali space kate. [' water']
 * trimEnd() --> sesher kono khali space kate. ['water ']
 * tobe majer kono space kate na. 
 * comparison a kaje lage.
*/


// slice ----------------->>>>
const address = 'Chattogram';
const part = address.slice(2, 6);
// console.log(part)
// output --> atto

/**
 * variableName.slice(start, endBefore)
 * "slice(x, y)" --> string theke kicu ongsho kete neya.
 * 'x' index theke kata suru and 'y' index er age porjonto katbe.
*/


// split ---------------->>>>
const allFriends = "Abul,Babul,Kabul,Dabul";
const friends = allFriends.split(',');
// console.log(friends);
// output --> [ 'Abul', 'Babul', 'Kabul', 'Dabul' ]

/**
 * variableName.split('') --> Ekta "array" return korbe. 
 * Empty string a jeta debo seta borabor alada hoiye , oi "array" er ek ekta element akare thakbe.
*/


// join --------------->>>>
const realFriends = ['Rahim', 'Kahim', 'Dahim', 'Fahim'];
// console.log(realFriends.join('|'))
// output --> Rahim|Kahim|Dahim|Fahim

/**
 * variableName.join('') ---> Empty string a jeta debo seta ke maje diye ,  protity element pasha pashi boshe jabe.
*/


// concat ---------------->>>>
const first = 'Myen';
const last = 'Uddin';
// const full = first + ' ' + last;
const full = first.concat(' ').concat(last)
// console.log(full);
// output ---> Myen Uddin

/**
 * concat() --> Ekadik jinish ke jukto kore.
 * 2 'string' ke jukto kore dey , 2 ta 'array' ke 1 ta 'array' banai dey.
 * Ek sathe ekadik bar "concat()" use kora jai.
*/


// includes --------------->>>>
const position = 'first';
// console.log(position.includes('r'));
// output ---> true

/**
 * variableName.includes(x) ---> variable er vitore "x" ace kina check kore.
 * thakle ---> true  |  Na thakle ---> false
*/


/*------------string reverse------------*/

const sentence = 'I am learning web dev.'

// way ----> 1
let reverse = '';
for(const letter of sentence){
    reverse = letter + reverse;
}
// console.log(reverse);

// way ----> 2
let rev = '';
for(let i = 0; i < sentence.length; i++){
    const ltr = sentence[i];  //Ekhane sentence er protita index Number er value dukbe.
    rev = ltr + rev;
}
// console.log(rev);

// way ----> 3  [shortcut]
const reversed = sentence.split('').reverse().join('')
// console.log(reversed);



/****************************** object ********************************/

/**
 * object's structure --->>
 * ------------------------
 * const objectName = {
 *     property: value,
 *     property: value,
 * }
 * ------------------------
 * 1ta object er vitore various type er value thakte pare.
 * 1ta object er vitore "array" & r 1ta "object" o thakte pare.
*/

const student = {
    name: 'Myen Uddin',
    class: 10,
    group: 'science',
    roll: 5,
    subjects: ['Physics', 'Chemistry', 'Higher Math', 'Biology'],
    isRegular: true,
    address: {
        Thana: 'Mirsarai',
        holdingNumber: 204,
    },
    'co-curricular activities': ['cricket', 'singer', 'dancer'],
}
// console.log(student);

/**
 * object er vitore 2 vabe access neya jai.
 * 1. Dot Notation(.) --> eta diye shob khetre access neya jai na.
 * 2. Bracket Notation([3rd Bracket]) --> shob khetre access neya jai.
 * "string" type property('co-curricular activities') thakle "Dot Notation" diye access neya jai na. 
*/


/*---- Dot Notation-----*/
// console.log(student.group)
// output --> science


/*----Bracket Notation----*/
// console.log(student['co-curricular activities']);
// output --> [ 'cricket', 'singer', 'dancer' ]


student.class = 12;
student['group'] = 'arts';
// console.log(student)
/**
 * uporer 2 niome object er property er value change kor jai.
*/

const serial = 'roll';
student[serial] = 15;
// console.log(student);
/**
 * uporer moto property ke onno ekta variable a rekhe er value change kora jai.
 * Dynamic vabe.
*/


//----------------------------//
const computer = {
    brand: 'lenovo',
    price: 35000,
    processor: 'intel',
    hdd: '512gb'
}

// keys ------------>>>>
const properties = Object.keys(computer);
// console.log(properties);
// output --> [ 'brand', 'price', 'processor', 'hdd' ]

/**
 * object.keys(objectName) ---> object tir vitorer property gulo pawa jai.
 * ekta array return kore.
*/


// values ---------->>>>             
const value = Object.values(computer);
// console.log(value);
// output ---> [ 'lenovo', 35000, 'intel', '512gb' ]

/**
 * object.values(objectName) --> object tir vitorer value gola pawa jai.
 * ekta array return kore. 
*/


// delete -------->>>>
delete computer.hdd;
// console.log(computer);
// output --> { brand: 'lenovo', price: 35000, processor: 'intel' }

/**
 * delete objectName.property --> property ti oi object theke delete hoiye jabe.
*/


// Add ------------>>>>>>>>

//way ---> 1 [Normal]
computer.monitor = 'Dell';
// console.log(computer);

//way ---> 2 [Dynamic]
let storage = "rem";
computer[storage] = "8GB"
// console.log(computer);

/**
 * ei 2 vabe kono object a "property" and "value" add kora jai.
 * abr value o change kora jai.
*/


//----------------------------//
const mobile = {
    brand: 'samsung',
    price: 25000,
    color: 'black',
    camera: '12mp',
    isNew: true
}

// Loop in oject --------------->>>>
/**
 * for of ---> array
 * for in ---> object
*/

// property pawar jonno --->
for(const prop in mobile){
    // console.log(prop);
}

// value pawar jonno --->
for(const prop in mobile){
    // console.log(mobile[prop]);
}

// Bangla system ------->>>>>
const property = Object.keys(mobile) 
// console.log(property);
/**
 * 1ta "array" er vitore property gulo ke return pabo.
 * Then "array" er upor "for of" loop chalai dibo.
*/
for(const prope of property) {
    // console.log(prope);
    // console.log(mobile[prope]);
}
/**
 * console.log(prope) ---> Property pawa jai.
 * console.log(mobile[prope]) --> value pawa jai.
*/

// OR evabe o value pawa jai ------>>>
const values2 = Object.values(mobile);

for(const value2 of values2){
    // console.log(value2);
}


// More 2 ways to declare object ---->>>>

// way --> 1
const pencil = new Object();
// console.log(pencil);
// output --> {}

// way --> 2
const rubber = Object.create({});
// console.log(rubber);
// output --> {}



/*-----------------------Module-19's Practice Task--------------------------*/

// string ---------------->>>>>>>>>>>>>>>

// Practice Task ---> 1 [Count how many times a string has the letter 'a']
const b = 'banana';
let count = 0;
for(let i = 0; i < b.length; i++){
    if(b[i] === 'a'){
        count += 1;
    }
}
// console.log(count)


// Practice Task ---> 2 [Count how many times a string has the letter 'a' or 'A']
const khabar = 'Ami Vat Khai Na. Ami Apple Khai';
let count2 = 0;
for(let i = 0; i < khabar.length; i++){
    if(khabar[i].toLocaleLowerCase() === 'a'){
        count2 += 1;
    }
}
// console.log(count2);


// Practice Task ---> 3
// [Check whether a string contains all the vowels a, e, i, o, u]
const haglu = 'I am learning web dev.';
const vowels = ['a', 'e', 'i', 'o', 'u'];
for(const vowel of vowels){
    // console.log(haglu.includes(vowel));
}



// object ------------------------>>>>>>>>>>>>>>

// Practice Task ---> 1
const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    "golden rod": '#daa520'
};
// console.log(colors['golden rod']);


// Practice Task --> 2
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};
car['passenger capacity'] = 5;
// console.log(car);


// Practice Task --> 3
const student2 = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        marks: 30
    }
};
// console.log(student2.physics.marks)


// Practice Task --> 4
let student3 = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};
let x = 0;
for(const p in student3){
    x += 1;
}
// console.log(x);


// Practice Task --> 5
let myObject = {
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
}
for(const key in myObject){
    const m = 'key: ' + key + ' | ' + 'type: ' + typeof(myObject[key]);
    // console.log(m);
}


/*-------------------------------------------------------------------------*/
/*--------------------------MODULE-19 COMPLETED----------------------------*/
/*-------------------------------------------------------------------------*/
