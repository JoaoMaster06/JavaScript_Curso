let alunos = ["Ana-15","Carlos-14","Maria-15","João-16","Beatriz-15","Pedro-13","Luiza-15","Ricardo-14"];

let necessario = alunos.filter((aluno) => {
    return aluno == 15;
});

console.log(necessario)
