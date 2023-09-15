const cliente = {
    nome: "João",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["11 922233344", "22 922334455"],
    saldo: 200,
    efetuapagamento: function (valor) {
        if (valor > this.saldo){
            console.log(`Saldo insuficiente`);
        } else {
            this.saldo -= valor
            console.log(`Pagamento realizado. Novo saldo: R$ ${this.saldo}`);
        }
        
    }
};

cliente.efetuapagamento(190)

console.log(cliente);