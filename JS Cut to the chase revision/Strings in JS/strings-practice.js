const myString = "This is my string";
const anotherString = ' another string '
console.log(myString.at(1))
console.log(myString.charAt(1))
console.log(myString.concat( ' and this is ' + anotherString))
const illFormed = "https://example.com/search?q=\uD800"; // malformed URL due to the backslash.
if(illFormed.isWellFormed()) {
    console.log('well formed')
    console.log(encodeURI(illFormed))
} else {
    console.warn(' the string is ill formed')
}
console.log(String.raw`https://example.com/search?q=\uD800`.isWellFormed()) // true
const ccNumber = '4822123482902344';
const lastCC4Digits = ccNumber.slice(-4);
const ccEncrypted = lastCC4Digits.padStart(16, '*');
console.log(ccEncrypted)
console.log(88..toString(), typeof 88..toString())
console.log(illFormed.toWellFormed().toString())
console.log('This is a string, to split ,this,is,a,word'.split('    ,'))
const stringObj = new String("My name is Ahmad")
console.log(typeof 'ahmad'.valueOf())
console.log(typeof stringObj.valueOf())
console.log(typeof stringObj.toString())
console.log('hello'.substring(1,-2))
console.log()
console.log()
console.log()
console.log()
console.log()
console.log()
console.log()
console.log()
console.log()
console.log()
console.log()
console.log()
console.log()
console.log()
console.log()
console.log()
console.log()
console.log()
console.log()
