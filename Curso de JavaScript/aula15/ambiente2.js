let num = [2,5,9,1] 
num.sort()
let pos = num.indexOf(4) // dizer a posição de um determinado valor
if(pos == -1){
    console.log('O valor não foi encontrado!')
} else{
    console.log(`O valor 4 está na posição ${pos}`)
}

