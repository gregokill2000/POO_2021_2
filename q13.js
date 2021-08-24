const usuario = require('prompt-sync')()

function main()
{
    let n = usuario('Digite um número: ')
    let d = usuario('Digite um número entre 0 e 9: ')
    let contador = 0;

    if(d >= 0 && d <= 9)
    {
      for(x of n){
        if(x == d)
        {
          contador++
        }
      }

      console.log(contador)
    }
    else
    {
      console.log('O valor de d não está entre 0 e 9 ')
    }
}
main()