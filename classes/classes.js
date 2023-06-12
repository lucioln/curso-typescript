"use strict";
class Data {
    constructor(dia = 1, mes = 1, ano = 1) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
// console.log(Aniversario)
class DataEsperta {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const AniversarioEsperto = new DataEsperta(28, 11, 1998);
const DataPadrao = new DataEsperta;
// console.log(AniversarioEsperto)
class Produto {
    constructor(nome, preco, desconto = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    getPrecoComDesconto() {
        const precoComDesconto = this.preco - ((this.desconto / 100) * this.preco);
        return parseFloat(precoComDesconto.toFixed(2));
    }
    resumo() {
        return 'O ' + this.nome + ' custa: ' + this.getPrecoComDesconto();
    }
    setDesconto(desconto) {
        if (desconto < 99 && desconto > 0) {
            this.desconto = desconto;
            return;
        }
        else {
            return 'o Desconto não deve possuir um valor entre 0 e 99';
        }
    }
}
const cocaCola = new Produto("Coca-Cola 2L", 9.99);
const guaranaAntartica = new Produto("Guaraná-Antártica 2L", 6.99);
const guaranaJesus = new Produto("Guaraná-Jesus 2L", 8.99, 10);
// console.log(cocaCola)
// console.log(guaranaAntartica)
// console.log(guaranaJesus.resumo())
class Carro {
    constructor(marca, modelo, velocidadeMaxima = 200) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
        this.velocidadeAtual = 0;
        this.modelo = modelo;
        this.marca = marca;
        this.velocidadeMaxima = velocidadeMaxima;
    }
    alteraVelocidade(delta) {
        const novaVelocidade = this.velocidadeAtual + delta;
        if (this.velocidadeValida(novaVelocidade)) {
            this.velocidadeAtual = novaVelocidade;
        }
        else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
        }
        return this.velocidadeAtual;
    }
    velocidadeValida(velocidade) {
        if (velocidade >= 0 && velocidade <= this.velocidadeMaxima) {
            return true;
        }
        else {
            return false;
        }
    }
    acelerar() {
        return this.alteraVelocidade(5);
    }
    frear() {
        return this.alteraVelocidade(-5);
    }
}
const carro1 = new Carro('Fiat', 'Mobi', 190);
//Herança 
class Ferrari extends Carro {
    constructor(modelo, velocidadeMaxima) {
        super('Ferrari', modelo, velocidadeMaxima);
    }
    acelerar() {
        return this.alteraVelocidade(20);
    }
    frear() {
        return this.alteraVelocidade(-15);
    }
}
const f40 = new Ferrari('F40', 324);
//Somente Leitura
class Aviao {
    constructor(modelo, prefixo) {
        this.prefixo = prefixo;
        this.modelo = modelo;
    }
    //métodos estáticos
    voar() {
        return 'estou voando';
    }
}
const turboHelice = new Aviao('TU-114', 'PT-134');
// turboHelice.modelo = 'Nao recebe pois é readonly  =  ERROR';
console.log(turboHelice);
//# sourceMappingURL=classes.js.map