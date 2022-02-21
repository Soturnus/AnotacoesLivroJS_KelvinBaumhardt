// Estudos do livro: Javascript - Kelvin Baumhardt

var carro = {
    extras: ['ar-condicionado', 'freios abs', 'som'],
    velocidade: 0,
    faroisLigados: false,
    ligarFarois: function(){
        this.faroisLigados = true
    },
    acelerar: function (velocidade){
        this.velocidade += velocidade
    },
    freiar: function (){
        this.velocidade = 0
    }
}

carro.ligarFarois()
console.log('Farois ligados: ' + carro.faroisLigados)

carro.acelerar(50)
console.log('Velocidade: ' + carro.velocidade)

carro.freiar()
console.log('velocidade: ' + carro.velocidade)

console.log()
console.log('<------------------------------>')
console.log()

var nomes = ['Joao', 'Maria', 'Aurora', 'Branca', 'Malevola']

for (var i = nomes.length - 1; i >= 0; i-- ){
    console.log(nomes[i])
}

console.log()
console.log('<------------------------------>')
console.log()

var nomes = ['Soluço', 'Astrid', 'Melequento', 'Perna de Peixe', 'Bocao']

var nomePesquisado = null
var i = 0 
//executa o while até encontrar o nome melequento
while(nomePesquisado == null && i < nomes.length){
    if (nomes[i] == 'Melequento'){
        nomePesquisado = nomes[i]
    } else {
        console.log(nomes[i] + ' não é o nome pesquisado')
    }
    i++
}

console.log('Nome encontrado ' + nomePesquisado)

console.log()
console.log('<------------------------------>')
console.log()

var flores = ['rosa', 'azul', 'amarelo', 'rosa', 'amarelo', 'verde']
var i = 0
var numeroDeFlores = 0
for (var i = 0; i < flores.length; i++){
    if (flores[i] == 'amarelo'){
        continue
    }
    numeroDeFlores++
}
console.log('Numero de Flores ' + numeroDeFlores)

console.log()
console.log('<------------------------------>')
console.log('<------bind call e apply------->')
console.log()

var carro = {
    nome: 'Fusca',
    marca: 'VW',
    mostrarDados: function (cor, ano){
        console.log(this.nome, ano, this.marca, cor)
    }
}
carro.mostrarDados('Azul', 1970)
console.log()
//Call
carro.mostrarDados.call({
    nome:'Opala',
    marca: 'Chevrolet',
}, 'Bordo', 1972)

//Bind
var brasiliaAmarela = carro.mostrarDados.bind({
    nome: 'Brasilia',
    marca: 'VW'
}, 'Amarela')

console.log()
brasiliaAmarela(1974)
brasiliaAmarela(1975)
brasiliaAmarela(1982)

console.log()
//apply

carro.mostrarDados.apply({
    nome:'Onix',
    marca:'Chevrolet'
}, ['Cinza', 2016])

console.log()
console.log('<------------------------------>')
console.log('<-----emprestimo de metodo----->')
console.log()

var objetoGato = {
    alimento: 'Ração',
    comer: function(){
        console.log("Estou comendo " + this.alimento)
    }
}

var objetoLeao = {
    alimento: 'Carne',
}
objetoLeao.comer = objetoGato.comer

objetoLeao.comer()

console.log()
console.log('<------------------------------>')
console.log('<-----------Herança------------>')
console.log()

//Primeira letra em maiusculo para identificar que é um construtor
var Carro = function(nome, cor, marca, ano){
    this.nome = nome,
    this.cor = cor,
    this.marca = marca,
    this.ano = ano
}

Carro.prototype.calcularIsencaoIPVA = function(){
    var anoAtual = new Date().getFullYear() - this.ano
    if(anoAtual >= 30){
        console.log('O carro ' + this.nome + ' possui isenção de IPVA.')
    } else {
        console.log('O carro ' + this.nome + ' não possui isenção de IPVA.')
    }
}

var fusca = new Carro('Fusca', 'Azul', 'VW', 1975)
var onix = new Carro('Onix', 'Bege', 'Chevrolet', 2014)
var opala = new Carro('Opala', 'Bordo', 'Chevrolet', 1973)

fusca.calcularIsencaoIPVA()
onix.calcularIsencaoIPVA()
opala.calcularIsencaoIPVA()

console.log()


//Executar no navegador f12
//como nao é um construtor o nome do objeto inicia minusculo
// var carroProto = {
//     velocidade: 0,
//     acelerar: function(){
//         this.velocidade += 5
//     },
//     parar: function(){
//         this.velocidade = 0
//     }
// }
// //utilizando uma função do prototype do Object para criar um objeto
// var fusca = Object.create(carroProto, {
//     nome: { value: 'Fusca' },
//     cor: { value: 'Azul' },
//     marca: { value: 'VW' },
//     ano: { value: 1975 }
// })

// console.log(fusca)

console.log('<------------------------------>')
console.log('<-----------Callback------------>')
console.log()

var arrAnoCarros = [1965, 1992, 1997, 1975, 1981]

//callback function
function calcularTempoCarro(anoCarro){
    var data = new Date()
    return data.getFullYear() - anoCarro
}

function anoDosCarros(arr, fun){
    var arrTempoCarros = []
    for (var i=0; i < arr.length; i++){
        arrTempoCarros.push(fun(arr[i]))
    }
    return arrTempoCarros
}

//Passando no segundo parametro uma função 
var arrCarros = anoDosCarros(arrAnoCarros, calcularTempoCarro)

console.log(arrCarros)

console.log()
console.log('<------------------------------>')
console.log('<-IIFE (Immediately Invoked Function Expressions->')
console.log('exec: navegador')

// (function(){
//     var pontuacao = Math.random() * 20
//     if (pontuacao >= 10){
//         console.log('Jogador Ganhou!')
//     } else {
//         console.log('Jogador Perdeu!')
//     }
// })()

console.log()
console.log('<-----------Closure------------->')
console.log()

function tempoIsencaoIPVA(anoAtual){
    var mensagem = 'Carro não possui isenção de ipva'
    var mensagemIsencao = 'Calculo dentro da faixa de isenção de ipva'

    return function(anoCarro){
        var idadeCarro = anoAtual - anoCarro
        if(idadeCarro > 30){
            console.log(mensagemIsencao)
        } else {
            console.log(mensagem)
        }
    }
}

var verificadorIPVA = tempoIsencaoIPVA(2022)

verificadorIPVA(1978)
verificadorIPVA(2005)

console.log()
console.log('<-----------Modulo------------->')
console.log('<-------Encapsulamento--------->')
console.log()

const moduloCarro = (function(){
    //variavel privada
    var velocidade = 0
    //funcao privada
    var girarEngrenagens = function(){
        velocidade += 5 
    }
    //funcao privada
    var aumentarVelocidade = function(){
        girarEngrenagens()
    }   
    //retorno interface de ação 
    return {
        acelerar: aumentarVelocidade
    } 
})()

moduloCarro.acelerar()