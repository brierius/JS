var taxRate = 0.15; //taxa
var amount = 99.99; // valor
amount = amount*2; // valor + valor venda
amount = amount + (amount*taxRate); // valor de venda mais imposto
console.log(amount);