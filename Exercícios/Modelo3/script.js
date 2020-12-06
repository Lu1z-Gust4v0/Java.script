function Resultado(){
    let n1 = document.querySelector('input#n1')
    let n2 = document.querySelector('input#n2')
    let n3 = document.querySelector('input#n3')
    let res = document.querySelector('div#res') 

    if (n1.value.length == 0 || n2.value.length == 0 || n3.value.length == 0){
        res.style.textAlign = 'center'
        res.innerHTML = '<strong>[Erro]</strong> Os dados não foram inseridos!'
    } else{ 
        res.innerHTML = 'Processando: <br>'
        let a = Number(n1.value)
        let b = Number(n2.value)
        let c = Number(n3.value)
        if (c <= 0){
            window.alert('[Erro] Passo Inválido!')
            window.alert('O passo foi substituido por 1')
            c = 1
            
        }
        if(a < b){
            //contagem crescente
            for(let d = a; d <= b; d += c){
                res.innerHTML += ` ${d} \u{1F449} `
        }
    } else { 
        //contagem decrescente
            for(let d = a; d >= b; d -= c){
                res.innerHTML += ` ${d} \u{1F449}`
        } 
        }
        res.innerHTML += ` \u{1F3C1}`
    }
}