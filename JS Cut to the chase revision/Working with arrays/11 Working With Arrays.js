// ALL JS ARRAY METHODS 
// 1. Creates an iterator for the array.
Array.prototypeSymbol.iterator;

// 2. Returns the element at the specified index in the array.
Array.prototype.at(index); // negative index counts from the last value (Does not mutate)

// 3. Combines two or more arrays and returns a new array.
Array.prototype.concat(); // Mutates the original array

// 4. Copies a portion of an array to another location within the same array and replaces the elements at the target location.
Array.prototype.copyWithin(target, start, end); // Mutates the original array

// 5. Returns an iterator that provides key-value pairs for each index and value in the array.
Array.prototype.entries(); // Does not mutate

// 6. Checks if every element in the array satisfies a given condition based on a callback function.
Array.prototype.every(callback); // Does not mutate

// 7. Fills the array with a specified value from a given start index (inclusive) to an end index (exclusive).
Array.prototype.fill(value, start, end); // Mutates the original array

// 8. Creates a new array containing elements that pass a test specified by the provided callback function.
Array.prototype.filter(callback); // Does not mutate

// 9. Returns the first element in the array that satisfies a given condition.
Array.prototype.find(callback); // Does not mutate

// 10. Returns the index of the first element in the array that satisfies a given condition.
Array.prototype.findIndex(callback); // Does not mutate

// 11. Returns the last element in the array that satisfies a given condition.
Array.prototype.findLast(); // Does not mutate

// 12. Returns the index of the last element in the array that satisfies a given condition.
Array.prototype.findLastIndex(); // Does not mutate

// 13. Creates a new array by flattening nested arrays up to the specified depth.
Array.prototype.flat(depth); // Does not mutate

// 14. Maps each element to a new array and flattens the result.
Array.prototype.flatMap(callback); // Does not mutate

// 15. Executes a provided function once for each array element.
Array.prototype.forEach(callback); // Does not mutate

// 16. Creates a new array from an iterable (e.g., array-like objects or strings).
Array.from(iterable); // Does not mutate

// 17. Creates a new array from an asynchronous iterable.
Array.fromAsync(asyncIterable); // Does not mutate

// 18. Checks if the array contains a specific element.
Array.prototype.includes(element); // Does not mutate

// 19. Returns the first index at which a given element appears in the array.
Array.prototype.indexOf(element); // Does not mutate

// 20. Checks if a value is an array.
Array.isArray(value); // Does not mutate

// 21. Joins all array elements into a single string using the specified separator.
Array.prototype.join(separator); // Does not mutate

// 22. Returns an iterator that provides the keys (indices) of the array.
Array.prototype.keys(); // Does not mutate

// 23. Returns the last index at which a given element appears in the array.
Array.prototype.lastIndexOf(element); // Does not mutate

// 24. Creates a new array by applying a provided function to each element.
Array.prototype.map(callback); // Does not mutate

// 25. Creates a new array with the specified elements.
Array.of(element1, element2,); // Does not mutate

// 26. Removes the last element from the array and returns it.
Array.prototype.pop(); // Mutates the original array

// 27. Adds one or more elements to the end of the array.
Array.prototype.push(element1, element2,); // Mutates the original array

// 28. Applies a callback function to reduce the array to a single value.
Array.prototype.reduce(callback); // Does not mutate

// 29. Applies a callback function to reduce the array from right to left.
Array.prototype.reduceRight(callback); // Does not mutate

// 30. Reverses the order of elements in the array.
Array.prototype.reverse(); // Mutates the original array

// 31. Removes the first element from the array and returns it.
Array.prototype.shift(); // Mutates the original array

// 32. Creates a shallow copy of a portion of the array.
Array.prototype.slice(start, end); // Does not mutate

// 33. Checks if at least one element in the array satisfies a given condition.
Array.prototype.some(callback); // Does not mutate

// 34. Sorts the elements of the array in place (default sorting is lexicographic).
Array.prototype.sort(); // Mutates the original array

