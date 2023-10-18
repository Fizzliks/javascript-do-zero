const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

function ExibeNomeENota(aluno){
    if(listaDeAlunosEMedias[0].includes(aluno)){
        // const aluno = listaDeAlunosEMedias[0];
        // const nota = listaDeAlunosEMedias[1];
        const [alunos, media] = listaDeAlunosEMedias;
        
        console.log(`Cadastro de ${aluno} encontrado`);

        const indice = alunos.indexOf(aluno);
        const mediaAluno = media[indice];

        console.log(`${aluno} tem a média de ${mediaAluno}`);
       
    }else
        console.log(`Não encontrei o cadastro de ${aluno}`);

}

ExibeNomeENota("Ana");