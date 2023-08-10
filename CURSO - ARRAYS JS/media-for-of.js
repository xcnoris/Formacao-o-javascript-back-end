const notas = [10, 6.5, 8, 7.5 ];

let SomaDasNotas =0

for (let nota of notas) {
    SomaDasNotas +=nota
};
let media = SomaDasNotas / 4

console.log(`A soma das notas é ${media}`);

//  EXEMPLOS DE FOR OF

// PECORRENDO O AWAY DE TRAS PARA FRENTE
/*
const numeros = [100, 200, 300, 400, 500, 600];

for (let i = numeros.length - 1; i >= 0; i--) {
  console.log(numeros[i]);
}
*/
// PECORRENDO O AWAY PULANDO DE DOIS EM DOIS
const numeros = [100, 200, 300, 400, 500, 600];

for (let i = numeros.length - 1; i >= 0; i -= 2) {
  console.log(numeros[i]);
}




//  criar dinamicamente um array com todos os números pares de 0 a 100

const numerosPares = [];

for (let i = 0; i <= 100; i += 2) {
  numerosPares.push(i);
}

console.log(numerosPares);