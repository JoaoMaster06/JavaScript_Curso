const mensagens = [
    "Hoje o dia esta lindo",
    "Não gostei desse trabalho",
    "A aula foi muito divertida",
    "Que tarefa chata",
];

const proibidas = ["Chatos","Chata","Não gostei"]

const resultado = mensagens.filter(u => u.proibidas === "Chatos","Chata","Não gostei" )
console.log("As palavras broibidas são","\n",resultado,"\n");