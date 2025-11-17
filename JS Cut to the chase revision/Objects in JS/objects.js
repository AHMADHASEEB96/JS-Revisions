// Create object using object constructor 
const o = new Object();
console.log(o); // { foo: 42 } // even if it is assigned later
o.foo = 42; // assign a value
console.log(new Object(undefined)) //empty object
console.log(new Object(null))//empty object
// Pass a type as an argument to the Object constructor to create an object of this type.
console.log(new Object('null'))//string object 
// console.log( new object('null')) // not defined
console.log(typeof new Object('null'))// object 
console.log(new Object(19)) // number object
console.log(new Object(19n)) //bigint object
console.log( new Object({name : 'ahmed'})) //{name: "ahmed"} // type is object
console.log( new Object(['name',  'ahmed'])) //['name',  'ahmed'] // type is object 
console.log( typeof new Array('name', 'ahmad')) // object too
console.log(   String('name', 'ahmad')) // object too


const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYeah: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,
    calcAge: function () {
      this.age = 2037 - this.birthYeah;
      return this.age;
    },
    getSummary: function () {
      return `${this.firstName} is a ${this.calcAge()}-year old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
    }
  };; // this object is called literal object syntax, and there other shapes of objects 
  
  // Dot vs. Bracket Notation
  console.log(jonas.lastName); // no operations , only property name explicitly 
  console.log(jonas['lastName']); // using quates is a must ,
  // we can use operations instead  
  const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends'); 
  console.log (jonas[interestedIn]);
  
  // Object Methods not yet
  console.log(jonas.calcAge());
  console.log(jonas.age);

  
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {  
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingHours, // Obj inside obj
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

