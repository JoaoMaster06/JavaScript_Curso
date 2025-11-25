const usuarios = [
    {nome:"João", estado:"Sp"},
    {nome:"Mariana", estado:"Mg"},
    {nome:"Cauã", estado:"Mg"},
    {nome:"Bianca", estado:"Rj"},
];

let nome = usuarios.filter((estado) => {
    return estado = "Mg";
});

console.log(usuarios);
console.log(nome)