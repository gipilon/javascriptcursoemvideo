function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert (`[ERRO] Verifique os dados e tente novamente!`)
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if(idade >= 0 && idade < 10) {
                img.setAttribute('src', 'nenemmenino.png')
            } else if (idade < 21){
                img.setAttribute('src', 'homemjovem.png')
            } else if (idade < 50){
                img.setAttribute('src', 'homemadulto.png')
            } else {
                img.setAttribute('src', 'homemvelho.png')
            }
        } else if (fsex[1].checked){
            genero = 'mulher'
            if(idade >= 0 && idade < 10) {
                img.setAttribute('src', 'nenemmenina.png')
            } else if (idade < 21){
                img.setAttribute('src', 'mulherjovem.png')
            } else if (idade < 50){
                img.setAttribute('src', 'mulheradulta.png')
            } else {
                img.setAttribute('src', 'mulhervelha.png')
            }
        }

        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}