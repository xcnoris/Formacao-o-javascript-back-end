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

const chavesDoObjetos = Object.keys(cliente);

console.log(chavesDoObjetos);

if (!chavesDoObjetos.includes("enderecos")) {
    console.error("Erro. É necessario ter um endereço")
}