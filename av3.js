const usuarios = [
    {nome:"João", estado:"Sp"},
    {nome:"Mariana", estado:"Mg"},
    {nome:"Cauã", estado:"Mg"},
    {nome:"Bianca", estado:"Rj"},
];

const resultado = usuarios.filter(u => u.estado === "Mg")
console.log("Somente do estado de","\n",resultado,"\n");