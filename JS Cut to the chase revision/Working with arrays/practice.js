let arr = [`a`, `b`, `c`, `d`, `e`, `f`];
let blendedArray = [`a`, 7, `c`, `d`, true, `f`];
let secondArray = [1,2,3]
console.log(arr.splice(0,4))
console.log(arr)
console.log(arr.concat(secondArray))
console.log([...arr, ...secondArray])
console.log( blendedArray.join())
console.log(blendedArray)
console.log(blendedArray.shift())
console.log(blendedArray)
// console.log(Array(blendedArray.entries()))
for (let [index, value ] of blendedArray.entries()) {
    console.log(index, value)
}
blendedArray.forEach((value, i, arrayItSelf) => {
    console.log(value, i, arrayItSelf);
})

const arrayMap = new Map(blendedArray.entries())
arrayMap.set('key', 'value').set('key2', 'value2')
console.log(arrayMap.get('key2'))
for ( let entry of arrayMap ) {
    console.log(entry)
}
const obj = {
    key : 'value',
    key2 : 'value2'
}
console.log(arrayMap)


const carMap = new Map([
   [ `color`,`red`],
   [`price`, `120k`],
  [`country`, `usa`]
])
console.log(carMap)

const goals = [`neymar`, `messi`, `pauol`, `messi`, `Ronaldinho`];
const goalsSet = new Set (goals)

console.log(goalsSet)
goalsSet.forEach((value , index , set) => {console.log(value, index , set)})

const dailyDiet = {
    sat: `protein`,
    sun: `mineral salts`,
    fri: `free`
}
const DietMap = new Map(Object.entries(dailyDiet))
console.log(DietMap)

const newArray = new Array(5)
console.log(newArray)
console.log( 'messi' in goals)
const checkInArray = [4,5]
console.log( 5 in checkInArray)
const array1 = ['a', 'b', 'c', 'd', 'e'];
console.log(array1.copyWithin(1,3))
const array3 = [1, 30, 39, 29, 10, 13];
const allBelow50 = (value) => value < 30
console.log(array3.every(allBelow50))
const array4 = ['a', 'b', 'c', 'd', 'e'];
console.log(array4.fill(4, 1, 3))
console.log( new Array(6).fill("I am Ahmad "))


const arr2 = [0, 1, [2, [3, [4, 5]]]];

console.log(arr2.flat(Infinity))

const flatMapArray = [1,2,2,1,1]
const flattedArrayOnMap = flatMapArray.flatMap( value => value == 1 ? [1,1,1] : 1)
console.log(flattedArrayOnMap)

const arrayFromEx = [1,2,3,5]
console.log(Array.from(arrayFromEx , (x) => x * 2))

console.log(goals)

const goalsIterator = [`neymar`, `messi`, `pauol`, `messi`, `Ronaldinho`].entries() 
// goalsIterator.forEach(key => console.log(key))
// console.log(flatMapArray.IndexOf(1))
const goalsPlayers = [`neymar`, `messi`, `pauol`, `messi`, `Ronaldinho`]
const newPlayersArr =  goalsPlayers.map((player, i, playersArray) =>{
    return i 
})
console.log(newPlayersArr)
const stringsToNums = ['1','2'].map(Number).map(String)

console.log(stringsToNums)
const numsArray = new Array(1,2,3,4)
let total = 0;
let newNumArray = numsArray.map( (num) => {
    total += num;
    return num + 2
})
console.log(numsArray)
console.log(newNumArray)
console.log(total)
console.log(new Array(1, "ahmad", true))
console.log(Array.from('ha'))
const arrayEntries = ['Ahmad', "youssuf", "Shaymaa"].entries();
console.log(Array.from(arrayEntries))

const array5 = [
  [0, 1],
  [2, 3],
  [4, 5],
];

const result1 = array5.reduceRight((accumulator, currentValue) =>
  accumulator.concat(currentValue), [7,7]
);
console.log(result1);

const localStringArray = ['this', 'is', 'date', new Date()]
console.log( localStringArray.toLocaleString()) // string


console.log(['ahmad', , 'muhammad'].reverse())
const withArray = [1,2,3,1,1,1]
console.log(withArray.with(1,6))
// console.log()
// console.log()
// console.log()
// console.log()
// console.log()
// console.log()
// console.log()
// console.log()