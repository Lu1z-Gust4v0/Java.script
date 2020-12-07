function Gerar(){
    let n1 = document.getElementById('n1') 
    let tab = document.getElementById('seltab')
    if (n1.value.length == 0){
        window.alert('[ERRO] Por favor, digite um número')
    } else {
        let n = Number(n1.value)
        tab.innerHTML = ''
        for(let c = 1; c <= 10;c++ ){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}` 
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
    

} 