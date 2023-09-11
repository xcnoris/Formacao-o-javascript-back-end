const cliente={
    nome: "Augusto",
    idade: 17,
    altura: 1.78,
    peso: 61.6,
    cpf: "11122233344",
    email: "augustobriel2@gmsil.com"
} 
console.log(`O nome do cliente é ${cliente.nome} e essa pessoal tem ${cliente.idade} anos.`); 

console.log(`Os tres primeiros digitos do CPF do cliente são ${cliente.cpf.substring(0,3)}`);