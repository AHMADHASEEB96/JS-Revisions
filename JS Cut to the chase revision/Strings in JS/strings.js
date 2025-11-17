//String constructor 
const a = new String("Hello world"); // a === "Hello world" is false // constructor, produces an object which is not a primitive string like 'Hello world'
const b = String("Hello world"); // b === "Hello world" is true // function, takes value in quotes to produce string 
a instanceof String; // is true
b instanceof String; // is false
typeof a; // "object"
typeof b; // "string"

// Static methods 
String.fromCharCode()
// 1. - Takes integer code points and returns a string representing the corresponding characters.
console.log(String.fromCharCode(65)); // Expected output: 'A' (code point for 'A')
String.fromCodePoint()
// 2. - Takes one or more Unicode code points and returns a string representing those characters.
console.log(String.fromCodePoint(65, 66, 67)); // Expected output: 'ABC' (code points for 'A', 'B', 'C')
 String.raw()
// 3. - Creates a new string from a template literal, treating backslashes literally within the template.
const rawString = String.raw`This is a raw string \n with a newline character preserved.`;
console.log(rawString); // Expected output: "This is a raw string \n with a newline character preserved."

// INSTANCE METHODS
String.prototype.at()
// 1. - Returns the character at the specified index (position) in a string.
console.log("hello".at(2)); // Expected output: 'l'

String.prototype.charAt()
// 2. - Returns the character at a specified index in a string.
console.log("hello".charAt(2)); // Expected output: 'l'

String.prototype.charCodeAt()
// 3. - Returns the numeric Unicode code point of the character at the specified index in a string.
console.log("hello".charCodeAt(0)); // Expected output: 104 (code for 'h')

String.prototype.codePointAt()
// 4. - Returns the code point of the character at the specified index in a string.
console.log("hello".codePointAt(0)); // Expected output: 104 (code for 'h')

String.prototype.concat()
// 5. - Joins (concatenates) a string (or an array of strings) to the end of this string.
console.log("hello".concat(" world")); // Expected output: "hello world"

String.prototype.endsWith()
// 6. - Checks if a string ends with the specified search string.
console.log("hello world".endsWith("world")); // Expected output: true

String.prototype.includes()
// 7. - Checks if a string contains the specified search value.
console.log("hello world".includes("llo")); // Expected output: true

String.prototype.indexOf()
// 8. - Returns the first occurrence of a specified substring within a string.
console.log("hello world".indexOf("o")); // Expected output: 4

String.prototype.isWellFormed()
// 9. - Returns true if the string is syntactically valid (well-formed) HTML/XML.
console.log("<div>This is text</div>".isWellFormed()); // Expected output: true (assuming the HTML is valid)

String.prototype.lastIndexOf()
// 10. - Returns the last occurrence of a specified substring within a string.
console.log("hello world hello".lastIndexOf("hello")); // Expected output: 12

String.prototype.localeCompare() // search on it
// 11. - Compares two strings based on the current locale.
console.log("apple".localeCompare("banana")); // Expected output: negative value (apple comes before banana in most locales)

String.prototype.match()
// 12. - Executes a search for a match in a string against a regular expression.
console.log("abcabc".match(/b/g)); // Expected output: ["b", "b", "b"]

String.prototype.matchAll()
// 13. - Returns an iterator of all matches of a regular expression in a string.
const allMatches = "abcabc".matchAll(/b/g);
console.log(allMatches.next().value); // Expected output: "b" (first match)
// regEx.test(string)

String.prototype.normalize()
// 14. - Returns the string with its Unicode characters normalized.
console.log("café".normalize()); // Expected output: "caf\u00e9" (normalized with accent)

String.prototype.padEnd()
// 15. - Fills the string with a specified character, up to a specified length.
console.log("hello".padEnd(10, ".")); // Expected output: "hello...."

String.prototype.padStart()
// 16. - Fills the string with a specified character, from the start, up to a specified length.
console.log("hello".padStart(10, ".")); // Expected output: "....hello"

String.prototype.repeat()
// 17. - Returns a new string repeating a specified value a certain number of times.
console.log("hi ".repeat(3)); // Expected output: "hi hi hi "

String.prototype.replace()
// 18. - Replaces a part of the string with another string.
console.log("hello world".replace("world", "everyone")); // Expected output: "hello everyone"

String.prototype.replaceAll()

// 19. - Replaces all occurrences of a substring with a replacement string.
console.log("Mississippi".replaceAll("ss", "z")); // Expected output: "Mizizippi"

String.prototype.search()
// 20. - Returns the index of the first occurrence of a specified substring within a string.
console.log("hello world".search("world")); // Expected output: 6

String.prototype.slice()
// 21. - Extracts a section of a string and returns a new string.
console.log("hello world".slice(2, 5)); // Expected output: "llo"

String.prototype.split()
// 22. - Splits a string into an array of substrings, and returns the array.
console.log("hello,world,how,are,you?".split(",")); // Expected output: ["hello", "world", "how", "are", "you?"]

String.prototype.startsWith()
// 23. - Checks if a string begins with the specified search string.
console.log("hello world".startsWith("hello")); // Expected output: true

