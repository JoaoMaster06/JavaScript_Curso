let ldc = ["Abacaxi","Pera","Macarrão","Pizza","Waffles","Caixa de bombom","Tomate","Uva","Danone"];

ldc.push("Manga");
console.log(ldc);

ldc.forEach((ldc, index) => {
    console.log(`${index + 1}. ${ldc} `);
});