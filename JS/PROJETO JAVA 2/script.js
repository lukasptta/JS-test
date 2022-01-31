function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.valuo > ano)) {
        window.alert('[ERRO] verifique os dados e tente novamente !')

    }else {

        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked) {
            genero='Homem'
            if(idade >=0 && idade < 10){
                 // criança
                 img.setAttribute('src','bebe-m.gif')
            }else if (idade<21){
                //jovem
                 img.setAttribute('src','jovem-masc.gif')
            }else if (idade< 50){
                //adulto
                img.setAttribute('src','homem.gif')
            } else{
                //idoso
                img.setAttribute('src','idodo-m')
            }
           
        
        } else if(fsex[1].checked){
            genero='Mulher'
            if(idade >=0 && idade < 10){
                img.setAttribute('src','bebe-m.gif')
                // criança
           }else if (idade<21){
               //jovem
               img.setAttribute('src','jovem-f.gif')
           }else if (idade< 50){
               //adulto
               img.setAttribute('src','mulher.gif')
           } else{
               //idoso
               img.setAttribute('src','idoso-f.gif')
           }
        }

        res.getElementsByClassName.textAlign='center'
        res.innerHTML=`Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)

    } 
    
}