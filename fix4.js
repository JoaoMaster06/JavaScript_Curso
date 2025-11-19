let numeros = [5,15,8,25,3,18];
contador = 0;

numeros.forEach((contador, index) => {
console.log(`${index + 1}. ${contador} `);


    if(contador > 10){
      console.log("Maior")
    }else{
        console.log("Menor")
    }
});