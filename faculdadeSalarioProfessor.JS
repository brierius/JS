// calcular salario bruto e liquido do professor
// entradas: totalHoras, valorHora, percentualImposto, 
// saida: imprimir salarioBruto e salarioLiquido

let totalHoras = 50
let valorHora = 15.30
let percentualImposto = 9

let salarioBruto = totalHoras*valorHora
let imposto = salarioBruto*percentualImposto/(100)
let salarioLiquido = salarioBruto-imposto

salarioBruto.toLocaleString('pt-BR', {style:'currency', currency: 'BRL'});
salarioLiquido.toLocaleString('pt-BR', {style:'currency', currency: 'BRL'});

function formatMoney(number) {
    return number.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }

console.log("O valor Bruto é " +formatMoney(salarioBruto))  
console.log("O valor líquido a ser pago é: " + formatMoney(salarioLiquido))  