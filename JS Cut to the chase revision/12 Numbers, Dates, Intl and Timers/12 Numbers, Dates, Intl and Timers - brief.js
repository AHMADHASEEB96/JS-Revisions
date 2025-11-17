// NUMBERS 
// all numbers are floating numbers in js but of integer type
console.log(12 == 12.0); // true , that proves our point that 12 is a 12.0
console.log(0.1 + 0.2); // 0.300000000004 not 0.3 cause js is base-10 lang ;
console.log(0.1 + 0.2 == 0.3); // false cause answer is 0.300000000004
console.log(0.2 + 0.7 == 0.9); // false , 0.8999999999999999
console.log(0.2 + 0.5 === 0.7); // true , cause evaluates to 0.70000000000000
// After the decimal sign if the extension numbers all are zeros they are removed to leave the abstract number behind , but if there is a number rather than 0 it makes the whole number looks different
// ************************ //
// Radix is An integer in the range 2 through 36 specifying the base to use for representing the number value. Defaults to 10.
// PROPERTIES 
Number.MAX_SAFE_INTEGER
Number.MAX_VALUE
Number.MIN_SAFE_INTEGER
Number.MIN_VALUE
Number.NaN
Number.NEGATIVE_INFINITY
Number.POSITIVE_INFINITY

// ************************ //
// METHODS // Static methods as long we mention the class name 
Number.isFinite()
Number.isInteger()
Number.isNaN()
Number.isSafeInteger(number) // Yes if <= 9007199254740991
Number.parseFloat()
Number.parseInt()
Number.prototype.toExponential()
Number.prototype.toFixed(number) 
Number.prototype.toLocaleString()
Number.prototype.toPrecision()
Number.prototype.toString() // can accept radix 
Number.prototype.valueOf()
//
// STRING TO NUMBER
console.log(new Number("30")); //object
console.log( Number("30")); // number 
console.log(Number('Ahmad')) // NaN
 
// type coercion
console.log(typeof +"30"); // number
console.log(+"30q"); // NaN

// PARSING
// only if the number is a starter;
// we can call this method on the object Number ,or without it
console.log(Number.parseInt(`12rem`)); // 12
console.log(parseInt(`  12rem`)); // // even with white spaces
console.log(Number.parseInt(`12.5rem`)); // returns 12 which is wrong
console.log(Number.parseFloat(`12.5re m `)); // returns the decimal value
console.log(parseInt(12.5)); // also works with numbers  // 12

// isNan
/*
to check if not a number
- Using this method could be baffling because it doesn't test the direct value passed to the method as an argument , instead it tests the coerced value that is resulted from coercing this value to a number ,
- So we can say that it tests the ineligibility of a value to be coerced (Not parsed ) to a number By. 
*/
console.log(Number.isNaN(`20`)); // false because is Eligible. can be coerced 
console.log(Number.isNaN(+`40x`)); // true , cause trying to convert +`40` to a number raises a NaN result .
console.log(+`40x`); //NaN
console.log(Number.isNaN(true)); // false
console.log(Number.isNaN(false)); // false
console.log(Number.isNaN(100 / 0)); // false cause 100 / 0 gives number
console.log (typeof 100/0) // NaN
console.log(Number.isNaN(``)); // 0 false
console.log(Number.isNaN(`  `)); // same
console.log(Number.isNaN(null), `null`); // false , null to 0 so is undefined
console.log(Number.isNaN(undefined), `, with Number.`); // false
console.log(Number.isNaN(NaN)); // true
console.log(isNaN(undefined), `, without Number.`); // true 😑

// console.log (Number.isNaN())// false , why ?
// isFinite
/* finite means limited , gives false only with infinity (negative or positive), undefined , NaN otherwise gives 0 ( with some exceptions).
also depends on the value resulted from conversion to a number */
/// more trusted way and more common to check if a number
console.log(isFinite(20)); // true
console.log(isFinite(`29`)); // true
console.log(isFinite(`1717hshsh`)); // false , NaN
console.log(isFinite(parseInt(`1717hshsh`))); // true
console.log(isFinite(null)); // 0 // true
console.log(Number.isFinite(null)); // false , baffling ha !
console.log(isFinite(NaN)); // false cause nan is not a number
console.log(isFinite(10 / 0)); // false , it gives infinite so not finite
console.log(isFinite(-10 / 0)); // false , - infinity
console.log(isFinite(``)); // true , cause empty string returns 0

