const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const  ListaAlunosMedia = [alunos, medias];

function ExibiNomeNota (aluno){
    if (ListaAlunosMedia[0].includes(aluno)) {
        //const alunos = ListaAlunosMedia[0];
        //const medias =  ListaAlunosMedia[1];

        const [ alunos , medias] = ListaAlunosMedia

        const indice = alunos.indexOf(aluno)
        const media = medias[indice]

        console.log(`O aluno(a) ${aluno} tem a media ${media}`);

        
    } else {
        console.log(`O ${aluno} não foi encontrado na lista.`);
    }
}

ExibiNomeNota("Caio")