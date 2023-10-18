// let x = ''
// console.log(x)
// x = 'oi'

// declarar a funcao
function imprimeTexto(texto) {
    console.log(texto)
}
//executar a funcao
imprimeTexto('Fala pessoal, oi mundo!')

imprimeTexto(multiplica(soma(5, 10),))

// tres formas de escrever funcao

function soma(numero1, numero2)
{
    //outros codigos
    return  numero1 + numero2 //return deve ser a ultima linha, pois as demais linhas naop serao executadas
}

function multiplica(numero3 = 1, numero4 = 1)
{
    return numero3 * numero4
}

