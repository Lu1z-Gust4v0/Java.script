let num = document.querySelector('input#txt1')
let lista = document.querySelector('select#lista')
let res = document.querySelector('div#res')
let valores = [] 

function isNumero(n) {
    if(Number(n) >=1 && Number(n) <= 100 ){
        return true 
    } else {
        return false
    }
}
function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}
function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value)) 
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item) 
        res.innerHTML = ''
    } else {
        window.alert('[ERRO] Valor inválido ou já adicionado.')
    }
    num.value = ''
    num.focus()
} 
function finalizar(){
    if (valores.length == 0){
        window.alert('[ERRO] Adicione um número na barra')
    } else{
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){ 
            soma += valores[pos]
            if(valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / total
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${total} números adicionados.</p>`
        res.innerHTML += `<p>O maior valor adicionado foi ${maior}. </p>`
        res.innerHTML += `<p>O menor valor adicionado foi ${menor}. </p>`
        res.innerHTML += `<p>A soma dos valores é ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores é ${media}.</p>`
    }
}    

    