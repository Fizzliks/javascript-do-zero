const alunos = ["Ana", "Marcos", "Maria", "Mauro"];
const notas = [7, 4.5, 8 , 6]

const reprovados = alunos.filter((aluno, indice) =>{
    return notas[indice] < 7 ;
})

console.log(reprovados);