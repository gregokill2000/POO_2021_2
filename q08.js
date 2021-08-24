const usuario = require('prompt-sync')({sigint:true})

function main()
{
    let V = []
    let qtd_par = 0

    for(let i = 0; i< 20; i++)
    {
        V[i]= Number(usuario('Digite um Número: '))
    }

    for(x of V)
    {
        if(x % 2 == 0)
        {
            qtd_par = qtd_par + 1;
        }
    }

    console.log('A quantidade de par é: ',qtd_par);
}
main()