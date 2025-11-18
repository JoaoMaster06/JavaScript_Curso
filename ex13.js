const prompt = require('prompt-sync')({sigint: true})

const prova1 = Number(prompt("Digite a nota da 1º prova: "));

const prova2 = Number(prompt("Digite a nota da 2º prova: "));

const reda = Number(prompt("Digite a nota da redação: "));

let soma = prova1 + prova2 + reda;

if(soma >= 1500){
    console.log("Vc pode estudar na Ufla🥳: ",soma)
}
else if(soma >= 1000){
    console.log("Vc pode estudar no Unilavras🥳: ",soma)
}

else{
    console.log("Volte ano que vem:",soma)    
}
