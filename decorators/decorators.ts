
function logarClasse(constructor: Function){
    console.log(constructor)
}

function decoratorVazio(_:Function){}

function logarClasseSe(valor:boolean){
    return valor ? logarClasse : decoratorVazio
}


type Construtor = {new(...args: any[]):{}}

function logarObjeto(constructor: Construtor){
    console.log('Carregado...')
    return class extends constructor{
        constructor(...args: any[]){
            console.log('Antes...')
            super(...args)
            console.log('Depois')
        }
    }
}

// new Eletrodomestico()
// new Eletrodomestico()
// new Eletrodomestico()

interface Eletrodomestico{
    imprimir?():void
}


// @logarClasseSe(false)
@logarObjeto
@imprimivel
class Eletrodomestico{
    constructor(){
        console.log('novo...')
    }
}


function imprimivel(constructor:Function){
    constructor.prototype.imprimir = function (){
        console.log('criando funcao')
    }
}

const eletro = new Eletrodomestico()
eletro.imprimir && eletro.imprimir()

// Desafio Decorator perfilAdmin
const usuarioLogado = {
    nome: 'Guilherme Filho',
    email: 'guigui@gmail.com',
    admin: true
}


@perfilAdmin
class MudancaAdministrativa {
    critico() {
        console.log('Algo crítico foi alterado!')
    }
}

new MudancaAdministrativa().critico()

function perfilAdmin<T extends Construtor>(construtor: T) {
    return class extends construtor {
        constructor(...args: any[]) {
            super(...args)
            if (!usuarioLogado || !usuarioLogado.admin) {
                throw new Error('Sem permissão!')
            }
        }

    }
}


class ContaCorrente {
    @naoNegativo
    private saldo:number

    constructor(saldo:number){
        this.saldo = saldo
    }

    @congelar
    sacar(valor:number){
        if(valor<=this.saldo){
            this.saldo -= valor
            return true
        }else{
            return false
        }
    }

    @congelar
    getSaldo(){
        return this.saldo
    }

}

const cc = new ContaCorrente(10248.57)
cc.sacar(5000)
console.log(cc.getSaldo())

// cc.getSaldo = function(){
//     return this['saldo'] + 7000
// }
console.log(cc.getSaldo());

//Object.freeze
function congelar(alvo: any, 
        nomePropriedade: string, 
        descritor: PropertyDescriptor){
        
            console.log(alvo)
            console.log(nomePropriedade)
            descritor.writable = false
}


function naoNegativo(alvo:any, nomePropriedade: string){
    delete alvo[nomePropriedade]
    Object.defineProperty(alvo, nomePropriedade, {
        get: function():any{
            return alvo["_"+nomePropriedade]
        },

        set: function(valor:any):void{
            if(valor < 0){
                throw Error('Saldo Inválido')
            }else{
                alvo["_"+nomePropriedade] = valor
            }
        }
    })
}