// isInteger
console.log(Number.isInteger(20)); // true
console.log(Number.isInteger(20.4)); // false
console.log(Number.isInteger(19 / 0)); // infinite,  false

// ANOTHER WAY TO CHECK IF A NUMBER
console.log(typeof 20 === "number"); // true // with strict equality

// ************************ //
Number.prototype.toExponential() // Returns a string that represent the exponential
function expo(x, f) {
    return Number.parseFloat(x).toExponential(f);
}
console.log(expo(123456, 2));
// Expected output: "1.23e+5"
console.log(expo('123456'));
// Expected output: "1.23456e+5"
console.log(expo('oink'));
// Expected output: "NaN"
console.log(20..toExponential()) // 2e+1
// ************************ //
Number.prototype.toString() // can accept radix 
console.log(20..toString()) // 20 // default radix  is 10
console.log(20..toString(10)) // 20
console.log(20..toString(16)) // 14
// ************************ //
Number.prototype.toLocaleString() // We can use language representation 
console.log(20..toLocaleString('ar-EG')) // ٢٠
console.log(NaN.toLocaleString('ar-EG')) // ليس رقم
console.log(20..toLocaleString()) // 20, same like toString()
console.log(20..toLocaleString(16)) // 20 too

// ************************ //
Number.prototype.toPrecision()
let num = 5.123456;
console.log(num.toPrecision()); // '5.123456'
console.log(num.toPrecision(5)); // '5.1235'
console.log(num.toPrecision(2)); // '5.1'
console.log(num.toPrecision(1)); // '5'
num = 0.000123;
console.log(num.toPrecision()); // '0.000123'
console.log(num.toPrecision(5)); // '0.00012300'
console.log(num.toPrecision(2)); // '0.00012'
console.log(num.toPrecision(1)); // '0.0001'
// ************************ //
// note that exponential notation might be returned in some circumstances
console.log((1234.5).toPrecision(2)); // '1.2e+3'
// ************************ //

Number.prototype.valueOf() // returns the number representation of an number object 
const numberObj = new Number(50) // object
const stringNumberObj = new Number('50') // object
console.log( numberObj.valueOf()) // 50 // number

// ************************ //
// ************************ //
// ************************ //
// ************************ //
// MATH
//Unlike most global objects, Math is not a constructor. You cannot use it with the new operator or invoke the Math object as a function. All properties and methods of Math are static.
// Properties
const E = Math.E; // Euler's number (approximately 2.71828)
const LN10 = Math.LN10; // Natural logarithm of 10 (approximately 2.30259)
const LN2 = Math.LN2; // Natural logarithm of 2 (approximately 0.69315)
const LOG10E = Math.LOG10E; // Base-10 logarithm of Euler's number (approximately 0.43429)
const LOG2E = Math.LOG2E; // Base-2 logarithm of Euler's number (approximately 1.4427)
const PI = Math.PI; // Mathematical constant π (approximately 3.14159)
const SQRT1_2 = Math.SQRT1_2; // Square root of 1/2 (approximately 0.70711)
const SQRT2 = Math.SQRT2; // Square root of 2 (approximately 1.41421)

