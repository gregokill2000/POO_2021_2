const usuario = require('prompt-sync')()

const a = Number(usuario('Digite um número: '))
const ant = a -1;
const suc = a +1;

console.log('Seu antecessor é ', ant)
console.log('Seu sucessor é ', suc)