const carros = [
    {modelo: "Onix", marca: "Chevrolet"},
    {modelo: "Ango", marca: "Fiat"},
    {modelo: "Moloi", marca: "Fiat"},
    {modelo: "HB20", marca: "Hyundai"},
];

const resultado = carros.filter(u => u.marca === "Fiat")
console.log("Modelos da fiat","\n",resultado,"\n");

