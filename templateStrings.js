let nome = "Paulo"
let idade = 2022-1984
let cidadeNascimento = "Pedreira"
let estadoNascimento = "São Paulo"
let conjuge = "Marilia"

// template Strings, facilita a escrita e a leitura, podemos escrever o texto de modo corrido e em seguida colocar os campos das variáveis como ${variável}, ao rodar o programa o 
// JS faz as alocações devidas, as TemplateStrings sempre usam o acento `grave` = igual crase.
const apresentacao = `Meu nome é ${nome}, tenho ${idade}, sou casado com ${conjuge}, nasci na cidade de ${cidadeNascimento}, situada no estado de ${estadoNascimento}`

console.log(apresentacao)