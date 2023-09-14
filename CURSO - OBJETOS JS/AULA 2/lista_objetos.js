const cliente = {
    nome: "João",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["11 922233344", "22 922334455"]
};
cliente.enderecos = [
    {
        rua: "R. estovaquia azul",
        numero: "986",
        apartamento: true,
        complemento: "ap 745"
    }
]

cliente.enderecos.push({    
    rua: "R. arnold",
    numero: "729",
    apartamento: false,
    complemento: "Fundos"
});


const lista_aenas_apartamentos =cliente.enderecos.filter(
(endereco) => endereco.apartamento === true
);

console.log(lista_aenas_apartamentos);