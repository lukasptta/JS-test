var nomes = ["igor", "fabio", "Luana"]
var notaA = [7.0, 5.4 , 6.8]
var notaB = [8.5, 9.4 , 3.4]


function media(n1,n2){
    return(n1 + n2)/2
}

function passou(media){

  if(media > 7){
      return "Aprovado";
  } else{
      return "Reprovado";
  }
}



for (var index in nomes){

    var nota1 = notaA[index];
    var nota2 = notaB[index];

    var m = media(nota1, nota2)


    console.log(nomes[index] + " - " + nota1 + " - " + nota2 + " - " + media(nota1, nota2) + " - " + passou() );
}