// 35. Adds or removes elements from the array at a specified index.
Array.prototype.splice(start, deleteCount, ...items); // Mutates the original array

// 36. Converts array elements to localized strings.
Array.prototype.toLocaleString(); // Does not mutate

// 37. Creates a new array with the elements in reversed order.
Array.prototype.toReversed(); // Does not mutate

// 38. Creates a new array with the elements sorted.
Array.prototype.toSorted(); // Does not mutate
// 39. Creates a new array with a portion of the elements removed.
Array.prototype.toSpliced(); // Does not mutate

// 40. Converts the entire array to a string.
Array.prototype.toString(); // Does not mutate

// 41. Adds one or more elements to the beginning of the array.
Array.prototype.unshift(element1, element2,); // Mutates the original array

// 42. Returns an iterator that provides the values of the array.
Array.prototype.values(); // Does not mutate

// 43. An experimental method for working with asynchronous iterators.
Array.prototype.with(); // Mutates the original array

//** Array Methods That Mutate the Original Array:
arr.push() 
arr.pop() 
arr.splice()  
arr.sort() 
arr.reverse() 
//**  Array Methods That Do Not Mutate the Original Array:
arr.concat() 
arr.slice() 
arr.map()  
arr.filter() 
arr.reduce() 
arr.every() 
arr.some() 
arr.find() /findIndex() 
arr.flat() , flatMap() 

/*
The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name,
 and has members for performing common array operations. 
 - Some of the methods  like Array.keys(), Array.entries ()return iterator object that you can loop over it to get the values ( they don't return the values directly)
 */

 /* 
 *Array() constructor
 The Array() constructor creates Array objects.
 with or without new 
 */
new Array(element1, element2, /* …, */ elementN)
new Array(arrayLength) // integer parameter, creates an array with empty that number of values

let arr = [`a`, `b`, `c`, `d`, `e`, `f`];


// ***************************************** //
Array.prototype.copyWithin(target, start, end);
// It replaces elements at a target location by a copied slice from the same array and returns the new array with the same length.
const array1 = ['a', 'b', 'c', 'd', 'e'];
// Copy to index 0 the element at index 3
console.log(array1.copyWithin(0, 3, 4));
// Expected output: Array ["d", "b", "c", "d", "e"]
// Copy to index 1 all elements from index 3 to the end
console.log(array1.copyWithin(1, 3));
// Expected output: Array ["d", "d", "e", "d", "e"]


// ***************************************** //
Array.prototype.entries();
// Returns an iterator that provides key-value pairs for each index and value in the array.
const array2 = ['a', 'b', 'c'];
const iterator2 = array2.entries(); // returns iterator object 
console.log(iterator2.next().value); // value : array, done : boolean
// Expected output: Array [0, "a"]
console.log(iterator2.next().value);
// Expected output: Array [1, "b"]

// ***************************************** //
Array.prototype.every(callback);
// Checks if every element in the array satisfies a given condition based on a callback function.
const isBelowThreshold = (currentValue) => currentValue < 40;
const array3 = [1, 30, 39, 29, 10, 13];
console.log(array3.every(isBelowThreshold));
// Expected output: true

// ***************************************** //
Array.prototype.fill(value, start, end);
// Fills the array with a specified value from a given start index (inclusive) to an end index (exclusive).
const array4 = [1, 2, 3, 4];
// Fill with 0 from position 2 until position 4
console.log(array4.fill(0, 2, 4));
// Expected output: Array [1, 2, 0, 0]
// Fill with 5 from position 1
console.log(array4.fill(5, 1));
// Expected output: Array [1, 5, 5, 5]
console.log(array4.fill(6));
console.log( new Array(6).fill("I am Ahmad")) // ["I am Ahmad","I am Ahmad","I am Ahmad","I am Ahmad","I am Ahmad","I am Ahmad"]
// ***************************************** //
// ***************************************** //
Array.prototype.flat(depth);
// Creates a new array by flattening nested arrays up to the specified depth.
const arr1 = [0, 1, 2, [3, 4]];
console.log(arr1.flat());
// expected output: Array [0, 1, 2, 3, 4]
const arr2 = [0, 1, [2, [3, [4, 5]]]];
console.log(arr2.flat());
// expected output: Array [0, 1, 2, Array [3, Array [4, 5]]]
console.log(arr2.flat(2));
// expected output: Array [0, 1, 2, 3, Array [4, 5]]
console.log(arr2.flat(Infinity)); // capitalized
// expected output: Array [0, 1, 2, 3, 4, 5]

