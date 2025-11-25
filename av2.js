const produtos = [
    {id: 1, nome: "Fone Bluetooth" },
    {id: 2, nome: "Mause gamer" },
    {id: 3, nome: "Fone com fio" },
    {id: 4, nome: "Teclado Mêcanico" },
];

let id = produtos.filter((nome) => {
    return nome = "fone";
});

console.log(produtos);
console.log(id)