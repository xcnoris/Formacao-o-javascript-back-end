
const fichaGuerreiro = {
    nome: "Aragorn",
    classe: "guerreiro"
   }
   
   const equipoGuerreiro = {
    espada: "Andúril",
    capa: "capa élfica +2"
   }

   //const guerreiro = {fichaGuerreiro, equipoGuerreiro};
    
   const guerreiro = {...fichaGuerreiro, ...equipoGuerreiro};
   
   console.log(guerreiro);
   

   console.log(guerreiro.nome)

   /*

   const mago = {
    nome: "Gandalf",
    classe: "mago"
   }
    const guerreiro = {
    nome: "Aragorn",
    classe: "guerreiro"
   }
   
   const ranger = {
    nome: "Legolas",
    classe: "ranger"
   }
   
//Usando a sintaxe de espalhamento, se existir chaves com o mesmo nome, o metodo vai sobescrever o valor da chave

   const personagens = { ...mago, ...guerreiro, ...ranger }
console.log(personagens)


 */