const prompt = require('prompt-sync')({sigint: true})

const emails = [];

const qtd = 5;

for(let i = 1 ; i <= 5; i++){
    const emal = (prompt(`Digite o email ${i}: `));

    emails[i] = email
}
console.log(emails)