// Methods
const arccosine = Math.acos(0.5); // Returns the arccosine of 0.5 in radians (result: 1.0472)
const hyperbolicArccosine = Math.acosh(2); // Returns the hyperbolic arccosine of 2 (result: 1.31696)
const arcsine = Math.asin(0.7); // Returns the arcsine of 0.7 in radians (result: 0.7754)
const hyperbolicArcsine = Math.asinh(1.5); // Returns the hyperbolic arcsine of 1.5 (result: 1.19476)
const arctangent = Math.atan(1); // Returns the arctangent of 1 in radians (result: 0.7854)
const arctangent2 = Math.atan2(2, 1); // Returns the arctangent of the quotient of 2 and 1 (result: 1.10715)
const hyperbolicArctangent = Math.atanh(0.3); // Returns the hyperbolic arctangent of 0.3 (result: 0.30952)
const leadingZeros = Math.clz32(255); // Returns the number of leading zero bits in the 32-bit binary representation of 255 (result: 24)
const cosine = Math.cos(Math.PI); // Returns the cosine of π (result: -1)
const hyperbolicCosine = Math.cosh(0.5); // Returns the hyperbolic cosine of 0.5 (result: 1.12763)
const exponential = Math.exp(2); // Returns Euler's number raised to the power of 2 (result: 7.38906)
const expMinus1 = Math.expm1(1); // Returns e^1 - 1 (result: 1.71828)
const log1p = Math.log1p(0.5); // Returns the natural logarithm of 1 + 0.5 (result: 0.40547)
const base2Logarithm = Math.log2(8); // Returns the base-2 logarithm of 8 (result: 3)
const nearestFloat = Math.fround(3.14); // Returns the nearest single precision float representation of 3.14 (result: 3.140000104904175)
 Math.sin(x)// Computes the sine of x (where x is in radians).
// Example: Math.sin(Math.PI / 2) equals 1.
 Math.sinh(x)// Calculates the hyperbolic sine of x.
// Useful in mathematical and scientific computations.
 Math.tan(x)// Computes the tangent of x (where x is in radians).
 Math.tanh(x)// Calculates the hyperbolic tangent of x.
// Useful in various mathematical models.
const naturalLogarithm = Math.log(10); // Returns the natural logarithm (base e) of 10 (result: 2.30259)
const base10Logarithm = Math.log10(100); // Returns the base-10 logarithm of 100 (result: 2)
/////
 Math.pow(x, y)// Returns x raised to the power of y.
// Example: Math.pow(2, 3) equals 8.
 Math.random()// Generates a random floating-point number between 0 (inclusive) and 1 (exclusive).
 Math.round(x)// Rounds the value of x to the nearest integer.
// Example: Math.round(3.7) equals 4.
 Math.sign(x)// Determines the sign of x (1 for positive, -1 for negative, 0 for zero).
// Example: Math.sign(-5) equals -1. 
 Math.sqrt(x)// Computes the square root of x.
// Example: Math.sqrt(25) equals 5.
 Math.trunc(x)// Removes the decimal portion of x and returns the integer part.
// Example: Math.trunc(5.8) equals 5.
const absoluteValue = Math.abs(-5); // Returns the absolute value of -5 (result: 5)
const ceiling = Math.ceil(4.3); // Returns the smallest integer greater than or equal to 4.3 (result: 5) 
const floor = Math.floor(6.8); // Returns the largest integer less than or equal to 6.8 (result: 6)
const hypotenuse = Math.hypot(3, 4); // Returns the square root of the sum of squares of 3 and 4 (result: 5) form Pythagoras rule
const integerMultiply = Math.imul(5, 6); // Returns the result of 32-bit integer multiplication of 5 and 6 (result: 30) // Integer multiplication
const cubeRoot = Math.cbrt(8); // Returns the cube root of 8 (result: 2)
const maximum = Math.max(2, 4, 6); // Returns the maximum value among 2, 4, and 6 (result: 6)
const minimum = Math.min(2, 4)


/////////////
console.log(Math.imul(2)) // 0
// MATH OPERATIONS
console.log(Math.sqrt(25));
console.log( 25 ** (0.5)) //same
console.log( Math.cbrt(8))  // 2
console.log( 8 ** ( 1 / 3)) 
// Math.max , min 
/* work on a group of values  */
let getMaxMin = [ 2, 3, 5, 4, 6, 28, 30];
console.log(Math.max(...getMaxMin))
console.log(Math.max(getMaxMin)) //NaN , doesn't read from an array directly 
console.log(Math.min(...getMaxMin))
console.log(Math.min(2, 3, 5, 4, '6', 28, 30)) // still works by type coercion 
console.log(Math.min(2, 3, 5, 4, '6px', 28, 30)) //gives NaN
// calculate  an area of a circle with 10 px radius 
console.log( Math.PI * 10 ** 2)
console.log( Math.PI * parseFloat('10px') ** 2) 


