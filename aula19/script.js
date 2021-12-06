let num = document.getElementById('num')
let sel = document.getElementById('sel')
let res = document.querySelector('div#res')
let vetor = []

function numero(n) { 
//function numero receberá n
if (Number (n) >=1 && Number(n)<=100){
// se valor do numero n foir maior ou igual a 1 e menor ou igual a 100 
    return true
} else{
    return false
}
} 

function inlista(n , l){
//function inlista receberá n
if (l.indexOf(Number(n)) != -1 ){
// Se na lsita o valor de n for diferente de 1 (ñ pode valores repetidos)
    return true
} else{
    return false
}
}


function add(){
 
     if (numero(num.value) && !inlista(num.value, vetor)){
// verificar se o valor adicionado é um número, e se ja está na lista
        vetor.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        sel.appendChild(item)
        res.innerHTML = ''
} else {
    alert('Faz direito caraio.')

    } num.value = '' //apagar quando valor na caixa, quando adicionado
    num.focus() // barrinha piscandinho.
}

function final(){
    if (vetor.length == 0){
        alert('Faz direito caraio.')
    } else{
        let total = vetor.length //para saber o total de numeros na lista
        let maior = vetor[0]
        let menor = vetor [0]
        let soma = 0
        let media = 0
        for (let pos in vetor){
            soma+= vetor[pos] // somar valores na posição pos
            
            if (vetor[pos] > maior)
                maior = vetor[pos]
            
            if (vetor[pos] < menor)
                menor = vetor[pos]
            
        }
        media = soma / total 
        res.innerHTML= '' 
        res.innerHTML += `<p>Ao todo temos ${total} números cadastrados</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}. </p> `
        res.innerHTML += `<p>O menor valor informado foi ${menor}. </p> `
        res.innerHTML +=`<p>A soma dos valores são ${soma}</p>`
        res.innerHTML += `<p>A média entre os valores são ${media}</p>`

    }

}



