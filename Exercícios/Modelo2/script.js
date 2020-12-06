function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')
if(fano.value.length ==0 || fano.value > ano ){
    window.alert('[Erro] Verifique os dados e tente novamente')
}else {
    var sex = document.getElementsByName('sex')
    var idade = ano - fano.value
    var gen = ''
    var img = document.createElement('img')
    img.setAttribute('id','foto')
     if(sex[0].checked){
        gen = 'Homem'
        if(idade <=10 ){
            //criança
        img.setAttribute('src','o-bebe.png')
        }else if(idade < 21){
            //jovem   
        img.setAttribute('src','homem-jovem.png')    
        }else if (idade < 50){ 
           //adulto
        img.setAttribute('src','homem-adulto.png')   
        }else {
            //idoso
        img.setAttribute('src','homem-idoso.png')    
        }
    }else if(sex[1].checked){
        gen = 'Mulher'
        if(idade <= 10 ){
            //criança
        img.setAttribute('src','a-bebe.png') 
        }else if(idade < 21){
            //jovem
        img.setAttribute('src','mulher-jovem.png')
        }else if (idade < 50){
            //adulto
        img.setAttribute('src','mulher-adulta.png')
        } else {
            //idoso
        img.setAttribute('src','mulher-idosa.png') 
        }
    }
    if(idade < 130){
        res.style.textAlign = 'center'  
        res.innerHTML = `Detectamos: ${gen} com ${idade} anos.`
        res.appendChild(img)
    }else{
        res.style.textAlign = 'center'  
        res.innerHTML = `Detectamos: ${gen} <strong>IMORTAL</strong> com ${idade} anos.`
        res.appendChild(img)
    }
    } 
     
}   
        
    