function contar() {
    var ic = document.getElementById('icon')
    var fc = document.getElementById('fcon')
    var pc = document.getElementById('pass')
    var res = document.getElementById('res')
    var i = Number(ic.value)
    var f = Number(fc.value)
    var p = Number(pc.value)
    

    if (ic.value.length == 0 || fc.value.length == 0 || pc.value.length == 0) {
        window.alert('ERROR Faltam Dados!!')
        res.innerHTML = 'Impossivel contar!'
    } else {
        res.innerHTML = 'contando: <br>'
        if (p<=0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p=1
        }

        if (i<f) {
            //crescente
            for(var c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F334}`
            }


        } else {
        //regrassiva
            for(var c = i; c >= f; c-= p) {
            res.innerHTML += ` ${c} \u{1F449}`
            }
        }

        res.innerHTML += `\u{1F3C1}`
    }
}