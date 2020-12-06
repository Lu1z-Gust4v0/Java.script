/*let num = [] //vetor 
a = 9
while(a >= 1){
    num.push(a)
    a--
}
console.log(`O vetor é ${num}`)  escrever o vetor
num.sort() organizar o vetor em ordem crescente
console.log(`O vetor possui ${num.length} elementos.`) // num.length --> tamanho do vetor
console.log(`O vetor é ${num}`) 

for(let b = 0;b <= num.length;b++){        // escrever todos os valores dentro do vetor.  
    console.log(num[b]) ----> console.log(`O elemento ${num[b]} está na posição ${pos}`)
} 
*/
let num = [2,7,9,0,4,823,86,9245] 
num.sort()
for(let pos in num){
    console.log(`O elemento ${num[pos]} tem posição ${pos}`) // maneira simplificada
} 


