let num = document.querySelector('input#txtn')
let lista = document.querySelector('select#listan')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if(Number(n) >=1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        window.alert('tudo ok')
    } else {
        window.alert('Valor invalido ou já encontrado na lista.')
    }
}