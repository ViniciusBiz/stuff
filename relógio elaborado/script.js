var temporeal = window.setInterval(() => {
    load()
},1000);

function load() {
    var msg = window.document.getElementById('msg')
    var pic = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    var segundo = data.getSeconds()
    msg.innerHTML =  `Agora são exatamente ${hora} horas, ${minuto} minutos e ${segundo} segundos`

    if (hora >=0 && hora<12){
        pic.src = "manha.png"
        document.body.style.background = '#768be7'
    
    } else if (hora >= 12 && hora <=18){
        pic.src = "tarde.png"
        document.body.style.background = '#98a2b9'
    } else {
        pic.src = "noite.png"
        document.body.style.background = '#013c61'
    }
}