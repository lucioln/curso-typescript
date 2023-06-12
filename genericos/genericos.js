"use strict";
function echo(objeto) {
    return objeto;
}
console.log(echo('João').length);
console.log(echo(27).length); //Retorna undefined
console.log(echo({ nome: 'João', idade: 27 }));
//Usando Generics
function echoMelhorado(objeto) {
    return objeto;
}
console.log(echoMelhorado('João').length);
//console.log(echoMelhorado(27).length) //Passa a retornar o erro no tipo number
console.log(echoMelhorado(27));
console.log(echoMelhorado({ nome: 'João', idade: 27 }));
// Geberucs disponíveis na API do Typescript
const avaliacoes = [10, 9.3, 7.7];
avaliacoes.push(8.4);
// avaliacoes.push('5.5')
console.log(avaliacoes);
//Array 
function imprimir(args) {
    args.forEach(elemento => {
        console.log(elemento);
    });
}
imprimir([1, 2, 3]);
imprimir(['Lucio', 'Tacio', 'Vinicius']);
imprimir([
    { nome: 'Lucio', idade: 24 },
    { nome: 'Tacio', idade: 30 },
    { nome: 'Vinicius', idade: 34 },
]);
const chamarEcho = echoMelhorado;
console.log(chamarEcho('Alguma Coisa'));
//Classe com Generics 
class OperacaoBinaria {
    constructor(operando1, operando2) {
        this.operando1 = operando1;
        this.operando2 = operando2;
    }
}
class SomaBinaria extends OperacaoBinaria {
    executar() {
        return this.operando1 + this.operando2;
    }
}
console.log(new SomaBinaria(10, 10).executar());
class Data1 {
    constructor(dia = 1, mes = 1, ano = 1) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
class DiferencaEntreDatas extends OperacaoBinaria {
    getTime(data) {
        let { dia, mes, ano } = data;
        return new Date(`${mes}/${dia}/${ano}`).getTime();
    }
    executar() {
        const t1 = this.getTime(this.operando1);
        const t2 = this.getTime(this.operando2);
        const diferenca = Math.abs(t1 - t2);
        const dia = 1000 * 60 * 60 * 24;
        return `${Math.ceil(diferenca / dia)} dia(s)`;
    }
}
const d1 = new Data1(1, 2, 2020);
const d2 = new Data1(5, 5, 2020);
console.log(new DiferencaEntreDatas(d1, d2).executar());
//Desafio Classe Fila
//Atributo: fila(Array)
class Fila {
    constructor(...args) {
        this.fila = args;
    }
    entrar(item) {
        this.fila.push(item);
    }
    proximo() {
        return this.fila.shift();
    }
    imprimir() {
        console.log(this.fila);
    }
}
class FilaString extends Fila {
}
let filaS1 = new FilaString('Vinicius', 'Tacio', 'Lucio');
filaS1.entrar('Pedro');
console.log(filaS1.proximo());
filaS1.imprimir();
console.log(filaS1.proximo());
console.log(filaS1.proximo());
console.log(filaS1.proximo());
console.log(filaS1.proximo());
filaS1.imprimir();
//# sourceMappingURL=genericos.js.map