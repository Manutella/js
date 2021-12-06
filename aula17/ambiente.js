let valores = [8,1,7,4,2,9]
valores.sort() //organizar em modo crescente
            
            /*VERSÃO TRADICIONAL
for (let pos = 0; pos< valores.length; pos++){
    console.log(`a posição ${pos} tem o valor ${valores[pos]}`)
} L*/

           // VERSÃO ATUALIZADA
    
for(let pos in valores){
    console.log(`a posição ${pos} tem o valor ${valores[pos]}`)
}

            //BUSCANDO VALORES DENTRO DO VETOR

console.log (valores)
let pos = valores.indexOf(4)
if(pos == -1){
    console.log('O valor não foi encontrado')
}else{
console.log( `O valor 4 está na posição ${pos}`)}