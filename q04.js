const usuario = require('prompt-sync')()

function main ()
{
    const n = Number(usuario('Digite um número de 1 a 12 para seber o mês: '))

    if (n == 1)
    { 
        console.log('Janeiro')
    }
    else if(n == 2)
    {
        console.log('Fevereiro')
    }
    else if(n == 3)
    {
        console.log('Março')
    }
    else if(n == 4)
    {
        console.log('Abril')
    }
    else if(n == 5)
    {
        console.log('Maio')
    }
    else if(n == 6)
    {
        console.log('Junho')
    }
    else if(n == 7)
    {
        console.log('Julho')
    }
    else if(n == 8)
    {
        console.log('Agosto')
    }
    else if(n == 9)
    {
        console.log('Setembro')
    }
    else if(n == 10)
    {
        console.log('Outubro')
    }
    else if(n == 11)
    {
        console.log('Novembro')
    }
    else if(n == 12)
    {
        console.log('Dezembro')
    }
}
main()