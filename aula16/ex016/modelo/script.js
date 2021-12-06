function contar() {
    let ini = document.getElementById("txti")
    let fim = document.getElementById("txtf")
    let passo = document.getElementById("txtp")
    let res = document.getElementById("res")

    if (ini.value.lenght ==0 || fim.value.lenght ==0 || passo.value.length ==0) { 
             /*LÊ-SE (SE O COMPRIMENTO DE INCIO FOR IGUAL À 0,
             OU COMPRIMENTO DE FIM FOR IGUAL A 0 
             OU COMPRIMENTO DE PASSO FOR IGUA A 0*/ 
        res.innerHTML = "[ERRO] Faz direito caraio!"
    } else{
        res.innerHTML = 'Contando: <br>'
        //TRANSFORMANDO EM VARIÁVEL NUMÉRICA
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        
        if (p <= 0 ){ 
            /* LÊ-SE (SE PASSO FOR MENOR OU IGUAL A ZERO)*/ 
            alert('Tá errado caraio, considerando PASSO: 1')
            p = 1
        }

        if (i < f) {
             //CONTAGEM CRESCENTE

            for( let c = i; c <= f; c+=p) { 
             /* LÊ-SE (CONTADOR IGUAL INICIO, ENQUANTO 
             CONTADOR FOR MENOR OU IGUAL À FIM, CONTADOR
             VAI GANHAR PASSO)*/
                res.innerHTML += ` ${c} \u{1F449} `
            }
            
        } else {
            //CONTAGEM DECRESCENTE
            for(c = i ; c >=f ; c -=p){ 
                 /* LÊ-SE (CONTADOR IGUAL INICIO, ENQUANTO 
                 CONTADOR FOR MAIOR OU IGUAL À FIM, CONTADOR
                 VAI PERDER O PASSO)*/
                res.innerHTML += ` ${c}  \u{1F449} `
            } 
        }
        // EMOJEZIN DO FINAL
        res.innerHTML +=` ${c} \u{1F64C}  `
    }
}