var agora = new Date()
var hora = agora.getHours()
if(hora > 24){
}else if (hora > 1){ 
    console.log(`São ${hora} horas.`) 
}else{
    console.log(`É ${hora} hora.`)
} 
if(hora <12){
    console.log('Bom dia!')
}else if(hora <= 18){
    console.log('Boa tarde!')
}else{
    ('Boa noite!')
}
