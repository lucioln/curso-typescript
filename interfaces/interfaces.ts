// function saudarComOla(pessoa:{nome:string}){
//     console.log('Olá ' + pessoa.nome)
// }

// function mudarNome(pessoa:{nome:string}, novoNome:string){
//     pessoa.nome = novoNome
// }

// REFATORANDO O CODIGO COM INTERFACES

interface Humano {
    nome: string
    idade?: number
    [prop: string]: any
    saudar(sobrenome: string): void
}

function saudarComOla(pessoa: Humano) {
    console.log('Olá ' + pessoa.nome)
}

function mudarNome(pessoa: Humano, novoNome: string) {
    pessoa.nome = novoNome
}


const pessoa = {
    nome: 'João',
    idade: 27,
    saudar(sobrenome: string) {
        console.log('Meu nome é ' + this.nome + ' ' + sobrenome)
    }
}

mudarNome(pessoa, 'Lucio');

// pessoa.saudar('Noleto')

//Utilizando Classes com Interfaces

class Cliente implements Humano {
    nome: string = ''
    idade?: number | undefined

    saudar(sobrenome: string): void {
        console.log('Meu nome é ' + this.nome + ' ' + sobrenome)
    }

}

const meuCliente = new Cliente()
meuCliente.nome = 'Han'
meuCliente.saudar('Solo');

//Utilizando Função com Interfaces
interface FuncaoCalculo {
    (a: number, b: number): number
}

let potencia: FuncaoCalculo

potencia = function (base: number, exp: number): number {
    return Math.pow(base, exp);
}

console.log(potencia(2, 3))

// Herança
interface A {
    a(): void
}

interface B {
    b(): void
}

interface ABC extends A, B {
    c(): void
}

class RealA implements A {
    a(): void { }
}

class RealAB implements A, B {
    a(): void { }
    b(): void { }
}

class RealABC implements ABC {
    a(): void { }
    b(): void { }
    c(): void { }
}

abstract class AbstrataABD implements A, B {
    a(): void { }
    b(): void { }
    abstract d(): void
}

interface Object {
    log(): void
}

Object.prototype.log = function () {
    console.log(this.toString())
}

const x = 2
const y = 3
const z = 4

x.log()
y.log()
z.log()

const cli = {
    nome: 'Samantha',
    toString() {
        return this.nome
    }
}
cli.log()