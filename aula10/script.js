function somar() {
    var tn1 = document.getElementById("txtn1")
    var tn2 = document.querySelector('input#txtn2')
    var res = document.getElementById('res')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 + n2
    
    if(n1 <=0 || n2 <= 0){
         alert( "[ERRO] Insira um número válido ou maior que zero.")
    } else{
        
        res.innerHTML =   ` A soma entre ${n1} e ${n2} é ${s}.` 

    }


    }