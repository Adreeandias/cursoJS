function contar() {
    var inicio = document.getElementById('icon')
    var fim = document.getElementById('fcon')
    var passo = document.getElementById('pass')
    var res = document.getElementById('res')

    var i = (inicio.value)
    var f = (fim.value)
    var p = (passo.value)

    if (i.value.length == 0 || f.value.length == 0 || p.value.length == 0) {
        window.alert('ERROR Faltam Dados!!')
    } else {
        res.innerHTML = 'contando: '

        for (var c = i; c <= f; c+= p) {
            
        }
    } 

}