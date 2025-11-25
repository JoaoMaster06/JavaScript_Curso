const produtos = [
    {id: 1, nome: "Fone Bluetooth" },
    {id: 2, nome: "Mause gamer" },
    {id: 3, nome: "Fone com fio" },
    {id: 4, nome: "Teclado Mêcanico" },
];

const resultado = produtos.filter(u => u.nome.includes ("Fone"))
console.log("A palavra designada","\n",resultado,"\n");