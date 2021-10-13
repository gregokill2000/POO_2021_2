// Respostas do Exercicio postado na semana 06

/*
1. Objeto é uma analogia a elemetos do mundo real e que possui caracteristicas e comportamentos.
Classes é a categorição do objetos conforme os atributos e os métodos. Basicamente as clases são objetos em execução.
Ex. 
classe:                    objeto:
nome: texto;               nome: Fulano de Tal
telefone: número;          telefone: 97412-6352
Endereço: Texto.           Endereço: Rua Acer, 2019, Manuas-AM

2. Métodos: Comportamentos de um objeto ou ações que um objeto pode realizar;
Atributos: Características e propriedades que os objetos possuem;
O exemplo de um objeto poderia ser um bolo para festa, cujo suas caracteristicas seria sabor, cobertura, cor e recheio e tema.
o método ou seja ações desse bolo seria duas basicamente que são ser consumido e decorar já que é encomendado já com o tema da festa.

3.  Atributo                    Sistema em que é importante         Sistema em que não é importante
Peso                                 Nutricional                        Atividade Fisica
Tipo de CNH                          Detran                             Aeroclube
Tipo Sanguíneo                       Hospital                           Lanchonete
Habilidade destra                    Dirigir Carro Manual               Escrever
Percentual de gordura                Saúde                              Assistir um Esporte
Saldo em conta                       Comercial                          Ponto de Socorro
Etinia                               Cultura                            Fila do Transplante

4. a. Sim, pois facilita ao banco confirma a quem pertence aquela conta.
   b. Sim, acho que uma array.

5. Aluno, Diario, Boletim, Horarios e Histórico.

6. Um jogo de musica tipo o OSU teria com objetos: música, dificuldade, e o modo(ou estilo) ao qual eu irei jogar a musica.
 Atributos:
 música: nome da musica, artista. 
 dificuldade: nome de dificuldade.
 modo: estilo do jogo.

 métodos - sera selacionado o estilo de jogo, a musica e a dificuldade para jogar.
*/

//7.

class Retangulo 
{
    l1: number;
    l2: number;
    

    calculaArea(): number 
    {
        return this.l1 * this.l2;
    }

    calcularPerimetro(): number
    {
        return (this.l1 * 2) + (this.l2 * 2);
    }
}

let retangulo : Retangulo;
retangulo = new Retangulo();

retangulo.l1 = 4;
retangulo.l2 = 3;

console.log("\nQuestão 7\n")
console.log("Àrea do Retangulo = ",retangulo.calculaArea());
console.log("Perimetro do Retangulo = ",retangulo.calcularPerimetro());

//8.

class Circulo
{
    r: number;
    

    calcularPerimetro(): number 
    {
        return 2* Math.PI * this.r;
    }

    calcularArea(): number
    {
        return Math.PI * (this.r * this.r);
    }
}

let circulo : Circulo;
circulo = new Circulo();

circulo.r = 6;

console.log("\nQuestão 8\n")
console.log("Àrea do Circulo = ",circulo.calcularArea());
console.log("Perimetro do Circulo = ",circulo.calcularPerimetro());

//9.

class SituacaoFinanceira
{
    credito: number;
    debito: number;

    saldo(): number
    {
        return this.credito - this.debito;
    }
}

let situacao : SituacaoFinanceira;
situacao = new SituacaoFinanceira();

situacao.credito = 2200;
situacao.debito = 600;

console.log("\nQuestão 9\n")
console.log("Valor restante = ",situacao.saldo());