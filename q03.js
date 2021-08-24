const usuario = require('prompt-sync')()

const x = Number(usuario('Digite um número: '))
const y = Number(usuario('Digite um número: '))
const z = Number(usuario('Digite um número: '))

if( x < y && x < z)
{
    console.log('O menor valor é ', x)
}
else if( y < x && y < z)
{
    console.log('O menor valor é ', y)
}
else if( z < y && z < x)
{
    console.log('O menor valor é ', z)
}