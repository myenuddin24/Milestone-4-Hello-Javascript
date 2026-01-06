/*
*******************All About "Variable"******************************
* Variable--> variable hocche ekta box jekhane vibinno rokomer DATA rakha hoi and Box tar ekta NAME ace.
* 5 things need to declare a Variable.
* These are ---
* 1. keyword
* 2. veriable name
* 3. equle (=) sign
* 4. veriable's value
* 5. semiclone
*
*/ 
var weight = 20;
var price = 200;
var year = 2005;
// console.log(year);
// console.log(price);


var money = 501;
money = 301;
// console.log(money);

/* ekbar keyword diye declare korle er por abr value dite keyword deya lage na just "name = value;" dile hobe. */



// -----------------Variable Types--------------------------------

// 1.Number/Numeric
var weight = 50 ;
// console.log(weight);

/*ekhane "50" eta number type veriable.*/ 


// 2.String 
var name = 'Myen Uddin Bhuiyan';
var address = "Mirsarai Chattogram";
// console.log(name);
// console.log(address);

/* ekhane ekadik word er value thakle setake ''/"" er vitore rakhte hobe. tahole seta hobe String type veriable.*/


// 3.Boolean
var isRich = true;
var passed = false;
// console.log(isRich);
// console.log(passed);

/* Boolean type a value shudu "true"/"false" hoi. egula javascript er keyword fixed kora. Ei type a "true"/"false" chada r kono value hobe na. */ 


// 4.


// "typeof"----------
var isRich = true;
var address = "Mirsarai Chattogram";
// console.log(typeof isRich);
// console.log(typeof address);

/*console.log() er vitore "typeof" keyword use korle Variable er type orthat value (string/boolean/number) ki type er deya ta jana jai. */ 


// 1.No keyword in variable name.
//   var false = 30;  ekhane "false" ekta keyword seta veriable name hishebe use kora jabe na.

// 2.No spance or gap in variale name.
//   var is happy = true;  ebhave lekha jabe na. "is happy" maje gap ta deya jabe na."isHappy" lekhte hobe. 

// 3.No quotetion in variable name.
//   var "price" = 300;   name a kono ''/"" deya jabe na.

// 4.Can not start with a number.
//   var 2money = 40;   first letter number diye suru kora jave na. first letter bade baki jaigai number use kora jabe. Example-- money2 , weight1 , weight2 etc.

// 5.Name is case sensitive.
//   var address = "Mirsarai Chattogram"; 
//   var Address = "Mirsarai Chattogram"; 
//   var ADDress = "Mirsarai Chattogram"; 
//   var addRESS = "Mirsarai Chattogram"; 
//   ekhane "address" ekta word holeo ekta te letter ek rokom kore lekha. Variable name a eki word holeo ekta letter alada hole seta ke code alada word dore kaj kore.

// 6.How to write a long veriable name ?
//   var my current home address = "Mirsarai Chattogram";
//   var my_current_home_address = "Mirsarai Chattogram";  eta "snake case".
//   var myCurrentHomeAddress = "Mirsarai Chattogram";    eta "camel case". Eta use korbo beshi.
//   var MyCurrentHomeAddress = "Mirsarai Chattogram";    eta "pascal case".



// -------------------------something about number...------------------

var orangePrice = 20;
var applePrice = 0.5;
var mangoPrice = '50';
// console.log(orangePrice+applePrice)
// console.log(orangePrice+mangoPrice)

// value number ke jodi "string" akare deya hoi tahole seta ke computer "string" dorbe. [console.log(orangePrice+mangoPrice)] etar output ashbe-->[2050]. kintu ashar kotha -->[20+50]=[70]. [50] ke ['50'] "string" akare deyer krn a computer seta ke "number" hishebe dore nai. 


var bananaPrice = parseInt('20.5');
var strawberryPrice = parseFloat('40');
// console.log(bananaPrice);
// console.log(strawberryPrice);

// Ei doroner "string" type number dile setake "purno-shongkhai" rupantor korte [parseInt()] and "Doshomik-shongkhai" rupantor korte [parseFloat()] keyword use korte hobe. [parseInt()] eta use korle number Doshomik thkleo output a doshomik er porer number bad diye dei. [parseFloat()] eta use korle output a shob dibe.

var first = 0.1;
var second = 0.2;
var total = first+second;
// console.log(total);
// console.log(total.toFixed(3));

// kicu kicu khetre uporer moto doshomik number jog [total] korte gele output--> [0.30000000000000004] erokom boro ashbe tokhon [total.toFixed(3)] erokom [tofixed()] ei keyword use kore doshomik er pore koi ghor nibo ta fixed kore deya jai.



// -------------------Operation---------------------------------

var tv = 15000;
// tv = tv + 1000;   tv'r ager value'r sathe 1000 plus(+).
tv += 1000;
// console.log(tv);
// output = 16000


var ac = 55000;
// ac = ac - 2000;   ac'r ager value'r theke 2000 minus(-).
ac -= 2000; 
// console.log(ac); 
// output = 53000 


var fridge = 35000;
// fridge = fridge * 2 ;   fridge er ager value'r 2 gun.
fridge *= 2;
// console.log(fridge);



var firstName = 'Mobarok';
var secondName = 'Tobarok';
var fullName = firstName + secondName;
// console.log(fullName);
// output--> MobarokTobarok   

console.log(40+'2');
// output--> 402   [ekta string je tai pasha pashi boshai dibe]

console.log(40-'2');
// output--> 38   

console.log(40*'2');
// output--> 80   

console.log(40/'2');
// output--> 20   

// (-), (*), (/) egular belai "string" ke "number" hishebe dorbe and calculation korbe. Only plus(+) er belai "string" ke "string" hishebe dore pasha pashi boshai dibe.

