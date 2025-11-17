const cat = {
    color : 'red',
    voice : 'mew',
    age : 3,
    owner : {
name : "Ahmad",
age : '27'
    }
}
console.log(cat.color)

const CopyCat = {...cat}
console.log(CopyCat)

const {color, owner : {name : ownerName = "Hamada"}} = cat;
const ns = [1,2,3, [6, 9]]
const [one,,three, [six,nine ]] = ns;
console.log(one, three, six, nine)


function validateEAN(eanCode) {
    //Your code
    let sum = eanCode.map(code => code % 2 == 0 ? code*3 : code*1).reduce((a,b) => a+b)
    let checksum = sum % 10 == 0 ? true : false 
    return checksum 
  }

  console.log(validateEAN(Array.from("9783827317100")))