// ***************************************** //
Array.prototype.flatMap(callback); // Does not mutate
// 14. Maps each element to a new array and flattens the result.
const flatMapEx = [1, 2, 1];
const result = flatMapEx.flatMap((num) => (num === 2 ? [2, 2] : 1));
console.log(result);
// Expected output: Array [1, 2, 2, 1] 
// it is same like (But more Efficient)
const result2 = flatMapEx.map((num) => (num === 2 ? [2, 2] : 1)).flat();
// ***************************************** //
Array.from(iterable); // Does not mutate
// Creates a new array from an iterable (e.g., array-like objects or strings).
console.log(Array.from('foo'));
// Expected output: Array ["f", "o", "o"]
const arrayEntries = ['Ahmad', "youssuf", "Shaymaa"].entries();
console.log(Array.from(arrayEntries))
console.log(Array.from([1, 2, 3], (x) => x + x));
// Expected output: Array [2, 4, 6]
// ***************************************** //
Array.fromAsync(asyncIterable); // Does not mutate
// Creates a new array from an asynchronous iterable.
const asyncIterable = (async function* () {
  for (let i = 0; i < 5; i++) {
    await new Promise((resolve) => setTimeout(resolve, 10 * i));
    yield i;
  }
})();
Array.fromAsync(asyncIterable).then((array) => console.log(array));
// [0, 1, 2, 3, 4]

// ***************************************** //
Array.prototype.indexOf(element); // Does not mutate
// Returns the first index at which a given element appears in the array.
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(beasts.indexOf('bison'));
// Expected output: 1
// Start from index 2
console.log(beasts.indexOf('bison', 2));
// Expected output: 4
console.log(beasts.indexOf('giraffe'));
// Expected output: -1

// ***************************************** //
Array.prototype.join(separator); // Does not mutate
// 21.  Joins all array elements into a single string using the specified separator.
let blendedArray = [`a`, 7, `c`, `d`, true, `f`];
const joinArr = [`A`, `h`,`m`, `a`, `d`];
console.log (joinArr.join("")) ///Ahmad
console.log (joinArr.join()) ///`A`, `h`,`m`, `a`, `d` separated-characters string
console.log( blendedArray.join()) // a,7,c,d,true,f (string)

// ***************************************** //
Array.prototype.keys(); // Does not mutate
// 22. Returns an iterator that provides the keys (indices) of the array.
const array5Iterator = ['a', 'b', 'c'].keys();
for (const key of array5Iterator) {
  console.log(key);
}
// Expected output: 0
// Expected output: 1
// Expected output: 2

// ***************************************** //
Array.prototype.map(callback); // Does not mutate
// 24. Creates a new array by applying a provided function to each element.
/* map along with other array transformation methods they take a function 
that accepts three parameters  */
const prices = [123, 362, 111, 100, 10];
// apply a 14% tax
const pricesWithTaxes =  prices.map( (price, i, arr) => price += price * 0.14)
console.log (prices)
console.log (pricesWithTaxes)
 //forEach() depends on what is so called side effects, operates over each value separately unlike map of filter, all at once then return a new array  
 const testResutls = [73, 36, 100, 47, 88, 29];
 const studentCondition = testResutls.map( (percentage) => percentage >= 60 ? `passed` : `failed`)
 // we can pass a constructor instead of the callback
const stringsToNums = ['1','2'].map(Number) // [1, 2]
['1','2'].map(Number).map(String) //  ['1', '2']

// Side-effectful mapping
//The callback can have side effects.
const cart = [5, 15, 25];
let total = 0;
const withTax = cart.map((cost) => {
  total += cost;
  return cost * 1.2;
});
console.log(withTax); // [6, 18, 30]
console.log(total); // 45

