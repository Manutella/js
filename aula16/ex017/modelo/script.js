             //EXERCICIO QUE FIZ SOZINHA

function gerar() {
var n = parseInt(document.getElementById("num").value); //TRANSFORMANDO EM VARIÁVEL NUMÉRICA 
let tab = document.getElementById("tabuada")


if ( num.value.length ==0) // Lê- se: Se o comprimento da variante "num" estiver vazia)
 {
    alert ("[ERROR] Bota um número nessa caralha")
} else {
    
    tab.innerHTML = '' // para limpar a area de seleção a cada nova conta

   for(var c =1; c<=10; c++) //Lê-se contador igual a 1, definindo o fim (contador menor ou igual a 10) definindo continuidade (c++)
   {
    //definindo a repetição de 1 à 10
    let item = document.createElement ("option") //defindo lista selecionável
    item.text = `${n} x ${c} = ${n*c}` // formando a expressão da conta (4x5=20)
    tab.value =`tab${c}` //nomear cada seleção da lista (tab1, tab2, etc.)

    tab.appendChild(item) // codigo que faz aparecer na lista de seleção (tipo innerText)

}
} 
} 

                /*EXERCIO COM GUANABARA
    
function gerar() {
let num = document.getElementById("num")
let tab = document.getElementById("tabuada")

if( num.value.length ==0) {
    alert("[ERROR] Bota um número nessa caralha!")
} else {
    let n = Number(num.value)
    tab.innerHTML = ''

    for(var c=1; c<=10; c++ ){
        let item = document.createElement("option")
        item.text = `${n} x ${c} = ${n*c}`
        tab.appendChild(item)
    }

} 




}*/
