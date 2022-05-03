let valorProduto = 1000
let valorPercentualDesconto = 10

let valorDesconto = valorProduto*valorPercentualDesconto/(100)
let valorFinalProduto = valorProduto-valorDesconto

console.log("O valor do desconto é "+valorDesconto)
console.log("O valor do produto já com o desconto aplicado é "+valorFinalProduto)
