

let aluno = {
    nome:"lp",
    notas:[8, 6],

    media: function (n1, n2){
        return (n1 + n2)/ 2;
    }
}
    console.log(aluno.nome)
    console.log(aluno.media(aluno.notas[0], aluno.notas[1]))