const paciente = {
    nome: "James T.",
    idade:30,
    email: "jt@email.com",
    identicacao: "Alpha01259859",
    funcao:"comandante",
    peso:80.1,
    altura:1.80,
    calcularIMC:function(){
          return (this.peso/(Math.pow(this.altura,2)))
    },
    nomeCompleto:function(){
      console.log(this.nome)
    }
   }

    for (const chave in paciente) {
    console.log(chave);
   }
 

   /*
    
       Posso utilizar o método for..In como loop e exibir somente as propriedades do objeto que não são classificadas como objetos ou funções, como no código abaixo:

   let dados = "";
   for (let info in paciente) {
   if (typeof paciente[info] === "object" || typeof paciente[info] === "function") {
     continue
   } else {
    dados += `${info} ==> ${paciente[info]}
     `}
   };


   */