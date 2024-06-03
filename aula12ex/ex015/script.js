function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.querySelector('img#imagem')
    var tit = window.document.querySelector('h1#titulo')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 19
    msg.innerHTML = `Agora são ${hora} hora.`
    
    if (hora >= 0 && hora < 12) {

        img.src = 'fotomanha.png'
        document.body.style.background = '#afdefc'
    } else if (hora >= 12 && hora <= 18) {
        
        img.src = 'fototarde.png'
        tit.innerHTML = 'Boa Tarde!'
        document.body.style.background = '#cc5304'

    } else {
        
        img.src = 'fotonoite.png'
        tit.innerHTML = 'Boa Noite!'
        document.body.style.background = '#001c43'
    }
}