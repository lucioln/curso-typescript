//String 
let nome  = 'João'
console.log(nome)
//nome = 28

//Numbers 
let idade  = 27
//idade = 'Ana'
idade = 27.5
console.log(idade)

// boolean 
let possuiHobbies = false
//possuiHobbies = 1 
console.log(possuiHobbies)

//tipos explicitos 

let minhaIdade // == let minhaIdade:any
minhaIdade = 27
console.log(typeof minhaIdade)
minhaIdade = '27 anos'
console.log(typeof minhaIdade)

let minhaIdadeExplicita:number
//minhaIdadeExplicita = '27'
minhaIdadeExplicita = 24

// Array 

let hobbies: any[] = ['cozinhar', 'Praticar Esportes']
console.log(hobbies[0])
console.log(typeof hobbies)

hobbies = [100]
//hobbies = 100

// Tuplas -> define a ordem e os tipos dentro de um array

let endereco: [string, number, string] = ['Av Principal',99, 'Sao Luis']
console.log(endereco)
//endereco = [99, 'Av Principal']

// Enums  ->

enum Cor{
    Cinza, // Representa 0
    Verde = 100, // Representa 100
    Azul = 9, //Vai passar a representar o valor 10
    Laranja,
    Amarelo, 
    Vermelho = 100
}

let minhaCor: Cor = Cor.Verde
console.log(minhaCor)
console.log(Cor.Verde, Cor.Vermelho)
console.log(Cor.Azul, Cor.Laranja)

// Any

let carro:any = 'BMW'
console.log(typeof carro)
carro = {marca: 'BMW', ano: 2022, modelo: "320i"}
console.log(typeof carro)

//funcoes 

function retornaMeuNome():string{
    return nome
}
console.log(retornaMeuNome())

function digaOi():void{
    console.log('Oi')
    //return nome 
}

function multiplicar(numA: number, numB: number):number{
    return numA*numB
}
multiplicar(5,5)

//funcao como tipo 
let calculo: (numA:number, numB:number) => number
function somar(a:number, b:number):number{
    return a+b
}

calculo = somar
console.log(calculo(5,5))
calculo = multiplicar
console.log(calculo(5,5))

//Objeto

let usuario: {nome: string, idade:number} = {
    nome: 'Joao',
    idade: 27
}

usuario = {
    nome:"lucio", 
    idade:23
}

type Empregado  = {
    supervisores: string [],
    baterPonto:(hora:number) => string
}

//Unior Types
let nota: number | string = 10
console.log(`Minha nota é ${nota}!`)
nota = '10'
console.log(`Minha nota é ${nota}!`)

// Checando tipos
let valor = 30 
if (typeof valor === "number"){
    console.log('È um number')
}else{
    console.log(typeof valor)
}

// Tipo never -> quando vc quer dizer que a funcao nunca vai retornar
function falha(msg: string): never{
    throw new Error(msg)
}

const produto = {
    nome: 'Sabão',
    preco: 4,
    validarProduto(){
        if(!this.nome || this.nome.trim().length == 0){
            falha('Precisa ter um nome')
        }
        if(!this.preco || this.preco<=0){
            falha('Preço inválido ou não existente')
        }
    }
}

produto.validarProduto()

//null 

let altura = 12
//altura = null

let alturaOpicional: null | number = 12
alturaOpicional = null