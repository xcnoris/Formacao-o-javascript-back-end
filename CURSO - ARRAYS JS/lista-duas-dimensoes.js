const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const  ListaAlunosMedia = [alunos, medias];

console.log(`A aluna da posição 1 da lista de alunos é: ${ListaAlunosMedia[0][1]}. A nota dessa aluna é ${ListaAlunosMedia[1][1]}`
);
/*
const nomes = ["Ana", "Juliana", "Leonardo"];
const idades = [30, 35, 28];
const faculdade = [false, true, true];

const funcionarios = [nomes, idades, faculdade];
*/

const funcionarios = [
    ["Ana", "Juliana", "Leonardo"],
    [30, 35, 28]
  ];

  console.log(`${funcionarios[0][2] } tem ${funcionarios[1][2]}`);