const usuario = require('prompt-sync')()

function main()
{
    let frase = usuario('Digite uma frase: ')
    let resultado = ''

    for (x of frase)
    {
        if(!(x == "a" || x == "e" || x == "i" || x == "o" || x == "u" || x == "A" || x == "E" || x == "I" || x == "O" || x == "U"))
        {
            resultado += x
        }
    }

    console.log('Novo texto: ',resultado);
}
main()
