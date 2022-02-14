

let calcMedia = function(){
    return(this.nota1 + this.nota2)/2
}

let turma = [
    {nome:"LP",
    nota1: 9,
    nota2: 8,
    //Obj metodo
    media:calcMedia
}
]
let aluno = turma[0]
console.log(aluno);
console.log(aluno.media())