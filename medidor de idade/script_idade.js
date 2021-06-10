function concluir(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txt_ano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert("<--!ERRO!--> - Confira as informações e tente novamente.")
    } else {
        var fsexo = document.getElementsByName('radio_sexo')
        var idade = ano - Number(fano.value)
        var genero = ''
        let imagem = document.createElement('img')
        imagem.setAttribute('id', 'foto')
        if (fsexo[0].checked){
            genero = 'homem'
            if (idade >=0 && idade <=13){
                //catarrento
            imagem.setAttribute('src', 'menino.png')
            } else if (idade > 13 && idade <=18) {
                //adolescente
            imagem.setAttribute('src', 'adolescente(m).png')
            } else if (idade > 18 && idade <=60){
                //adulto
            imagem.setAttribute('src', 'adulto.png')
            } else if (idade > 60){
                //véia
            imagem.setAttribute('src', 'idoso.png')
            }
        } else if (fsexo[1].checked){
            genero = 'mulher'
            if (idade >=0 && idade <=13){
                //catarrento
            imagem.setAttribute('src', 'menina.png')
            } else if (idade > 13 && idade <=18) {
                //adolescente
            imagem.setAttribute('src', 'adolescente(f).png')
            } else if (idade > 18 && idade <=60){
                //adulto
            imagem.setAttribute('src', 'adulta.png')
            } else if (idade > 60){
                //véia
            imagem.setAttribute('src', 'idosa.png')
            }
        }
        res.innerHTML = `Detectamos que você é ${genero} e tem ${idade} anos.`
        res.style.textAlign = 'center'
        res.appendChild(imagem)
       
    }
}