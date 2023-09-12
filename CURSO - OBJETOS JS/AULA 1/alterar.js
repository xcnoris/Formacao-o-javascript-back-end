const pessoa ={
    nome:"Luma",
    profissao:"Engenheira"
}
//Retorna o valor da propiedade nome
console.log(pessoa.nome);

// Retorna o valor undefined por não existir a propriedade acessada
console.log(pessoa.idade);

//Criando propiedade e adicionando valor

pessoa.telefone =" 11 912345678"

console.log(pessoa.telefone);

// Alterando nome
pessoa.nome= "Luma Silva"

console.log(pessoa);