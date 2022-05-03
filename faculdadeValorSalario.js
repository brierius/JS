// Informar o valor do salário bruto do liquido, horas extras 100% o inss 8% e o fgts 9%
// entradas horasTRabalhadas, valorHorasTrabalhadas, horasExtras, valorHoraExtra

const inss = 8
const fgts = 9
let valorHora = 15
let horasTrabalhadas = 200
let horasExtras = 10

let salario = valorHora*horasTrabalhadas
let valorHorasExtras = horasExtras*valorHora*2

let salarioBruto = salario+valorHorasExtras
let salarioInss = (salarioBruto*inss)/100
let salarioFgts = (salarioBruto*fgts)/100
let salarioLiquido = salarioBruto-(salarioInss+salarioFgts)

console.log("O salário bruto é "+salarioBruto)
console.log("O valor das horas extras é "+ valorHorasExtras)
console.log("O valor do inss é "+salarioInss)
console.log("O valor do FGTS é "+salarioFgts)
console.log("O valor do salário líquido é "+salarioLiquido)