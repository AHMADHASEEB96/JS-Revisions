

// giving parameters default values ES6
const daysWorkHours = function( mon = 8, tue = 7, fri = 5, sat = fri) {
/*
Short circuting prior to ES6
mon = mon || 8;
tue = tue || 7; and so on 
*/
    return `hours set are ${mon}, ${tue}, ${fri}, ${sat}`
}
console.log (daysWorkHours( 9, undefined, 8 )) // undefined to skip
const name = "Ahmad";
const myData = {
     myName : "ahmad",
     age : 25
}
const dataFunc = function (me, myObj) { // Passing by value vs by reference
    me = "Sameer";
   myObj.name = "Sameer";
}
dataFunc(myName, myData)

console.log (myName) // Ahmad
console.log (myData.name) // Sameer,  affected 

// First-class functions ( is a concept not a function type)
// the call back function 
const capitalize = function (str) {
    [...strArray] = str;
     strArray[0] = strArray[0].toUpperCase();
     return strArray.join(``)
    // foregt to use return and the func will be undefined 
}

// higher-order function

const capitalized = function (str, callbackFn ) {
    console.log(`the orignal text is ${str}, the capitalized name is ${callbackFn(str)}`)
    console.log (callbackFn.name) // gets the original name of the func
        }
    capitalized( "sameer" , capitalize )
    
// Functions return functions 
const item = function(itemPrice) {
    return function( itemName) {
        console.log (`the item is :${itemName} and its price is $${itemPrice} Dollars`)
    }
}
const callback = item(899)
callback(` Iphone 13 pro `)
item(999)(`Iphone 13 pro max`)
// Using Arrow function to do the same 
const phone = price => model => console.log (` the ${model} comes with ${price} Dollars this year `)
phone(1090)(`i phone 14 `)

/// Call, Apply and Bind methods 
const mondayMovies = {
    s1 : "", // screen one
    s3 : "",
    s7 : "",
    s9 : "",
    todaysMovies : [],
    assignMovies(s1, s3, s7, s9) {
        this.s1 = s1;
        this.s3 = s3;
        this.s7 = s7;
        this.s9 = s9;
        this.todaysMovies.push(s1)
        this.todaysMovies.push(s3)
        this.todaysMovies.push(s7)
        this.todaysMovies.push(s9)
    },
    
} 
mondayMovies.assignMovies("troy", "bird man", "the mechanist", "in the heart of the sea")

console.log (mondayMovies["todaysMovies"])
// store this functions as a call back function for a higher one to be used in other similar objects 
let assignMovies = mondayMovies.assignMovies;
// thur

const thurMovies = {
    s1 : "",
    s3 : "",
    s7 : "",
    s9 : "",
    todaysMovies : [],
    // use same function as in privious object , this keyword will refer here to the current object 
    assignMovies : assignMovies
    
} 
// give different values to the parameters of the function
thurMovies.assignMovies("العار", "لا تسألني من انا", "ولاد العم", "الجزيرة") 
console.log (thurMovies.todaysMovies)

/*  using the fn outside an object makes "this" referes to undefied, this is where we use the call() methode on this function , to give this keyword an object to refer to 
*/

// friday parties 

const friMovies = {
    s1 : "",
    s3 : "",
    s7 : "",
    s9 : "",
    todaysMovies : [],
    
    }
    
  //  assignMovies("Hunger games", "Maze runner", "Divergent", "instrugent") doesnt work, not called from an object, 
  // first argument is the object for which thia keyword from the predicate function refers 
  
  assignMovies.call(friMovies, "Hunger games", "Maze runner", "Divergent", "instrugent") // friMovies.assignMoveis(args)
    console.log (friMovies.todaysMovies)
  //  Apply is the same exept of using an array of argument instead of seperate ones 
  
  const satMovies = {
    s1 : "",
    s3 : "",
    s7 : "",
    s9 : "",
    todaysMovies : [],
    }
    
  const satMoviesArray = ["Black adam", " the kast samurai", "Saving lrivate ryan", "The bridge"]
assignMovies.apply( satMovies, satMoviesArray)
  console.log (satMovies.todaysMovies)
  // still apply() methide isnt that widely used in modern js , insteadly if we have an array if arguments we use call() along with spread operator 
assignMovies.call( satMovies, ...satMoviesArray)   
console.log (satMovies.todaysMovies)
// bind() methode,
// same logic like call(), apply(), but it creats a whole new function;

// bind the object mondayMovies with the function assignMovies,  the. store it in a varibale to be used any where, then start to give this function arguments ,
// let monMovies = assignMovies.bind(mondayMovies);
// also we can write constant arguments thise are always present in all the copies created from this function ,here the first parameter in all the functions called will take the vlue constant movie 
 let monMovies = assignMovies.bind(mondayMovies, "constant movie");
 monMovies("end war", "infinity game")
 monMovies("justice league", "no way home")
 console.log (mondayMovies.todaysMovies)
 // use case for bind() methode 
 // in the coming example, this refers to the Object so by callung the function the code executes and the increment occures normally;
 const increase = {
     value : 5,
     increment(){
        return ++this.value
     }
 }
console.log(increase.increment())
/* El.addEventListener((click), increase.increment ) here the this keywird mentioned inside the function increase.increment will refer to El; 
to overide this and give this keyword another target to refer to we use bind() methide 
El.addEventListener((click), increase.increment.bind(increase) )
* we used bind() and not call() cause with eventListener we need to create a new function
*/

// also we can use seperate functions not only from inside an object ;
let groub1 =  {
    student1 : "",
    student2 : "",
    student3 : "",
} // end object
function addStudnets (student1, student2, student3) {
    this.student1 = student1;
    this.student2 = student2;
    this.student3 = student3;
}

addStudnets.call(groub1, "Ahmad", "Nada", "lkora")
console.log (groub1.student2)
//////////

// taking an instance from the object names1
let groub2 = new Object(groub1);
// assignijg new values to it 
const  studensInGroub2 = ["Ahmad", "Sameer", "nkkmora"]
addStudnets.apply(groub2, studensInGroub2) // apply methode uses array ;
console.log (groub2.student2)
//////////
let groub3 = new Object(groub1) ;
let addingStudents = addStudnets.bind(groub3);
addingStudents("Hamed", "Kamal", "3ammer")
console.log (groub3.student3)

// imdeiately invoked function expresions IIFE 
 // a way to store a function to be called once , 
 ( function () {
     console.log (" this is an IIFE ")
 })()
 
 /////////////////
{ 
 const myName = "Ahmad";
 let mySeconedName = "Muhammad";
 var myFamilyName = "Haseeb";
// console.log (myName) // runs normally as long inside  
} 
// console.log (myName) // gives variable not defined 
// console.log (mySeconedName) gives variable not defined
 console.log (myFamilyName) // runs 
 
 // declaring variables with let and const inside curly braces creates a private scope , these variable are undefined outside the blocking code ,
// using var doesnt creats this blocking effect 
