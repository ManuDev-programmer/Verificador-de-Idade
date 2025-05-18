function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                // Criança
                img.src = "https://i.postimg.cc/Ty0S3sHv/pexels-larbigno-32097495.jpg"
            } else if (idade < 21) {
                // Jovem
                img.src = "https://i.postimg.cc/TK7g2qqH/pexels-sebastian-715546.jpg"
            } else if (idade < 50) {
                // Adulto
                img.src = "https://i.postimg.cc/Q9X365vh/pexels-mastercowley-1300402.jpg"
            } else {
                // Idoso
                img.src = "https://i.postimg.cc/gX5gwbVQ/pexels-olly-3831645.jpg"
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                // Criança
                img.src = "https://i.postimg.cc/CB6Qjqgv/pexels-jonathanborba-26509769.jpg"
            } else if (idade < 21) {
                // Jovem
                img.src = "https://i.postimg.cc/bZ3HDj8g/pexels-soldiervip-1391498.jpg"
            } else if (idade < 50) {
                // Adulto
                img.src = "https://i.postimg.cc/TK8B7gWF/pexels-bruno-melo-1157201511-32072051.jpg"
            } else {
                // Idoso
                img.src = "https://i.postimg.cc/FdfZXCMZ/pexels-pixabay-34540.jpg"
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}
