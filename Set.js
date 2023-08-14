const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];


// Um dos parametros do Set é que os valores de um away não podem se repetir
const meuSet = new Set (nomes);

const nomeAtualizado = [...meuSet]
console.log(nomeAtualizado);






/*
for (let i = 0, v = 0; i   < nomes.length; i++) {
     
    if (v != nomes[i]) {
        v = nomes[i]
        console.log('Sim');
    } else {
       v = nomes[i-1];
      
        
        nomes.splice([i],1)
        console.log('Não');
}
}

console.log(nomes);

*/