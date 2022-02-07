
let nota1 = 8;
let nota2 = 8;

let media = (nota1 + nota2)/2;
let conceito = " "

if (media >= 8){
    conceito = "ótimo"
}
else if(media >= 6.5){
    conceito = "bom"
}
else{
    conceito = "Regular"
}


console.log(media);
console.log(conceito);


switch(conceito){
    case "ótimo":
        console.log("avante")
        break;
    case "Bom":
        console.log("Parabens")
        break;
    case "Regular":
        console.log("Está quase")
        break;
    case "Mais ou menos":
        console.log("Brocou!!")
        break;
    default:
        console.log("Houve um Erro!")
        break;
}
