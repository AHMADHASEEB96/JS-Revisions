console.log( Number('30.2'))
console.log(Number.parseInt('30q'))
console.log(+null)
console.log()
console.log (typeof 100/0) // NaN
console.log(Number.isNaN(100/0))
console.log(isNaN(null))
console.log(Number.MIN_SAFE_INTEGER)
console.log(Number.MIN_VALUE)
console.log(Math.pow(2,53))
console.log(20..toExponential())
console.log(20..toString(10))
// console.log(Number.toString(20))
console.log(NaN.toLocaleString('ar-EG'))
const numberObj = new Number('50') // object
console.log( numberObj.valueOf())
console.log(Number.NEGATIVE_INFINITY)
console.log(Math.sqrt(25))
console.log(Math.PI * 25 ** 2)
console.log(Math.max(2,3,5))
console.log(Math.floor(1.23)) // 6
console.log(Math.imul(8,2))
console.log(Math.pow(25,0.5))
console.log(Math.round(3.4))

const calculateRandomInRange = (min, max) => {
    return Math.floor(Math.random() * (max-min) + 1)  + min
}

console.log(calculateRandomInRange(2,9))

console.log((2.347).toFixed(2)) // 2.35

const nowDate = new Date()
const paymentDateString = `${nowDate.getFullYear()}-${nowDate.getMonth()+1}-${nowDate.getDate()}`
console.log(paymentDateString)
console.log(new Date(paymentDateString))