// ***************************************** //
Array.of(element1, element2,); // Does not mutate
// 25. Creates a new array with the specified elements.
console.log(Array.of(1, "ahmad", true))
console.log(new Array(1, "ahmad", true)) 
console.log(Array(1, "ahmad", true)) // they all the same accept elements 
console.log(Array.from(1, "ahmad", true)) // Not Ok, accepts iterator only


// ***************************************** //
// ** slice(starting value , ending value)
console.log(arr.slice(1, 5)) //[b,c,d,e] the last index is ignored

// ***************************************** //
// ** splice(starting value, number of values ), 
//  mutates the original so its used to removes values from an array 
const spliceArr = [1, 2, 3, 4, 5];
console.log (spliceArr.splice(1, 3)) 
console.log (spliceArr) // [1,5] mutated 

// ***************************************** //
//** */ concat(scndarray)
console.log (arr.concat(spliceArr)) // [a,b,c,d,e,f,1,5]
// also we can join to arrays using spread operator 
console.log ([...arr, ...spliceArr]) // same output
// ***************************************** //
Array.prototype.toLocaleString(); // Does not mutate
// 36. Converts array elements to localized strings. something like join() with now separator 
const localStringArray = ['this', 'is', 'date', new Date()]
console.log( localStringArray.toLocaleString()) // string // this,is,date,3/27/2024, 5:58:43 AM

const array6 = [1, 'a', new Date('21 Dec 1997 14:12:00 UTC')];
const localeString = array6.toLocaleString('en', { timeZone: 'UTC' });
console.log(localeString);
// Expected output: "1,a,12/21/1997, 2:12:00 PM",
// This assumes "en" locale and UTC timezone - your results may vary

// ***************************************** //
// 30. Reverses the order of elements in the array.
Array.prototype.reverse(); // Mutates the original array
console.log(['ahmad', , 'muhammad'].reverse()) // (3) ['muhammad', empty, 'ahmad']

// ***************************************** //
// 37. Creates a new array with the elements in reversed order.
Array.prototype.toReversed(); // Does not mutate
const items = [1, 2, 3];
console.log(items); // [1, 2, 3]

const reversedItems = items.toReversed();
console.log(reversedItems); // [3, 2, 1]
console.log(items); // [1, 2, 3]
console.log([1, , 3].toReversed()); // [3, undefined, 1]

// ***************************************** //
// ***************************************** //
Array.prototype.toSorted(); // Does not mutate
Array.prototype.toSpliced(); // Does not mutate
// Same like sort and splice but not mutating the original array and also the empty slot is returned as undefined
// ***************************************** //
Array.prototype.toString(); // Does not mutate
// 40. Converts the entire array to a string. // same like the  no-parameters join(), in face this method calls the join() method
// ***************************************** //
arrayInstance.with(index, value)
const withArray = [1,2,3,1,1,1]
console.log(withArray.with(1,6)) //  [1, 6, 3, 1, 1, 1] // 

// ** reverse()
// reverses the order of array values 
// Also we have push(), pop(), unshift(), shift(), includes( value ), indexof( value )



// looping over arrays 
/* using for of or for in loop , forEach() */

const studentsArr = [`Ahmad`, `Nada`, `Menna`, `Tamer`];
// for of 
for (let [i, student] of studentsArr.entries() ) {
  console.log (` Student no: ${i + 1} is "${student}"`)
}

