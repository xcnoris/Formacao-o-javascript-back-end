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
    for (let chave in cliente){
        let tipo = typeof cliente[chave]
        if (tipo !== "object" && tipo !== "function") {
            console.log(`A chave ${chave} tem o valor ${cliente[chave]}`);    
        }
        
    }