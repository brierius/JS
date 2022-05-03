let valores = [0, 5, 6, 9, 8, 7, 4,]

valores.sort()

/*
Jeito tradicional de fazer um for
console.log(`O total de elementos é ${valores.length}`)
for (let pos = 0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor de ${valores[pos]}`)
}
*/

// Abaixo o jeito simples de fazer um for

console.log (valores)

for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor de ${valores[pos]} aqui descritas em um código mais simples, o for - let pos inaq`)
}

let pos = valores.indexOf(18)
if (pos == -1){
    console.log(`O valor não foi encontrado`)
}
else { 
    console.log(`O valor está na posição ${pos}`)
}
