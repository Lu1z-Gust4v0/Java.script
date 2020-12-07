function fatorial(x=0){
    let fat = 1
    for(let c = x;c > 1;c--){
        fat *= c
    }
    return fat 
}
console.log(fatorial(5))