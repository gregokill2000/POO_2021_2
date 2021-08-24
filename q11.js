const usuario = require('prompt-sync')()

function main()
{
    let vP = Number(usuario('Digite um valor para "p": '))
    let vX = Number(usuario('Digite um valor para "x": '))

    console.log(`O valor de ${vP} por cento de ${vX} é: ${VPorcentagem(vP,vX)}%`)
  
}  
const VPorcentagem = (x,y) => ((x/y) * 100); 
main() 