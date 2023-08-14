const nomes = ['ana Julia','Caio Vinicios','BIA silva'];

/*
const nomes_Padronizados=nomes.map((nome) =>{
    return  nome.toUpperCase();
})*/

const nomes_Padronizados=nomes.map((nome) => nome.toUpperCase())

console.log(nomes_Padronizados);

// testes

const arrayNums = [1, 2, 3, 4]


function multiplicaPorDez(num) {
    return num * 10
};

const arraySomada = arrayNums.map(multiplicaPorDez)

console.log(arraySomada);