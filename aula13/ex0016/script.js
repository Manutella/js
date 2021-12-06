function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length ==0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verfique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada ${idade}`
        var gên = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
       if (fsex[0].checked) {
            gên = 'Homem'
            if(idade >= 0 && idade <10){
                //Criança
                img.setAttribute('src', 'menino.png')
            } else if ( idade <21){
                //Jovem
                img.setAttribute('src', 'garoto.png')
            } else if ( idade <50) {
                //Adulto
                img.setAttribute('src','homem.png')

            } else {
                //Idoso
                img.setAttribute('src', 'idoso.png')
            }

        } else if (fsex[1].checked){
            gên = 'Mulher'
            if(idade >= 0 && idade <10){
                //Criança
                img.setAttribute('src', 'menina.png')
            } else if ( idade <21){
                //Jovem
                img.setAttribute('src', 'garota.png')
            } else if ( idade <50) {
                //Adulto
                img.setAttribute('src','mulher.png')

            } else {
                //Idoso
                img.setAttribute('src', 'idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gên} com ${idade} anos` 
        res.appendChild(img)
    }

}