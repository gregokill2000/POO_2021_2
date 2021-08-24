const usuario = require('prompt-sync')()

function mian()
{
    let s = usuario('Digite uma Frase: ')
    let a = usuario('Digite um caractere: ')
    let b = usuario('Digite um caractere: ')
    let resultado = ''

    for(x of s)
    {
        if(x == a)
        {
            x =b
        } 

        resultado+= x
    }

    console.log('Novo texto: ',resultado);
}
mian()