
function echo(objeto: any) {
    return objeto
}

console.log(echo('João').length)
console.log(echo(27).length) //Retorna undefined
console.log(echo({ nome: 'João', idade: 27 }))

//Usando Generics
function echoMelhorado<TIPO>(objeto: TIPO): TIPO {
    return objeto
}

console.log(echoMelhorado('João').length)
//console.log(echoMelhorado(27).length) //Passa a retornar o erro no tipo number
console.log(echoMelhorado<number>(27))
console.log(echoMelhorado({ nome: 'João', idade: 27 }))

// Geberucs disponíveis na API do Typescript

const avaliacoes: Array<number> = [10, 9.3, 7.7]
avaliacoes.push(8.4)
// avaliacoes.push('5.5')
console.log(avaliacoes)

//Array 

function imprimir<T>(args: T[]) {
    args.forEach(elemento => {
        console.log(elemento)
    });
}

imprimir<number>([1, 2, 3])
imprimir<string>(['Lucio', 'Tacio', 'Vinicius'])

type Aluno = { nome: string, idade: number }
imprimir<Aluno>(
    [
        { nome: 'Lucio', idade: 24 },
        { nome: 'Tacio', idade: 30 },
        { nome: 'Vinicius', idade: 34 },
    ]
)

//Tipo Genérico

type Echo = <T>(data: T) => T
const chamarEcho: Echo = echoMelhorado
console.log(chamarEcho<string>('Alguma Coisa'))

//Classe com Generics 

abstract class OperacaoBinaria<T, R> {
    constructor(
        public operando1: T,
        public operando2: T) {
    }

    abstract executar(): R
}

class SomaBinaria extends OperacaoBinaria<number, number>{
    executar(): number {
        return this.operando1 + this.operando2
    }
}

console.log(new SomaBinaria(10, 10).executar())

class Data1 {
 
    dia: number
    mes: number
    ano: number
   
    constructor(dia: number = 1, mes: number = 1, ano: number = 1) {
      this.dia = dia
      this.mes = mes
      this.ano = ano
    }
  }

class DiferencaEntreDatas extends OperacaoBinaria <Data1, string>{
    getTime(data: Data1): number {
        let { dia, mes, ano } = data
        return new Date(`${mes}/${dia}/${ano}`).getTime()
    }

    executar(): string {
        const t1 = this.getTime(this.operando1)
        const t2 = this.getTime(this.operando2)
        const diferenca = Math.abs(t1 - t2)
        const dia = 1000 * 60 * 60 * 24
        return `${Math.ceil(diferenca / dia)} dia(s)`
    }
}


const d1 = new Data1(1,2,2020)
const d2 = new Data1(5,5,2020)
console.log(new DiferencaEntreDatas(d1,d2).executar())

//Desafio Classe Fila
//Atributo: fila(Array)

abstract class Fila<T>{
    private fila: Array<T> 
    
    constructor (...args:T[]){
        this.fila = args
    }

    entrar(item: T) {
        this.fila.push(item)
    }

    proximo(): T | undefined{
        return this.fila.shift()
    }

    imprimir(): void {
        console.log(this.fila)
    }
}

class FilaString extends Fila<string>{
}

let filaS1 = new FilaString('Vinicius', 'Tacio', 'Lucio')

filaS1.entrar('Pedro')
console.log(filaS1.proximo())
filaS1.imprimir()
console.log(filaS1.proximo())
console.log(filaS1.proximo())
console.log(filaS1.proximo())
console.log(filaS1.proximo())
filaS1.imprimir()
