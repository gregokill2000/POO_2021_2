const usuario = require('prompt-sync')()

function main()
{
    let segundos = Number(usuario('Digite o tempo em segundos(s): '))
    horario(segundos)
}
const horario = (s) =>
{
    let res1 = s%3600;
    let hr = s/3600;
    let res2 = res1%60;
    let min = res1/60;
    let seg = res2;
    console.log(`${Math.trunc(hr)} h: ${Math.trunc(min)} min: ${Math.trunc(seg)} seg:`)
}
main()

