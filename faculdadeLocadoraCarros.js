// objetivo => calcular faturamento anual e mensal de uma locadora de carros
//entrada => ler a quantidade de carros locados durante o mes e o valor faturado
// processamento => calcular calcular faturamento mensal, considerando todos os carros sendo locados e calcular o faturamento anual, considerando que 20% não serão locados
// saida => imprimir faturamento mensal e anual

let valorAluguelCarro = 150.00
let quantidadeCarros = 20

let valorMensal = valorAluguelCarro*quantidadeCarros*30
let valorAnual = (valorMensal*12)*(0,80)

valorMensal.toLocaleString('pt-BR', {style:'currency', currency: 'BRL'});
valorAnual.toLocaleString('pt-BR', {style:'currency', currency: 'BRL'});

function formatMoney(number) {
    return number.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }

console.log("O valor mensal dos carros é "+formatMoney(valorMensal))
console.log("O valor anual dos carros considerando uma locação média de 80% é "+formatMoney(valorAnual))