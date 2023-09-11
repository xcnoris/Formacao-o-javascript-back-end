const cliente={
    nome: "Augusto",
    idade: 17,
    altura: 1.78,
    peso: 61.6,
    cpf: "11122233344",
    gmail: "augusto@gmail.com"
} 
console.log(`O nome do cliente é ${cliente["nome"]} e essa pessoal tem ${cliente["idade"]} anos.`); 

const chaves=["nome", "idade","gmail", "cpf"]

chaves.forEach((chave )=>{
    console.log(`A chave ${chave} tem valor ${cliente[chave]}`);
})