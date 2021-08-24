const usuario = require('prompt-sync')({sigint:true})

function main()
{
    let V = []

    for(let i = 0; i< 5; i++)
    {
        V[i]= Number(usuario('Digite um Número: '))
    }

    console.log(V);
}
main()