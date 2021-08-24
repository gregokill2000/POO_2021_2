const usuario = require('prompt-sync')({
    sigint: true
  })

function main()
{
    console.log('Digite -1 para pausar')

    let num = Number(usuario('Digite um número: '))
    let qtd = 0;
    let soma = 0;
    const fim = -1;
    while(num !== fim)
    {
      soma += num
      qtd++
      num = Number(usuario('Digite um número: '))
    }
    console.log(`A soma é ${soma}`)
    console.log(`A média é ${soma/qtd}`)
}
main()