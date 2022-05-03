var valorCompra = 2350
var entrada = 300
var desconto = 0

//============================================================================================================

var valorDesconto = (valorCompra*desconto)/100
var compraMenosEntradaDesconto = (valorCompra - entrada-valorDesconto)

//============================================================================================================

var parcela03 = compraMenosEntradaDesconto*0.3463
var parcela04 = compraMenosEntradaDesconto*0.2645
var parcela05 = compraMenosEntradaDesconto*0.2159
var parcela06 = compraMenosEntradaDesconto*0.1834
var parcela07 = compraMenosEntradaDesconto*0.1602
var parcela08 = compraMenosEntradaDesconto*0.1448
var parcela09 = compraMenosEntradaDesconto*0.1336
var parcela10 = compraMenosEntradaDesconto*0.1224
var parcela11 = compraMenosEntradaDesconto*0.1139
var parcela12 = compraMenosEntradaDesconto*0.1081
var parcela13 = compraMenosEntradaDesconto*0.1017
var parcela14 = compraMenosEntradaDesconto*0.0962

//==============================================================================================================

console.log(`O valor do desconto é R$`+valorDesconto)
console.log(`O saldo devedor é R$` +compraMenosEntradaDesconto)
console.log(`03 parcelas de R$`+parcela03)
console.log(`04 parcelas de R$`+parcela04)
console.log(`05 parcelas de R$`+parcela05)
console.log(`06 parcelas de R$`+parcela06)
console.log(`07 parcelas de R$`+parcela07)
console.log(`08 parcelas de R$`+parcela08)
console.log(`09 parcelas de R$`+parcela09)
console.log(`10 parcelas de R$`+parcela10)
console.log(`11 parcelas de R$`+parcela11)
console.log(`12 parcelas de R$`+parcela12)
console.log(`13 parcelas de R$`+parcela13)
console.log(`14 parcelas de R$`+parcela14)