console.log("----Same logic using forEach()----") 
studentsArr.forEach((student, i, arr) => 
     console.log (` Student no: ${i + 1} is "${student}", and the whole group is ${arr}`)
     )

     // with forEach() we cant use continue and break statements ; 🟢
     studentsArr.forEach((student, i, arr) => 
     console.log (` Student no: ${i + 1} is "${student}", and the whole group is ${arr}`)
     )
     
     
     
     
     //* forEach with  Maps and Sets 
     //* Maps
     // create a map contains the entries of an object 
     
     const carMap = new Map([
       [ `color`,`red`],
       [`price`, `120k`],
       [`country`, `usa`]
      ]) // Map is of type object , and iterable unlike objects
      
      // const DietMap = new Map(dailyDiet) // this line stops the application // map does not accept objects I think.
      // Instead it accepts array of entries because it is iterable
      // Create a new Map from an object (dailyDiet)
      const DietMap = new Map(Object.entries(dailyDiet));
      
      
      carMap.forEach(( value, key, map) => console.log (` the ${key} is ${value}, and al data set is ${map}`))
      console.log (carMap.get(`color`))
      const dataMap = new Map;
      dataMap.set(`age`, 26).set(`Name`, `Ahmad`); // key in maps is of string type 
      // * with sets
      // sets neither have indexies nor  keys, so the first and second parameter will refer to values only 
      const goals = [`neymar`, `messi`, `pauol`, `messi`, `Ronaldinho`];
      const goalsScorers = new Set(goals); // set is of type object 
      goalsScorers.forEach( (value, key, set) => console.log(` ${key}: ${value}`)) // both are values
      // we notice that the first two parameters give same result ,we can change the parameter names , but we cant use same parameter name twice in same fun
      
      /*
      const dailyDiet = {
    sat: `protein`,
    sun: `mineral salts`,
    fri: `free`
}
const dailyDietMap = new Map(dailyDiet) // invalid approach
dailyDietMap.forEach( (value, key, obj) => console.log(` Diet in ${key} is ${value}`))
* objects are not iterables so we can not loop over them using forEach or event create Maps out of  them, still we can loop over objects using for of loop to loop over object entries
*/

//* data transformation methods map(), filter(), reduce() ;
// they are array methods return a new array or a new value if matched specific condition




//* filter()
const rooms = [`A23`, `A24`, `A62`, `B11`, `B88`, `C18`, `C91`];
// create a filtered array
const roomsAtFloorA = rooms.filter( (room, i) => {
  room.startsWith(`B`) 
})

//* reduce 
// reduce all the values into only one in a new array 
testResutls.reduce( (acc, current) => acc + current , current, 0) // start with the zero as if it the first value in the array 
// ***************************************** //
Array.prototype.reduceRight(callback); // Does not mutate
// 29. Applies a callback function to reduce the array from right to left.
const array5 = [
  [0, 1],
  [2, 3],
  [4, 5],
];

const result1 = array5.reduceRight((accumulator, currentValue) =>
  accumulator.concat(currentValue), [7,7]
);
console.log(result1);
// Expected output: Array [7,7,4, 5, 2, 3, 0, 1]


/* chaining them .
array.map( (value, i) => execution code ).filter( function statement).reduce( (acc, current ) => execution code )
*/
//* find() 
/* unlike  filter(), find() only returns the first match as a value not an array.*/

const ahmadObj = {
  name : 'ahmad',
  age : 25
}

const naderObj = {
  name : 'nader',
  age : 21
}

const nadaObj = {
  name : 'nada',
  age : 23
}

const taymObj = {
  name : 'taym',
  age : 22
}
// accumulate these objects in only one array of objects 
const individualsObjects = [ahmadObj, naderObj, nadaObj, taymObj]
// console.log (individualsObjects[2].name)
// from this array find only the first object where the property age is equal to 25 
// save the returned result in a variable 

const findTheInd = individualsObjects.find( (indObj) => indObj.age  === 25)
console.log(findTheInd) // If no values satisfy the testing function, undefined is returned.

// findIndex()
// is the same like find() but it returns the index not the value . 
// from this array find the value that makes the condition true then get its index
const findTheIndINEX = individualsObjects.findIndex( (indObj) => indObj.age  === 22)
console.log(findTheIndINEX) //3
// If no values satisfy the testing function, -1 is returned.

/* this method is privileged over indexOf() as we can use a condition to 
get some result*/

/* If you are searching for an index like by using array.indexOf(value) if the index was not found it returns -1, while by searching for a value like by using array.at(index) 
if not found undefined is returned 

*/