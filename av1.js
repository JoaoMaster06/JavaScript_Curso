const alunos = [
    {nome:"Ana", nota: 8},
    {nome:"Pedro", nota: 5},
    {nome:"Carla", nota: 9},
    {nome:"Lucas", nota: 4}
        
]

const resultado = alunos.filter(u => u.nota >= 6)
console.log("Vc passou","\n",resultado,"\n");