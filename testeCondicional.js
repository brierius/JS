var idade = 67;

if (idade < 16){
    console.log(`Sua idade é ${idade} e é menor que 16, por isso você não pode votar.`)
} else if (idade < 18 || idade > 65){
    console.log(`Sua idade é ${idade}, por isso seu voto é facultativo.`)
} else if (idade > 18){
    console.log(`Sua idade é ${idade}, por isso o voto é obrigatório.`)
}

