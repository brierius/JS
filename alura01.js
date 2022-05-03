var a = 10
var b = 0

var divisao = a/b

const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'
const unicode = '\u0089'

let minhaVar
let varNull = null

console.log(minhaVar)
console.log(varNull)


console.log(divisao)
console.log(aMaiusculo)
console.log(tique)
console.log(cifrao)
console.log(hiragana)
console.log(unicode)

console.log("Listar os 7 valores falsy")
0 ? console.log("truthy") : console.log("falsy") // zero é falsy
0n ? console.log("truthy") : console.log("falsy") // zero BigInt é falsy
null ? console.log("truthy") : console.log("falsy") // nulo é falsy
undefined ? console.log("truthy") : console.log("falsy") // indefinido é falsy
false ? console.log("truthy") : console.log("falsy") // false é falsy
NaN ? console.log("truthy") : console.log("falsy") // Not a Number é falsy
"" ? console.log("truthy") : console.log("falsy")  // string vazia é falsy
