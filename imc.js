var peso = 70
var altura = 1.68
var imc = peso/(altura * altura)
var imc = imc.toFixed(2)
console.log(`Seu imc é ${imc}`)
if (imc <= 18.5){
    console.log('Você está abaixo do peso')
} else if (imc >= 18.5 && imc <= 24.9){
    console.log('Você está com o peso normal')
} else if (imc >= 25 && imc <= 29.9){
    console.log('Você está com sobrepeso')
} else if (imc >= 30 && imc <= 34.9){
    console.log('Você está com Obesidade Grau 1')
} else if (imc >= 35 && imc <= 39.9){
    console.log('Você está com obesidade Grau 2')
} else if (imc >= 40){
    console.log('Você está com obesidade Grau 3 ou Mórbida')
}
