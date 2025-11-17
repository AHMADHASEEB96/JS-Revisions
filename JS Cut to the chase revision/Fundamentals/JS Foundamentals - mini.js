

// Data Types
console.log(typeof 23); /* number , there is onyl one type of numbers here its number */
let year1;
console.log(year1); // undefined 
console.log(typeof (year1));/* undefined , cause empty value , type of undefined is undefined  */
console.log(typeof undefined);//undefined
console.log(typeof null); // object :  bug in the js language 

// let, const and var
let myAge = 30;
myAge = 31;
const myBirthYear = 1991;
// const job; invalid
var job = 'programmer';
lastName = 'Muhammad'; // Don't

/* 
let a= 20;
var a=30
console.log (a) ❌️❌️
-for best practice use const and use let for those variables you for sure know you would mutate in the future , dont use var 
*/

// const now = 2037; //invalid logic cause now subjects to change
// Assignment operators
let nu = 10 + 5; // 15
nu += 10; // x = x + 10 = 25
nu *= 4; // x = x * 4 = 100
nu++; // x = x + 1  > 101
nu--;// x = x - 1 > 99
nu--;
console.log(nu);

// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=  gives Boolean 
console.log(ageSarah >= 18);
const isFullAge = ageSarah >= 18;
console.log(now - 1991 > now - 2018); // Arithmetic then comparison ( precedence)
// Operator Precedence
let x, q;
x = q = 25 - 10 - 5; // rtl 
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
//mdn stands for Mozilla documentation network, 
console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`); 
// 19-Taking Decisions: if / else Statements
// type conversion
const inputYear = '1991';
console.log(Number(inputYear) + 18);
console.log(typeof NaN); /* number :  NaN is an invalid number*/
//NaN is when applying a process dedicated for numbers to a non-number data type like applying math methods or mathematical operations to strings 
console.log(String(23), 23);  
console.log((23).toString());  
console.log (100..toString() )
// type coercion
/* is when the js changes the data type to another automatically  */
console.log('I am ' + 23 + ' years old');
console.log('I am ' - 23 - ' years old'); // NaN
console.log('23' - '10' - 3); // 10
console.log('23' / '2');
// when ever the engines sees that it can convert the numeric string to a number will, except for the case of using + will concatenate
let n = '1' + 1; // '11'
n = n - 1;
console.log(n);
console.log (`10` - `4` - `3` -2 + `5`) ; //'15'
//21-Truthy and Falsy Values
// 5 falsy values: 0, '', undefined, null, NaN
const money = 100;
let height;
if (money)  //true{
{ height = 0;}
if (height)//false {
{const favorite = Number(prompt("What's your favorite number?")); }
// 23,24-Logical Operators || && !
// 26-The switch Statement
const day = 'friday';
switch (day) {// 🟢 used to test equality
  case 'monday': // day === 'monday'
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
  case 'tuesday':
    console.log('Prepare theory videos');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Write code examples');
    break;
  case 'friday':
    console.log('Record videos');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend :D');
    break;
  default:
    console.log('Not a valid day!');
}
// Break key word breaks after the first true, if does not exist the next case block will be executed anyway;

if (day === 'monday') {
  console.log('Plan course structure');
  console.log('Go to coding meetup');
} else if (day === 'tuesday') {
  console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
  console.log('Write code examples');
} else if (day === 'friday') {
  console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
  console.log('Enjoy the weekend :D');
} else {
  console.log('Not a valid day!');
}

// 27-Statements and Expressions
3 + 4 // Expression // evaluates to one value
1991
true && false && !false  // Expression
const me = 'Jonas';// Expression
console.log(`I'm ${2037 - 1991} years old ${me}`);// Expression
 //Statement like if, switch ...  
 const MyName = "Ahmad"
let templateLiterals = `Hello ${MyName}` // only expressions allowed, no statements
// statement do not evaluate to one value so usually we don't store them in variables
// function that returns a value is an expression like function expression

const drink = age >= 18 ? 'pepsi' : 'water 💧';

//31- Activating Strict Mode
let hasDriversLicense = false;
const passTest = true;
if (passTest) hasDriversLicense = true;

// Functions 
// calling / running / invoking function
const num = Number('23');
// 34-Function Declarations vs. Expressions
// Function declaration // we can call it first
function calcAge1(birthYeah) {
  return 2037 - birthYeah;
}
// Function expression
// is stored in a variable */
const calcAge2 = function (birthYeah) {
  return 2037 - birthYeah;
}
const calcAge3 = birthYeah => 2037 - birthYeah;
// arrays are structural data, the order matter


// continue and break
console.log('--- ONLY STRINGS ---')
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== 'string') continue; // true, skip this iteration ( exit the iteration )
  console.log(jonas[i], typeof jonas[i]);
}

console.log('--- BREAK WITH NUMBER ---')
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === 'number') break; // true, stop the loop
  console.log(jonas[i], typeof jonas[i]);
}

let data = [ "ahmad", 25, `Esraa`, 30]
for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(i, jonas[i]);
}
//overlaped loops 
for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-------- Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
  }
}

 const Eid = true ;
 if( Eid ) {
     console.log (`Wish you all a great time`)
 }


////////////////////************************////////////////////

// Short Circuiting (&& and ||)
console.log('---- OR ----');
// all operands r falsy return the last, or return the first truthy one.
console.log(3 || 'Jonas'); // 3
console.log('' || 'Jonas'); // 'jonas'
console.log(true || 0);
console.log(undefined || null); // null
console.log(undefined || 0 || '' || 'Hello' || 23 || null); // hello
// The Nullish Coalescing Operator same like or but only all operands are truthy except for undefined and null
console.log( '' ?? "Ahamd") // empty string
// If all operands are truthy return the last or return the first falsy if there is at least one.
console.log('---- AND ----');
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');
console.log('Hello' && 23 && null && 'jonas' && ''); // null


// Destructuring Objects , turn properties to global variables
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);
//alternative names for properties
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);
// Default values
const { theMenu = [], starterMenu: starters = [] } = restaurant;
console.log(theMenu, starters);
// if there is a variable of the same name already declared will be reinitialized
const cat = {
  color : 'red',
  voice : 'mew',
  age : 3,
  owner : {
name : "Ahmad",
age : '27'
  }
}
const {color, owner : {name : ownerName = "Hamada"}} = cat; // destructuring nested object

// Destructuring Arrays
const ns = [1,2,3, [6, 9]]
const [one,,three, [six,nine ]] = ns;
console.log(one, three, six, nine)

// Rest pattern and spread operator

// Rest Pattern and Parameters
// 1) With destructuring
// REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2) Functions
const add = function (...numbers) { // rest
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);
const p = [23, 5, 7];
add(...p); // spread , arguments
restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');
///////////////////////////////////////
// The Spread Operator (...)
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]]; // use spread instead
console.log(badNewArr);
const newArr = [1, 2, ...arr];// spread cause on the right of =
console.log(newArr);
// Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// we can spread an object









/* ******** DOCUMENT OBJECT MODEL DOM
its an api that holds all the information about the HTML elemnts in a way that js can acess them.
*/
const el = document.querySelector(`.nn`); // state vatiable
el.textContent = ` my new name is Ahmad Muhammad`;
console.log (document.querySelector (`.num`).value)
el.addEventListener(`click` , function() {} /* anonymous function */ )
el.style.background = `blue`; 