String.prototype.toLocaleLowerCase()
// 24. - Returns a string converted to lowercase according to the current locale.
console.log("HELLO WORLD".toLocaleLowerCase()); // Expected output: "hello world" (may vary based on locale)

String.prototype.toLocaleUpperCase()
// 25. - Returns a string converted to uppercase according to the current locale.
console.log("hello world".toLocaleUpperCase()); // Expected output: "HELLO WORLD" (may vary based on locale)

String.prototype.toLowerCase()
// 26. - Returns the calling string converted to lowercase.
console.log("HELLO WORLD".toLowerCase()); // Expected output: "hello world"

String.prototype.toString()
// 27. - Returns the string itself.
const myString = "hello";
console.log(myString.toString()); // Expected output: "hello"

String.prototype.toUpperCase()
// 28. - Converts the string to uppercase.
console.log("hello world".toUpperCase()); // Expected output: "HELLO WORLD"

String.prototype.toWellFormed()
// 29. (Not a standard method) - Attempts to convert the string to well-formed HTML.
const maybeHTML = "<div>This may or may not be valid HTML</div>";
console.log(maybeHTML.toWellFormed()); // Expected output: varies depending on browser support and actual HTML content

String.prototype.trim()
// 30. - Removes whitespace from both ends of the string.
console.log("   hello world   ".trim()); // Expected output: "hello world"

String.prototype.trimEnd()
// 31. - Removes whitespace from the end of the string.
console.log("hello world    ".trimEnd()); // Expected output: "hello world"

String.prototype.trimStart()
// 32. - Removes whitespace from the beginning of the string.
console.log("    hello world".trimStart()); // Expected output: "hello world"

String.prototype.valueOf()
// 33. - Returns the primitive value of the string object.
const myString1 = "hello";
console.log(myString1.valueOf()); // Expected output: "hello" (the string itself)

String.prototype.substring() // Like slice, differences are below


// Deprecated methods:
String.prototype.anchor() // Deprecated - Creates an anchor element (<a>) and returns its string representation.
String.prototype.big() // Deprecated - Returns a string with the `<big>` tag, making the text appear bigger.
String.prototype.blink() // Deprecated - Returns a string with the `<blink>` tag, making the text blink (not supported in modern browsers).
String.prototype.bold() // Deprecated - Returns a string with the `<b>` or `<strong>` tag, making the text bold.
String.prototype.fixed() // Deprecated - Returns a string with the `<fixed>` tag, making the text appear fixed-width (not supported in modern browsers).
String.prototype.fontcolor() // Deprecated - Sets or returns the color of the text. Not recommended for modern styling.
String.prototype.fontsize() // Deprecated - Sets or returns the font size of the text. Not recommended for modern styling.
String.prototype.italics() // Deprecated - Returns a string with the `<i>` or `<em>` tag, making the text italic.
String.prototype.link() // Deprecated - Creates a hyperlink element (<a>) and returns its string representation.
String.prototype.small() // Deprecated - Returns a string with the `<small>` tag, making the text appear smaller.
String.prototype.strike() // Deprecated - Returns a string with the `<s>` or `<strike>` tag, making the text appear with a strikethrough.
String.prototype.sub() // Deprecated - Not a standard method.
String.prototype.substr() // Deprecated - Extracts a section of a string and returns a new string (use slice instead).
String.prototype.sup() // Deprecated - Returns a string with the `<sup>`.


// More examples 

const illFormed = "https://example.com/search?q=\uD800"; // malformed URL due to the backslash.
if(illFormed.isWellFormed()) {
    console.log('well formed')
    console.log(encodeURI(illFormed))
} else {
    console.warn(' the string is ill formed')
}
console.log(String.raw`https://example.com/search?q=\uD800`.isWellFormed()) // true
// Encrypt a credit card number 
const ccNumber = '4822123482902344';
const lastCC4Digits = ccNumber.slice(-4);
const ccEncrypted = lastCC4Digits.padStart(16, '*');
console.log(ccEncrypted)

// Local lower and upper case 
const istanbul = 'İstanbul';
console.log(istanbul.toLowerCase()) // converts to the default lowercase version of the string 
console.log(istanbul.toLocaleLowerCase("tr-TR")) // converts it to the lowercase version depending on what locale is used 

// ValueOf()
const stringObj = new String("My name is Ahmad") 
console.log(typeof 'ahmad'.valueOf()) // still string 
console.log(typeof stringObj) // object
console.log(typeof stringObj.valueOf()) // converts the string object to primitive string value
console.log(typeof stringObj.toString()) // results in a string value

// substring() and slice()
//The substring() method swaps its two arguments if indexStart is greater than indexEnd, meaning that a string is still returned.
//The slice() method returns an empty string if this is the case.
const text = "Mozilla";
console.log(text.substring(5, 2)); // "zil"
console.log(text.slice(5, 2)); // ""
//If either or both of the arguments are negative or NaN, the substring() method treats them as if they were 0.
console.log(text.substring(-5, 2)); // "Mo"
console.log(text.substring(2, -2)); // "Moz" turns negative to zero and swaps 
console.log(text.substring(-5, -2)); // ""
// slice() also treats NaN arguments as 0, but when it is given negative values it counts backwards from the end of the string to find the indexes.
console.log(text.slice(-5, 2)); // ""
console.log(text.slice(-5, -2)); // "zil"