const randomNumber = (min, max) => Math.floor(Math.random() * (max - min ) + 1 ) + min;
console.log(randomNumber(10, 15))
console.log (Math.ceil(-23.1)) // -23 // the closest larger integer
console.log(Math.floor(22.1)) // 22 to the nearest less integer
console.log(Math.floor(-22.1)) // -23 nearest smaller integer 
console.log (Math.trunc(22.4)) // removes what is after the decimal sign 
console.log ((2.33673).toFixed(3)) // 2.337 
console.log ((3.727).toFixed(0)) // 4 here its like Math.round
// Note , toFixed method returns a string  
console.log ( typeof (3.727).toFixed(0)) // string
// Note, Math methods subject to type coercion too  
console.log ( Math.floor("23.6")) // 23

// reminder operator %
console.log ( 8 / 3 )  // 2.6 so 2 * 3 = 6 means reminded  2 to 8 ;
// Using reminder operator 
console.log ( 8 % 3 ) // 2
// Make a function that figures the even out from the odd number using reminder operator 
const oddOrEven = function (num) {
   return num % 2 === 0 ? "Even" : "Odd"; 
}
oddOrEven(2) // Even
oddOrEven(3) // Odd


// bigInt
/* Huge numbers those are bigger than The max safe integer are hard to be represented in js 
calculations run on these numbers used to give  inaccurate results.
fortunately after 2020 there is a method that makes the use of these numbers 
is more accurate than ever before , */

console.log (Number.MAX_SAFE_INTEGER) // 9007199254740991
//or 
console.log (2 ** 53 -1 ) // base 2 , 53 representable number from the 64 ones , -1 cause js is zero based // 9007199254740991
console.log (9007199254740991 + 4) // 9007199254740996 wrong
console.log (9007199254740991 + 2) // 9007199254740992 wrong
console.log (9007199254740991 + 7) // 9007199254740998 right
console.log (9007199254740999) // 9007199254741000
console.log (9007199254740999n) // 9007199254740999
// using n at the end tries to make the number more accurate 
// we can not use BigInt numbers with regular numbers in mathematical ops
// console.log (5262718181828273737372882n + 100) // Error

console.log (5262718181828273737372882n + 100n) // ✅️ 
// Or
console.log (5262718181828273737372882n + BigInt(100)) // ✅️ 
// except for comparison and concatenation 
console.log (5262718181828273737372882n === 100) // false
console.log ( 20n == "20") // true // Loose equality
console.log (5262718181828273737372882n > 100) // true
console.log (5262718181828273737372882n + "20")
console.log (5262718181828273737372882n + "20") // Done
console.log (5262718181828273737372882n + " is really huge")
// You would better save it in a variable , make the code dry 
// BigInt returns integers always 
console.log (10n / 3n ) // 3n , I think because huge numbers can ignore what is behind the decimal sign. and n here tells the engine that this number is huge  , I just think  
// cant take square root fot BigInt
// console (Math.sqrt(16n))cant convert BigInt to a number 

// DATES 
const theDate = new Date()
console.log (theDate)
// pass a date to get the full details of it 
console.log (new Date("December, 24, 2023"))
// console.log ( new Date( year, month, day, hour, minute, seconed, millisecined ))
console.log (new Date( 2022, 9, 16)) // 9 here represents oct as dates in js is zero based , jan is 0 and dec is 11 ;
console.log (new Date( 2022, 9, 16, 6, 15, 18))
// if one number is passed it reoresents the milliseconeds since the first date started in js 
console.log (new Date(0))  // after zero milliseconed 
console.log (new Date( 2022))  // after 2022 ms
console.log (new Date( 9 * 24 * 60 * 60 * 1000))  // after 9 days 
console.log (new Date().getTime(), " milliseconeds since jan, 1 1970")

// remember if the Date() is left empty it extracts the current live time 
console.log (new Date().getMonth()) // 11 , dec ,dates are zero based again
console.log (new Date().getMonth() + 1) // 12 , dec ✅️ 
console.log (theDate.getDay()) // the day in the week , thur is 5,start from sunday
console.log (theDate.getDate()) // the day in the month 
 console.log (theDate.getFullYear()) // 2022
 console.log (theDate.getYear()) // 122 starting from 1900
 console.log (theDate.getHours())
 console.log (theDate.getMinutes())
