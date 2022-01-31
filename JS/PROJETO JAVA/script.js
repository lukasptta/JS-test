function ao(){

var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data= new Date()
var hora = data.getHours()
msg.innerHTML=`Agora são ${hora} horas`

if (hora >= 4 && hora < 12){

    img.src= '1.png'
    document.body.style.background='#fcfc38'
} else if (hora >= 12 && hora <= 18) {
    //Boa tarde
    img.src= '2.png'
    document.body.style.background='#ebc68e'
} else {
    //Boa noite
    img.src= '3.png'
    document.body.style.background='fffff'
}

}