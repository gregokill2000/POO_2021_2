const usuario = require('prompt-sync')()

function main()
{
    // Cotação e valor a se convertido
    const cotação = Number(usuario('Informe a cotação do Dolár hoje: '))
    const valor_a_converter = Number(usuario('Informe o valor que deseja converter: '))

    // Conversão
    const valor = cotação * valor_a_converter
    
    // Conversão do valor para o formato R$
    const Real = valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})

    // Saida
    console.log('O valor corresponde à: ',Real)
}
main()