// console.log (theDate.getSeconeds())
 // same way we can apply same methods on a certain date 
 const CertainDate = new Date( 2024, 6, 17, 8 )
 console.log (CertainDate.getMonth()) // 6 
 console.log (CertainDate.getYear())
 // setting a soecific date 
 // we can modify the year or the day or month in a certain date 
 console.log (theDate)
 console.log (theDate.setFullYear(2050)) // changes the year to 2050
 console.log (theDate.setDate(30))
 console.log (theDate) 
 console.log (theDate.toISOString()) // in international standard time 
console.log (Date.now()) // get the milliseconeds since 1970
// you can formate the date the way you want 

const today = new Date().getDate()
const thisMonth = new Date().getMonth() + 1
const thisYear = new Date().getFullYear()

console.log (`${today}`.padStart(2, 0) ,"/", `${thisMonth}`.padStart(2, 0), "/", `${thisYear}`.padStart(2, 0))

// or 

const today1= `${new Date().getDate()}`.padStart(2, 0)
const thisMonth1 = `${new Date().getMonth() + 1}`.padStart(2, 0)
const thisYear1 = `${new Date().getFullYear()}`

console.log (`${today1} / ${thisMonth1} / ${thisYear1}`)

// padStart() is a method applied to strings thats why we used template literals , it adds padding od 0 when the length is 2 or less 

console.log ( new Date( 2022, 3, 16)) // gives the daye 
console.log ( + new Date( 2022, 3, 16)) // gives timestamp,  milis passed

// get the time passed between two dates 🟢

const firstDate = new Date(1996, 11, 20);
const currentDate = new Date();

console.log (((+currentDate - +firstDate) / (1000 * 24 * 60 * 60)) / 365.25)
const msInOneDay = 1000 * 24 * 60 * 60;
const timePassed = ( firstDate, seconedDate ) => Math.round( Math.abs( (seconedDate - firstDate) / msInOneDay) / 365.25)

console.log(timePassed(firstDate, currentDate), "Years")
// Math.round to iginre decimals , Math.abs to make the result always positive 

// ** Internstionalizing Dates
// EXTRACMCT THE DATE FORMAR FROM AN LOCAL API
// new Intl.DateTimeFormat(`lang-country`).format(date)
console.log ( new Intl.DateTimeFormat(`ar-SY`).format(currentDate))
// http://www.lingoes.net/en/translator/langcode.htm to get country format
// we can get the country and lang of the user using this method

const local = navigator.language
console.log (local)
console.log ( new Intl.DateTimeFormat(local).format(currentDate))
// now we can use a seconed argument which is an object of options to decide the formate of each date type 
const options = {
    hour: `numeric` ,
    minute : `numeric`,
    day :`numeric` , // cant be long 
    month:`long` , // or numeric 
    year : `numeric`, // cant be long , or 2-digit 
    weekday :`long` // friday
    
}
console.log ( new Intl.DateTimeFormat(local, options).format(currentDate))

// ** Internstionalizing numbers 

const Options = {
    style: `unit`, // unit, percent, currency
    unit : `mile-per-hour`, // celsius, mile-per-hour ...
    currency:`EUR`, // ignored if style isnt having currency as the value 
    useGrouping : true // false removes the seperator 
    /* must start with small charachter, no spaces in the string 
    *if style is defined as currency then the unit property will be ignored 
    and we will have to identify the curreny property 
    */
    
    }
const formwttingNum = 63627283882
console.log (new Intl.NumberFormat(`en-US`, Options).format(formwttingNum))
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat

// TIMERS 
// setTimeout(), 
/* it takes two main arguments , the function to be called and the time to be passed before calling the finction.
* we cant assign arguments to the function in the invoking code cause we dont call tge function instead the 
eethode setTimeoit calls it automatically , but still we can assing arguments for the function inside the setTimeout methide itself 
* setTimeout() is called only once at a refresh
* clearTimeout() stops the setTimeout() method from running */

const classArguments = ["Nader", "Ahmad", "Eman", "Nada", "Saad"];
const startClass = ( teacher , s1, s2, s3, s4, s5, s6) =>  console.log ( `The class starts once Mr.${teacher} shows up, so please notify the students ${s1}, ${s2}, ${s3}, ${s4}, ${s5}, to attend at the exact time`
    )

