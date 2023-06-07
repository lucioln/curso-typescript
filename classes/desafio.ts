// Exercício 1 - Classe
// function Moto(nome) {
//     this.nome = nome
//     this.velocidade = 0

//     this.buzinar = function() {
//         console.log('Toooooooooot!')
//     }

//     this.acelerar= function(delta) {
//         this.velocidade = this.velocidade + delta
//     }
// }

class Moto {
    constructor(
        public nome: string,
        public velocidade: number = 0) {
    }

    public buzinar() {
        console.log('Toooooooooot!')
    }

    public acelerar(delta: number): number {
        return this.velocidade += delta
    }
}


const moto = new Moto('Ducati')
moto.buzinar()
console.log(moto.velocidade)
moto.acelerar(30)
console.log(moto.velocidade)

// Exercício 2 - Herança
class Objeto2D {
    public base: number
    public altura: number

    constructor(base: number, altura: number) {
        this.base = base
        this.altura = altura
    }

    public area() {
        return this.base * this.altura
    }
}

class Retangulo extends Objeto2D {
}

const retangulo = new Retangulo(5, 7)
console.log(retangulo.area())



// Exercício 3 - Getters & Setters
class Estagiario {
    private _primeiroNome: string = ''

    get primeiroNome(): string{
        return this._primeiroNome
    }

    set primeiroNome(valor:string){
        if(valor.length>=3){
            this._primeiroNome = valor
        }else{
            console.log('error: invalid name');
        }
    }
}

const estagiario = new Estagiario;
estagiario.primeiroNome = 'Lucio'

console.log(estagiario.primeiroNome)
estagiario.primeiroNome = 'Li'
console.log(estagiario.primeiroNome)
