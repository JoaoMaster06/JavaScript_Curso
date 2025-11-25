const alunos = [
    {nome:"Ana", nota: 8},
    {nome:"Pedro", nota: 5},
    {nome:"Carla", nota: 9},
    {nome:"Lucas", nota: 4}
        
]

let nome = alunos.filter((nota) => {
    return nota >=6;
});

console.log(alunos);
console.log(nome)