const classStarts = setTimeout( startClass, 9000 , ...classArguments)
console.log (classStarts)

clearTimeout(classStarts, 1000) //if classStarts called count 1s ,stop it

 setTimeout( () => console.log(`2 seconeds passed`) , 2000)
 
 // setInterval() is called over and over again when the code executes 
 
 // SET A COUNTDOWN TIMER 
 
 function countdown() {
     // set a starting time 
    let startingTime = 10;
    // start countingdow 
    // setInterval( () =>  console.log(startingTime--), 1000)
 }
 
 console.log (countdown())
 
// setInterval( () => console.log(startingTime--) , 1000)

// const seconedsTimer = document.querySelector(`#seconeds`)
/* function seconedsCountdown () {
     // set a starting time 
    let startingTime = 5;
    // start countingdown
   let timer = setInterval( () => { seconedsTimer.textContent = startingTime;
      
       if ( startingTime === 0) {
      // clearInterval(timer);
       startingTime = 6;
       console.log ("cleareed")
           }
         startingTime--    
           }     
       , 1000) 
     
 }
 console.log (seconedsCountdown()) */
 
 // convert timer to minutes 
//  const minutesTimer = document.querySelector(`#minutes`)
 function minutesCountdown () {
     // set a starting time 
    let startingTime = 120;
    
    // start countingdown
    setInterval( () => { 
         let scnds = String(startingTime % 60).padStart(2, `0`);
         let mins = String(Math.floor(startingTime / 60)).padStart(2, `0`);
        //  minutesTimer.textContent = `${mins} : ${scnds}`
         startingTime--
         }, 1000) 
              
 }
 console.log (minutesCountdown())
 
 /* EXPLANATION 
  * first of all we create a starting time , here is 120 seconeds , 
  we need to convert them to minutes format so we devided on 60 to get two minutes starting time, when 120 becomes 119 the mins variable will be 1.9833 then and keeps gowing down till 120 becomes 59 then 59 / 60 is 0.9833
  but we are using Math.floor or trucn so d3cimal numbers are ignored
  and directly we have 1 then 0 as minutes  , 
 * for the seconeds we used the module operator because when the starting time was full 120 % 60 gives zero , 119 % 60 gives 59 118 % 60 gives 58 and so on till we reach 60 % 60 gives 0 and then 59 % 60 is 59 and so on .
* notice 21 % 10 is the same like 11 % 10 both have 1 as a reminder so 119 a and 59 both give 59 as a reminder from the division on 60.
* padStart () is applied to string only

** Another logic 
we can create two starting times , secindes 59 and minutes 2 or what ever the number of 
munutes we need to start at. 
keep reducung seconeds till  0 then reduce minutes by one and retrieve the value if 60 for seconeds 
if (scnds = 0) {
    scnds = 59;
    mins--
}

* clewrInterval() needs to be inside the setInterval() function ;
if the condition at which the clearInterval worls is ( if timer === 0) then once the timers = 0 the function stops even before the text rakes that vakue , so the text stops at 1 , to solve that make the if conditional -1 so it stops at 0 or move the decrement code to be after the of statement so the if code is executed then the decremnt haooens , but that creates another problem
that the if the starting time is 10 secineds it will start again at 9 
this is because once the starting value is reassigned ti 10 the decrement hapoens cause it is theblast code , so the starting time will start counting down at 9 , to solve this we may reassignyyhe starting time ti 11 not 10 
   
 */
 
 
//  const round = document.querySelector (`#round span`)
//  const roundCounter = document.querySelector (`#round-counter`)
 
//  let time = 5;
//  let roundNum = 0;
//  let roundIncreasing = function() {
//      roundCounter.textContent = time;
//      round.textContent = roundNum
//      if (time === 0 ) {
//          time = 6;
//          roundNum++
//      }
//      time--
     
//  }
 
//  setInterval(roundIncreasing, 1000)



const PapersForIPPECOJopOccupying = {
ReplacementOfLostFromTheMilitaryCertificate : 185,
HealthExaminationCertificate :120,
PhotoSession : 40,
criminalStatusDecoument : 70,
Model111 : 15,
others: 50
}

console.log (Object.values(PapersForIPPECOJopOccupying).reduce( (acc, current) => acc + current)) // 480
